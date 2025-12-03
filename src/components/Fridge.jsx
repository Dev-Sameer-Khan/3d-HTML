import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Fridge(props) {
  const { nodes, materials } = useGLTF('/fridge.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fridge_0.geometry}
        material={materials.Frigo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.386}
      />
    </group>
  )
}

useGLTF.preload('/fridge.glb')