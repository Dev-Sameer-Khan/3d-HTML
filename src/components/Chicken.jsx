
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Chicken(props) {
  const { nodes, materials } = useGLTF('/chicken.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frango_frango_0.geometry}
        material={materials.frango}
        position={[0.002, 148.206, 0]}
        rotation={[-Math.PI / 2, 0, -0.001]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Prato_Material_0.geometry}
        material={materials.Material}
        position={[0.515, 58.875, 4.525]}
        rotation={[-Math.PI / 2, 0, -0.001]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.batata_batatas_0.geometry}
        material={materials.batatas}
        position={[-29.031, 56.74, 141.671]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/chicken.glb')
