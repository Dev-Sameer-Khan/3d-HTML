import React, { useRef } from 'react'
import { useGLTF} from '@react-three/drei'

export function Room(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/room.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="GalleryRoomfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cube" rotation={[-Math.PI / 2, 0, 0]} scale={[439.108, 439.108, 150]}>
                  <mesh
                    name="Cube_Wall_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Wall_0.geometry}
                    material={materials.Wall}
                  />
                  <mesh
                    name="Cube_Floor_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Floor_0.geometry}
                    material={materials.Floor}
                  />
                </group>
                <group
                  name="Doorframe"
                  position={[437.806, 100, 277.662]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.5, 41.681, 100]}>
                  <mesh
                    name="Doorframe_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Doorframe_Frame_0.geometry}
                    material={materials.Frame}
                  />
                </group>
                <group
                  name="Door"
                  position={[437.678, 0.085, 319.343]}
                  rotation={[-Math.PI / 2, 0, 0.324]}
                  scale={[2.5, 41.681, 100]}>
                  <mesh
                    name="Door_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Door_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="Door_Metall_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Door_Metall_0.geometry}
                    material={materials.Metall}
                  />
                </group>
                <group
                  name="WindowFrame"
                  position={[271.157, 78.033, 459.373]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="WindowFrame_Wall_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.WindowFrame_Wall_0.geometry}
                    material={materials.Wall}
                  />
                </group>
                <group
                  name="WindowFrame001"
                  position={[-10.988, 78.033, 459.373]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="WindowFrame001_Wall_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.WindowFrame001_Wall_0.geometry}
                    material={materials.Wall}
                  />
                </group>
                <group
                  name="WindowFrame002"
                  position={[-299.042, 78.033, 459.373]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="WindowFrame002_Wall_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.WindowFrame002_Wall_0.geometry}
                    material={materials.Wall}
                  />
                </group>
                <group name="Plane001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Plane001_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Area002"
                  position={[13.487, 138.391, -51.347]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[174, 92, 20]}>
                  <group name="Object_21" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_22" />
                  </group>
                </group>
                <group
                  name="Plane004"
                  position={[-283.237, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Plane004_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="window1"
                  position={[271.157, 78.033, 461.154]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="window1_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.window1_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="window1_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.window1_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Window2"
                  position={[271.157, 78.033, 474.671]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="Window2_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Window2_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="Window2_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Window2_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="window1001"
                  position={[-10.988, 78.033, 461.154]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="window1001_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.window1001_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="window1001_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.window1001_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Window2001"
                  position={[-10.988, 78.033, 474.671]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="Window2001_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Window2001_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="Window2001_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Window2001_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="window1002"
                  position={[-299.042, 78.033, 461.154]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="window1002_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.window1002_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="window1002_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.window1002_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="Window2002"
                  position={[-299.042, 78.033, 474.671]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[50, 20.466, 90]}>
                  <mesh
                    name="Window2002_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Window2002_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="Window2002_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Window2002_Glass_0.geometry}
                    material={materials.Glass}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/room.glb')
