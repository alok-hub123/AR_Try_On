import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber/native';
import MaleFormal from '../components/MaleFormal';
import MaleCasual from '../components/MaleCasual';
import FemaleFormal from '../components/FemaleFormal';
import FemaleCasual from '../components/FemaleCasual';
import { OrbitControls } from '@react-three/drei';
import styles from './Style';
import { useState } from 'react';
import formalOutfits from './FormalOutfitData';
import casualOutfits from './CasualOutfitData';

const ARScreen = () => {

  type Gender = 'male' | 'female';
  type Category = 'tops' | 'bottoms';

  const [selectedModel, setSelectedModel] = useState<Gender>('male');
  const [selectedCategory, setSelectedCategory] = useState<Category>('tops');
  const [selectedOutfit, setSelectedOutfit] = useState<string | null>(null);
  const [isFormal, setIsFormal] = useState<boolean>(false);

  const handleClear = () => {
    setSelectedOutfit(null); // Reset to null to show default model material
  };

  return (
    <View style={styles.container}>
      <View style={styles.modelViewContainer}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            onPress={() => setSelectedModel('male')}
            style={[
              styles.modelToggleButton,
              selectedModel === 'male' && styles.selectedButton,
            ]}
          >
            <Text style={[selectedModel === 'male' && styles.textButton]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedModel('female')}
            style={[
              styles.modelToggleButton,
              selectedModel === 'female' && styles.selectedButton,
            ]}
          >
            <Text style={[selectedModel === 'female' && styles.textButton]}>Female</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.modelView}>
          <Canvas style={{ flex: 1 }} camera={{ position: [0, 0, 3], fov: 30 }} gl={{ antialias: false }}  >
            <ambientLight intensity={2} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <OrbitControls enableDamping={false} />
            <Suspense fallback={null}>
              {(selectedModel == "male") ?
                (isFormal) ? <MaleFormal outfitId={selectedOutfit} category={selectedCategory} /> :
                  <MaleCasual outfitId={selectedOutfit} category={selectedCategory} /> :
                (isFormal) ? <FemaleFormal outfitId={selectedOutfit} category={selectedCategory}/> :
                  <FemaleCasual outfitId={selectedOutfit} category={selectedCategory} />}
            </Suspense>
          </Canvas>

          <TouchableOpacity style={styles.clearButton} onPress={()=>handleClear()}>
            <Text style={{ textAlign: "center" }}>Clear</Text>
          </TouchableOpacity>

          {
            (selectedModel == "male") ?
              <TouchableOpacity style={styles.formalToggle} onPress={() => setIsFormal(!isFormal)}>
                <Text style={{ textAlign: "center", color: "#ffcd82" }}>{isFormal ? "Casual" : "Formal"}</Text>
                <Image source={isFormal ? require('../assets/images/maleCasual.png') : require('../assets/images/maleFormal.png')} style={{ width: 50, height: 50, marginLeft: 5 }} />
              </TouchableOpacity> :
              <TouchableOpacity style={styles.formalToggle} onPress={() => setIsFormal(!isFormal)}>
                <Text style={{ textAlign: "center", color: "#ffcd82" }}>{isFormal ? "Modern" : "Classical"}</Text>
                <Image source={isFormal ? require('../assets/images/femaleCasual.png') : require('../assets/images/femaleFormal.png')} style={{ width: 50, height: 50, marginLeft: 5 }} />
              </TouchableOpacity>
          }

        </View>

        <TouchableOpacity style={styles.viewLiveButton}>
          <Text style={{ fontSize: 16, color: '#ffcd82', fontWeight: '700' }}>View Live</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.outfitContainer}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            onPress={() => setSelectedCategory('tops')}
            style={[
              styles.outfitToggleButton,
              selectedCategory === 'tops' && styles.selectedButton,
            ]}
          >
            <Text style={[selectedCategory === 'tops' && styles.textButton]}>Tops</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedCategory('bottoms')}
            style={[
              styles.outfitToggleButton,
              selectedCategory === 'bottoms' && styles.selectedButton,
            ]}
          >
            <Text style={[selectedCategory === 'bottoms' && styles.textButton]}>Bottoms</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={(isFormal) ? formalOutfits[selectedModel][selectedCategory] : casualOutfits[selectedModel][selectedCategory]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedOutfit(item.id)}
              style={[
                styles.outfitItem,
                selectedOutfit === item.id && styles.selectedOutfitItem,
              ]}
            >
              <Image source={item.image} style={{ width: 60, height: 60 }} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ARScreen;