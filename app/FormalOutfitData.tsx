import { Asset } from 'expo-asset';
const FormalOutfits = {
  male: {
    tops: [
      { id: '1', image: require('../assets/images/shirt1.png'), texture: require('../assets/textures/shirt1texture.png')},
      { id: '2', image: require('../assets/images/shirt2.png'), texture: require('../assets/textures/shirt2texture.png')},
    ],
    bottoms: [
      { id: '1', image: require('../assets/images/pant1.png'), texture: require('../assets/textures/pant1texture.png')},
      { id: '2', image: require('../assets/images/pant2.png'), texture: require('../assets/textures/pant2texture.png')},
    ],
  },
  female: {
    tops: [
      { id: '1', image: require('../assets/images/saree1.png'), texture: require('../assets/textures/saree1texture.png')},
      { id: '2', image: require('../assets/images/saree2.png'), texture: require('../assets/textures/saree2texture.png')},
    ],
    bottoms: [
    ],
  },
};

export default FormalOutfits;