import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function FemaleFormal(props) {
  const { nodes, materials } = useGLTF(require('../assets/models/female_formal.glb'))

  const meshRef = useRef()
  useFrame((state, delta) => {meshRef.current.rotation.y += delta * 0.3})
  return (
    <group {...props} dispose={null} ref={meshRef} position={[0, -0.7, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.84}>
          <group name="c4fe546286044f208f133dc89bfc8fdefbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="AvatarRoot">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.AvatarBody}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.AvatarEyelashes}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.AvatarHead}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.AvatarLeftCornea}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.AvatarLeftEyeball}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.AvatarRightCornea}
                      skeleton={nodes.Object_12.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.AvatarRightEyeball}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.AvatarTeethLower}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.AvatarTeethUpper}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.haircut}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.outfit}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <group name="AvatarBody" />
                    <group name="AvatarEyelashes" />
                    <group name="AvatarHead" />
                    <group name="AvatarLeftCornea" />
                    <group name="AvatarLeftEyeball" />
                    <group name="AvatarRightCornea" />
                    <group name="AvatarRightEyeball" />
                    <group name="AvatarTeethLower" />
                    <group name="AvatarTeethUpper" />
                    <group name="haircut" />
                    <group name="outfit" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(require('../assets/models/female_formal.glb'))
