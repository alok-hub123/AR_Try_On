import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function MaleCasual(props) {
  const { nodes, materials } = useGLTF(require('../assets/models/male_casual.glb'))

  const meshRef = useRef()
  useFrame((state, delta) => {meshRef.current.rotation.y += delta * 0.3})
  return (
    <group {...props} dispose={null} ref={meshRef} position={[0, -0.7, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.81}>
          <group name="standing_manfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Body_map}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.outfit_map}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.outfit_map}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.outfit_map}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Head_map}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.LeftCornea_map}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.RightCornea_map}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.TeethLower_map}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.TeethLower_map}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.Eyelashes_map}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Object_8" />
                  <group name="Object_10" />
                  <group name="Object_12" />
                  <group name="Object_14" />
                  <group name="Body" />
                  <group name="shoe_R" />
                  <group name="shoe_L" />
                  <group name="clothing" />
                  <group name="Head" />
                  <group name="LeftCornea" />
                  <group name="RightCornea" />
                  <group name="TeethLower" />
                  <group name="TeethUpper" />
                  <group name="Eyelashes" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(require('../assets/models/male_casual.glb'))