import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function MaleFormal(props) {
  const { nodes, materials } = useGLTF(require('../assets/models/male_formal.glb'))

  const meshRef = useRef()
  useFrame((state, delta) => {meshRef.current.rotation.y += delta * 0.3})
  return (
    <group {...props} dispose={null} ref={meshRef} scale={0.8} position={[0, -0.7, 0]}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_6.geometry}
        material={materials.AvatarBody}
        skeleton={nodes.Object_6.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.AvatarEyelashes}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.AvatarHead}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.AvatarLeftCornea}
        skeleton={nodes.Object_9.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_10.geometry}
        material={materials.AvatarLeftEyeball}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.AvatarRightCornea}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_12.geometry}
        material={materials.AvatarRightEyeball}
        skeleton={nodes.Object_12.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.AvatarTeethLower}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_14.geometry}
        material={materials.AvatarTeethUpper}
        skeleton={nodes.Object_14.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_15.geometry}
        material={materials.outfit_bottom}
        skeleton={nodes.Object_15.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_16.geometry}
        material={materials.outfit_shoes}
        skeleton={nodes.Object_16.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_17.geometry}
        material={materials.outfit_top}
        skeleton={nodes.Object_17.skeleton}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/models/male_formal.glb'))