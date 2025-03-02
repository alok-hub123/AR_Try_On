import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function MaleFormal(props) {
  const { nodes, materials } = useGLTF(require('../assets/models/mformalcompressed.glb'))

  const groupRef = useRef(); // Reference to the group
  
    // Continuous rotation using useFrame
    useFrame((state, delta) => {
      if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.3; // Rotate around Y-axis
      }
    });
  return (
    <group {...props} dispose={null} ref={groupRef} position={[0, -0.7, 0]} scale={0.8}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['AvatarBody.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['AvatarEyelashes.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['AvatarHead.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['AvatarLeftCornea.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['AvatarLeftEyeball.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['AvatarRightCornea.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['AvatarRightEyeball.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials['AvatarTeethLower.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['AvatarTeethUpper.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.outfit_bottom}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.outfit_shoes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.outfit_top}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/models/mformalcompressed.glb'))