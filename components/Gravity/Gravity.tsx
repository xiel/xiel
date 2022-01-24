import { ArcballControls, Environment, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as React from 'react'
import { Suspense } from 'react'
import { Vector3 } from 'three'

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
        <Canvas dpr={[1, 2]} frameloop="demand">
          <Background />
          <Environment preset="city" />

          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[10, 3, 5]} />
          <Ball />
          <ArcballControls />
        </Canvas>
      </Suspense>
    </>
  )
}
