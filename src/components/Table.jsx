
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Table(props) {
  const { nodes, materials } = useGLTF('/table.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-4.677, 11.294, -4.466]} rotation={[0, 0.802, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.CHOOB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['ZIR_CHARM.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.PICH}
        />
      </group>
      <group position={[4.696, 11.294, 4.593]} rotation={[-Math.PI, -0.802, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.CHOOB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['ZIR_CHARM.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.PICH}
        />
      </group>
      <group position={[4.476, 11.294, -4.666]} rotation={[0, -0.768, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.CHOOB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['ZIR_CHARM.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.PICH}
        />
      </group>
      <group position={[-4.723, 11.294, 4.853]} rotation={[-Math.PI, 0.768, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.CHOOB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials['ZIR_CHARM.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.PICH}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.CHOOB}
        position={[-1.745, -0.154, -0.711]}
        rotation={[-3.104, 0.222, -3.108]}
        scale={[-1, 1, 1]}
      />
    </group>
  )
}

useGLTF.preload('/table.glb')
