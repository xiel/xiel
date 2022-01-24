import { ArcballControls, Environment, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as React from 'react'
import { Suspense } from 'react'
import { Shape, ShapeGeometry, Vector3 } from 'three'

function Ball() {
  const texture = useTexture('/gravity/ball-texture.png')

  return (
    <mesh>
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

function Spaceship() {
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
    geometry.rotateY(0.01)
  })

  return (
    <mesh geometry={geometry}>
      <meshNormalMaterial />
    </mesh>
  )
}

function Background() {
  const texture = useTexture('/gravity/ball-texture.png')
  const posVector = new Vector3(0, 0, -100)

  return (
    <mesh position={posVector}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export function Gravity(): React.ReactElement {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas dpr={[1, 2]}>
          <Background />
          <Environment preset="city" />

          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[10, 3, 5]} />
          <Ball />
          <Spaceship />
          <ArcballControls />
        </Canvas>
      </Suspense>
    </>
  )
}
