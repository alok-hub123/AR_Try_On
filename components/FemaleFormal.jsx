import React, { useRef,  useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Asset } from 'expo-asset';
import { TextureLoader } from 'three';
import FormalOutfits from '@/app/FormalOutfitData';

export default function FemaleFormal({ outfitId, category, ...props }) {
  const { nodes, materials } = useGLTF(require('../assets/models/fformal.glb'))

  const groupRef = useRef(); // Reference to the group

  // Find the selected outfit and load its texture
  const selectedOutfit = outfitId
    ? FormalOutfits.female[category].find((item) => item.id === outfitId)
    : null;
  
  // Store default materials to revert to them on clear
  const defaultMaterials = useMemo(() => ({
    outfit: materials.outfit.clone(),
  }), [materials]);

  // Load texture using Expo Asset and TextureLoader
  useEffect(() => {
    if (selectedOutfit) {
      const asset = Asset.fromModule(selectedOutfit.texture);
      asset.downloadAsync().then(() => {
        const textureLoader = new TextureLoader();
        textureLoader.load(asset.localUri || asset.uri, (texture) => {
          if (category === 'tops') {
            materials.outfit.map = texture;
            materials.outfit.needsUpdate = true;
          }
        });
      });
    } else {
      // Revert to default materials when outfitId is null
      materials.outfit.map = defaultMaterials.outfit.map;
      materials.outfit.needsUpdate = true;
    }
  }, [selectedOutfit, category, materials, defaultMaterials]);
  
    // Continuous rotation using useFrame
    useFrame((state, delta) => {
      if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.3; // Rotate around Y-axis
      }
    });
  return (
    <group {...props} dispose={null} ref={groupRef} scale={0.84} position={[0, -0.7, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.AvatarBody}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.AvatarEyelashes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.AvatarHead}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.AvatarLeftCornea}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.AvatarLeftEyeball}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.AvatarRightCornea}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.AvatarRightEyeball}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.AvatarTeethLower}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.AvatarTeethUpper}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.haircut}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.outfit}
      />
    </group>
  )
}

useGLTF.preload(require('../assets/models/fformal.glb'))