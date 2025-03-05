import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Asset } from 'expo-asset';
import { TextureLoader } from 'three';
import CasualOutfits from '@/app/CasualOutfitData';


export default function FemaleCasual({ outfitId, category, ...props }) {
  const { nodes, materials } = useGLTF(require('../assets/models/fcasual.glb'))

  const groupRef = useRef(); // Reference to the group

  // Find the selected outfit and load its texture
  const selectedOutfit = outfitId
    ? CasualOutfits.female[category].find((item) => item.id === outfitId)
    : null;
  
  // Store default materials to revert to them on clear
  const defaultMaterials = useMemo(() => ({
    'outfit_top.002': materials['outfit_top.002'].clone(),
    'outfit_bottom.002': materials['outfit_bottom.002'].clone(),
  }), [materials]);

  // Load texture using Expo Asset and TextureLoader
  useEffect(() => {
    if (selectedOutfit) {
      const asset = Asset.fromModule(selectedOutfit.texture);
      asset.downloadAsync().then(() => {
        const textureLoader = new TextureLoader();
        textureLoader.load(asset.localUri || asset.uri, (texture) => {
          if (category === 'tops') {
            materials['outfit_top.002'].map = texture;
            materials['outfit_top.002'].needsUpdate = true;
          } else if (category === 'bottoms') {
            materials['outfit_bottom.002'].map = texture;
            materials['outfit_bottom.002'].needsUpdate = true;
          }
        });
      });
    } else {
      // Revert to default materials when outfitId is null
      materials['outfit_top.002'].map = defaultMaterials['outfit_top.002'].map;
      materials['outfit_top.002'].needsUpdate = true;
      materials['outfit_bottom.002'].map = defaultMaterials['outfit_bottom.002'].map;
      materials['outfit_bottom.002'].needsUpdate = true;
    }
  }, [selectedOutfit, category, materials, defaultMaterials]);

  // Continuous rotation using useFrame
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3; // Rotate around Y-axis
    }
  });
  return (
    <group {...props} dispose={null} position={[0, -0.7, 0]} scale={0.88} ref={groupRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['AvatarBody.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['AvatarEyelashes.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['AvatarHead.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['AvatarLeftCornea.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['AvatarLeftEyeball.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['AvatarRightCornea.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials['AvatarRightEyeball.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['AvatarTeethLower.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials['AvatarTeethUpper.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['haircut.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials['outfit_bottom.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['outfit_shoes.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials['outfit_top.002']}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/models/fcasual.glb'))

