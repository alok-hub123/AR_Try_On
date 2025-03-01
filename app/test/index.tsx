import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions, 
  Image 
} from 'react-native';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

// Define types for clarity
interface Outfit {
  id: number;
  name: string;
  model: string; // Path to GLTF file
  image?: string; // Optional image for thumbnail
}

interface Models {
  [key: string]: string; // Path to GLTF file for male/female models
}

interface OutfitData {
  tops: Outfit[];
  bottoms: Outfit[];
}

// Custom component for the 3D model
const Model = ({ url, outfitUrl }: { url: string; outfitUrl?: string }) => {
  const gltf = useLoader(GLTFLoader, url) as any; // Type cast due to potential GLTF structure variance
  const outfitGltf = outfitUrl ? useLoader(GLTFLoader, outfitUrl) as any : null;
  const ref = useRef<THREE.Group>(null);

  // Rotate the model continuously (optional for interactivity)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} scale={1} position={[0, -1.5, 0]} />
      {outfitGltf && <primitive object={outfitGltf.scene} scale={1} position={[0, -1.5, 0]} />}
    </group>
  );
};

export default function App() {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
  const [selectedCategory, setSelectedCategory] = useState<'tops' | 'bottoms'>('tops');
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sample outfit data (replace with API or dynamic data)
  const outfits: { [key: string]: OutfitData } = {
    male: {
      tops: [
        { id: 1, name: 'Blue Shirt', model: '../assets/models/shirt.gltf', image: 'https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416' },
      ],
      bottoms: [
        { id: 2, name: 'Black Jeans', model: '../assets/models/pant.gltf', image: 'https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416' },
      ],
    },
    female: {
      tops: [
        { id: 3, name: 'White Blouse', model: '../assets/models/shirt.gltf', image: 'https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416' },
      ],
      bottoms: [
        { id: 4, name: 'Blue Skirt', model: '../assets/models/pant.gltf', image: 'https://www.givuil.com/cdn/shop/files/sea_green_color_02.jpg?v=1724152099&width=416' },
      ],
    },
  };

  // 3D model URLs (replace with your actual GLTF model paths)
  const modelUrls: Models = {
    male: '../assets/models/male.gltf',
    female: '../assets/models/female.gltf',
  };

  // Handle outfit selection
  const handleSelectOutfit = (outfit: Outfit) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedOutfit(outfit);
      setIsLoading(false);
    }, 500); // Simulate loading delay
  };

  // Handle "View Live" action (simulated animation or AR preview)
  const handleViewLive = () => {
    if (!selectedOutfit) {
      alert('Please select an outfit first!');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      alert(`Viewing ${selectedOutfit.name} on ${selectedGender} model in live mode!`);
      setIsLoading(false);
    }, 1000); // Simulate loading delay for live preview
  };

  // Reset outfit when switching gender or category
  useEffect(() => {
    setSelectedOutfit(null); // Reset outfit when gender or category changes
  }, [selectedGender, selectedCategory]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AR Try On</Text>

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, selectedGender === 'male' && styles.selectedButton]}
          onPress={() => setSelectedGender('male')}>
          <Text style={styles.buttonText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, selectedGender === 'female' && styles.selectedButton]}
          onPress={() => setSelectedGender('female')}>
          <Text style={styles.buttonText}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* 3D Model Canvas */}
      <View style={styles.modelContainer}>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading Model...</Text>
        ) : (
          <Canvas
            camera={{ position: [0, 2, 5], fov: 60 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={
              <Html>
                <Text>Loading 3D Model...</Text>
              </Html>
            }>
              <Model 
                url={modelUrls[selectedGender]} 
                outfitUrl={selectedOutfit?.model || undefined} 
              />
            </Suspense>
            <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
          </Canvas>
        )}
      </View>

      {/* View Live Button */}
      <TouchableOpacity 
        style={styles.liveButton} 
        onPress={handleViewLive}
        disabled={isLoading}
      >
        <Text style={styles.liveButtonText}>
          {isLoading ? 'Loading...' : 'View Live'}
        </Text>
      </TouchableOpacity>

      {/* Outfit Category Selection */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'tops' && styles.selectedButton]}
          onPress={() => setSelectedCategory('tops')}>
          <Text style={styles.buttonText}>Tops</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'bottoms' && styles.selectedButton]}
          onPress={() => setSelectedCategory('bottoms')}>
          <Text style={styles.buttonText}>Bottoms</Text>
        </TouchableOpacity>
      </View>

      {/* Outfit Selection Area */}
      <ScrollView style={styles.outfitContainer}>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading Outfits...</Text>
        ) : (
          outfits[selectedGender][selectedCategory].map((outfit) => (
            <TouchableOpacity
              key={outfit.id}
              onPress={() => handleSelectOutfit(outfit)}
              style={styles.outfitItem}
            >
              <Image
                source={{ uri: outfit.image ?? '' }} // Fallback to empty string if no image
                style={styles.outfitImage}
              />
              <Text style={styles.outfitName}>{outfit.name}</Text>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  genderButton: {
    backgroundColor: '#ffd1d1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  categoryButton: {
    backgroundColor: '#ffd1d1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#ff9999',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  modelContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    height: 300,
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  liveButton: {
    backgroundColor: '#8b4513',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  liveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  outfitContainer: {
    backgroundColor: '#ffcccc',
    padding: 10,
    borderRadius: 10,
    maxHeight: 200, // Limit height for scrolling
  },
  outfitItem: {
    alignItems: 'center',
    marginBottom: 10,
  },
  outfitImage: {
    width: 100,
    height: 150,
    margin: 5,
    borderRadius: 5,
  },
  outfitName: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});