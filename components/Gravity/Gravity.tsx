import { ArcballControls, Environment, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as React from 'react'
import { Suspense } from 'react'
import { Shape, ShapeGeometry, Vector3 } from 'three'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry'

function Ball() {
  const texture = useTexture('/gravity/ball-texture.png')

  return (
    <mesh position={new Vector3(0, 0, 0)} scale={0.1}>
      {/*<boxGeometry args={[2, 2, 2]} />*/}
      <sphereBufferGeometry args={[1, 64, 64]} />
      {/*<meshNormalMaterial />*/}
      <meshPhysicalMaterial
        envMapIntensity={0.4}
        map={texture}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

function Heart() {
  const texture = useTexture('/gravity/ball-texture.png')
  const x = 0,
    y = 0

  const heartShape = new Shape()

  heartShape.moveTo(x + 5, y + 5)
  heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
  heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
  heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
  heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
  heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
  heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)

  const geometry = new ShapeGeometry(heartShape)

  useFrame(() => {
    // geometry.rotateX(0.01)
    geometry.rotateY(0.0001)
  })

  return null

  return (
    <mesh geometry={geometry}>
      <meshPhysicalMaterial
        envMapIntensity={0.4}
        map={texture}
        clearcoat={0.8}
        clearcoatRoughness={0}
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

function Spaceship() {
  const posVector = new Vector3(0, 0, 0)
  const l = 0.5 //length
  const h = 0.4 // height
  const w = 0.5 // width
  const back = 0.25 // back

  const geometry = new ConvexGeometry([
    new Vector3(0, 0, 0), // front tip
    new Vector3(-w / 2, 0, l + back), // left
    new Vector3(0, h / 3, l), // center top
    new Vector3(0, (h / 3) * -1, l), // center top
    new Vector3(0, 0, l), // center top
    new Vector3(w / 2, 0, l + back), // right
  ])

  // geometry.translate(0, 0, ((l + back) / 2) * -1)
  // geometry.rotateY(90)
  // geometry.rotateX(90)

  useFrame(() => {
    // geometry.rotateX(0.01)
    // geometry.rotateY(0.01)
  })

  return (
    <mesh geometry={geometry}>
      <meshNormalMaterial />
    </mesh>
  )
}

function Background() {
  // const texture = useTexture('/gravity/ball-texture.png')
  const posVector = new Vector3(0, 0, -100)

  return (
    <mesh position={posVector}>
      <planeGeometry args={[100, 100]} />
      {/*<meshBasicMaterial map={texture} />*/}
      {/*<meshDistanceMaterial />*/}
      <meshDepthMaterial />
    </mesh>
  )
}

export function Gravity(): React.ReactElement {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas dpr={[1, 2]}>
          <Background />
          <Environment preset="sunset" />

          {/*<ambientLight intensity={0.1} />*/}
          {/*<directionalLight color="red" position={[10, 3, 5]} />*/}
          <Ball />
          <Spaceship />
          <Heart />
          <ArcballControls />
        </Canvas>
      </Suspense>
    </>
  )
}
