import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  Group,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three'

/**
 * A procedural spiral galaxy: stars, glowing dust, a bright core and a
 * distant starfield. Everything is GPU points with one soft-sprite shader,
 * so it stays cheap enough to run behind the page.
 */

export interface GalaxyOptions {
  /** Render one static frame instead of animating */
  reducedMotion?: boolean
  /** Called once the first frame is on screen */
  onReady?: () => void
}

export interface GalaxyHandle {
  dispose: () => void
  setPaused: (paused: boolean) => void
}

// Small seeded PRNG, so the galaxy looks the same on every visit
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const vertexShader = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScale;
  uniform float uTwinkle;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    float twinkle = 1.0 - uTwinkle * 0.5 * (1.0 + sin(uTime * (0.6 + aSeed * 1.8) + aSeed * 40.0));
    vAlpha = twinkle;
    vColor = aColor;

    gl_PointSize = aSize * uPixelRatio * uScale / -mvPosition.z;
  }
`

const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  uniform float uFalloff;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    // gaussian-ish soft disc
    float a = exp(-d * d * uFalloff);
    gl_FragColor = vec4(vColor, a * vAlpha * uOpacity);
  }
`

interface Layer {
  positions: Float32Array
  colors: Float32Array
  sizes: Float32Array
  seeds: Float32Array
}

function makeLayer(count: number): Layer {
  return {
    positions: new Float32Array(count * 3),
    colors: new Float32Array(count * 3),
    sizes: new Float32Array(count),
    seeds: new Float32Array(count),
  }
}

function makePoints(
  layer: Layer,
  uniforms: Record<string, { value: number }>,
  blending: typeof AdditiveBlending,
) {
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(layer.positions, 3))
  geometry.setAttribute('aColor', new BufferAttribute(layer.colors, 3))
  geometry.setAttribute('aSize', new BufferAttribute(layer.sizes, 1))
  geometry.setAttribute('aSeed', new BufferAttribute(layer.seeds, 1))

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending,
  })
  return new Points(geometry, material)
}

const ARMS = 2
const INTRO_SECONDS = 4
const RADIUS = 6
const SPIN = 0.85

// Position on a spiral arm, with scatter that grows away from the arm centre
function armPoint(rand: () => number, r: number, scatter: number) {
  const arm = Math.floor(rand() * ARMS)
  const angle = (arm / ARMS) * Math.PI * 2 + r * SPIN
  const spread = () =>
    Math.pow(rand(), 2.2) * (rand() < 0.5 ? 1 : -1) * scatter * (0.3 + r * 0.25)
  return {
    x: Math.cos(angle) * r + spread(),
    z: Math.sin(angle) * r + spread(),
    angle,
  }
}

function gaussian(rand: () => number) {
  // Box–Muller
  const u = 1 - rand()
  const v = rand()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

export function createGalaxy(
  canvas: HTMLCanvasElement,
  { reducedMotion = false, onReady }: GalaxyOptions = {},
): GalaxyHandle {
  const small = Math.min(window.innerWidth, window.innerHeight) < 700
  const rand = mulberry32(20140925)

  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'low-power',
  })
  const pixelRatio = Math.min(window.devicePixelRatio, 2)
  renderer.setPixelRatio(pixelRatio)
  renderer.setClearColor(new Color('#010008'), 1)

  const scene = new Scene()
  const camera = new PerspectiveCamera(55, 1, 0.1, 200)

  // The galaxy disc: tilted and turned so the arms run diagonally
  const galaxy = new Group()
  galaxy.rotation.set(0.62, 0, -0.48)
  scene.add(galaxy)

  const shared = { uPixelRatio: { value: pixelRatio }, uScale: { value: 1 } }
  const tmp = new Color()

  // --- Stars -------------------------------------------------------------
  const starCount = small ? 26000 : 60000
  const stars = makeLayer(starCount)
  const coreColor = new Color('hsl(40, 85%, 80%)')
  const midColor = new Color('hsl(265, 35%, 86%)')
  const edgeColor = new Color('hsl(220, 70%, 78%)')

  for (let i = 0; i < starCount; i++) {
    // denser towards the core, but spread enough that additive blending
    // does not clip the centre to a flat white blob
    const r = 0.25 + Math.pow(rand(), 1.4) * RADIUS
    const bulge = rand() < 0.08
    let x: number
    let z: number
    if (bulge) {
      const a = rand() * Math.PI * 2
      const br = Math.abs(gaussian(rand)) * 0.55
      x = Math.cos(a) * br
      z = Math.sin(a) * br
    } else {
      const p = armPoint(rand, r, 1.1)
      x = p.x
      z = p.z
    }
    const dist = Math.hypot(x, z)
    const thickness = 0.06 + 0.35 * Math.exp(-dist * 1.4)
    const y = gaussian(rand) * thickness

    stars.positions.set([x, y, z], i * 3)

    const t = Math.min(dist / RADIUS, 1)
    if (t < 0.35) tmp.copy(coreColor).lerp(midColor, t / 0.35)
    else tmp.copy(midColor).lerp(edgeColor, (t - 0.35) / 0.65)
    // a few hot blue-white giants
    if (rand() < 0.015) tmp.set('hsl(210, 100%, 92%)')
    const brightness = (0.7 + rand() * 0.3) * Math.min(1, 0.12 + dist * 0.35)
    stars.colors.set(
      [tmp.r * brightness, tmp.g * brightness, tmp.b * brightness],
      i * 3,
    )

    stars.sizes[i] =
      (rand() < 0.02 ? 4 : 1.5 + rand() * 1.6) * (small ? 1.2 : 1)
    stars.seeds[i] = rand()
  }

  const starPoints = makePoints(
    stars,
    {
      ...shared,
      uTime: { value: 0 },
      uOpacity: { value: 1 },
      uFalloff: { value: 4 },
      uTwinkle: { value: 0.35 },
    },
    AdditiveBlending,
  )
  galaxy.add(starPoints)

  // --- Glowing dust: big, faint, coloured clouds along the arms ----------
  const glowCount = small ? 900 : 1800
  const glow = makeLayer(glowCount)
  const glowPalette = [
    new Color('hsl(268, 70%, 58%)'),
    new Color('hsl(228, 80%, 60%)'),
    new Color('hsl(210, 70%, 62%)'),
    new Color('hsl(295, 60%, 58%)'),
  ]
  for (let i = 0; i < glowCount; i++) {
    const r = 0.4 + Math.pow(rand(), 0.9) * RADIUS
    const p = armPoint(rand, r, 0.7)
    glow.positions.set([p.x, gaussian(rand) * 0.08, p.z], i * 3)
    tmp.copy(glowPalette[Math.floor(rand() * glowPalette.length)])
    // pink star-forming knots are rarer and smaller
    const knot = rand() < 0.12
    if (knot) tmp.set('hsl(335, 90%, 68%)')
    glow.colors.set([tmp.r, tmp.g, tmp.b], i * 3)
    glow.sizes[i] = knot ? 18 + rand() * 18 : 60 + rand() * 90
    glow.seeds[i] = rand()
  }
  const glowPoints = makePoints(
    glow,
    {
      ...shared,
      uTime: { value: 0 },
      uOpacity: { value: 0.02 },
      uFalloff: { value: 3 },
      uTwinkle: { value: 0 },
    },
    AdditiveBlending,
  )
  galaxy.add(glowPoints)

  // --- Core glow ---------------------------------------------------------
  const core = makeLayer(3)
  const coreSizes = [220, 80, 26]
  const coreColors = [
    'hsl(285, 60%, 35%)',
    'hsl(35, 80%, 60%)',
    'hsl(45, 100%, 92%)',
  ]
  coreSizes.forEach((size, i) => {
    tmp.set(coreColors[i])
    core.colors.set([tmp.r, tmp.g, tmp.b], i * 3)
    core.sizes[i] = size
  })
  const corePoints = makePoints(
    core,
    {
      ...shared,
      uTime: { value: 0 },
      uOpacity: { value: 0.45 },
      uFalloff: { value: 5 },
      uTwinkle: { value: 0 },
    },
    AdditiveBlending,
  )
  corePoints.renderOrder = 2
  galaxy.add(corePoints)

  // --- Distant starfield on a shell around everything --------------------
  const fieldCount = small ? 1500 : 3000
  const field = makeLayer(fieldCount)
  for (let i = 0; i < fieldCount; i++) {
    const u = rand() * 2 - 1
    const a = rand() * Math.PI * 2
    const s = Math.sqrt(1 - u * u)
    const d = 40 + rand() * 40
    field.positions.set(
      [Math.cos(a) * s * d, u * d, Math.sin(a) * s * d],
      i * 3,
    )
    tmp.setHSL(0.6 + rand() * 0.2, 0.4, 0.75 + rand() * 0.25)
    field.colors.set([tmp.r, tmp.g, tmp.b], i * 3)
    field.sizes[i] = 6 + Math.pow(rand(), 6) * 30
    field.seeds[i] = rand()
  }
  const fieldPoints = makePoints(
    field,
    {
      ...shared,
      uTime: { value: 0 },
      uOpacity: { value: 0.9 },
      uFalloff: { value: 6 },
      uTwinkle: { value: 0.6 },
    },
    AdditiveBlending,
  )
  scene.add(fieldPoints)

  const timed = [starPoints, glowPoints, corePoints, fieldPoints]

  // --- Layout ------------------------------------------------------------
  let cameraZ = 11
  function resize() {
    const w = canvas.clientWidth || window.innerWidth
    const h = canvas.clientHeight || window.innerHeight
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    // keep the galaxy filling the width on portrait screens
    cameraZ = w / h < 1 ? 18 : 11
    camera.position.set(0, 0, cameraZ)
    camera.updateProjectionMatrix()
    // point sizes scale with the viewport height, like the scene does
    shared.uScale.value = h / 60
    // shift the galaxy up and right, behind the space above the intro text
    galaxy.position.set(w / h < 1 ? 0.5 : 1.4, w / h < 1 ? 4 : 1.6, 0)
  }
  resize()

  // --- Loop --------------------------------------------------------------
  let raf = 0
  let paused = false
  let last = performance.now()
  let time = 0
  let ready = false

  function frame(now: number) {
    const dt = Math.min((now - last) / 1000, 0.1)
    last = now
    time += dt

    // entrance: the camera glides in while the disc spins in and settles
    const intro = reducedMotion ? 1 : Math.min(time / INTRO_SECONDS, 1)
    const settle = 1 - Math.pow(1 - intro, 3)
    const introSpin = (1 - settle) * -1.1
    camera.position.z = cameraZ * (1 + 0.7 * (1 - settle))

    // slow rigid spin, dust a touch slower for a little depth
    starPoints.rotation.y = introSpin + time * 0.025
    corePoints.rotation.y = introSpin + time * 0.025
    glowPoints.rotation.y = introSpin + time * 0.022
    fieldPoints.rotation.y = time * 0.002
    for (const p of timed) {
      ;(p.material as ShaderMaterial).uniforms.uTime.value = time
    }

    renderer.render(scene, camera)
    if (!ready) {
      ready = true
      onReady?.()
    }
    if (!paused && !reducedMotion) raf = requestAnimationFrame(frame)
  }

  function setPaused(next: boolean) {
    if (next === paused) return
    paused = next
    cancelAnimationFrame(raf)
    if (!paused && !reducedMotion) {
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
  }

  // re-render on resize, so a paused or static galaxy is not stretched
  function onResize() {
    resize()
    if (ready) renderer.render(scene, camera)
  }
  window.addEventListener('resize', onResize)

  raf = requestAnimationFrame(frame)

  return {
    setPaused,
    dispose() {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      for (const p of timed) {
        p.geometry.dispose()
        ;(p.material as ShaderMaterial).dispose()
      }
      renderer.dispose()
    },
  }
}
