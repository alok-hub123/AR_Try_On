import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      alignItems: 'center',
      backgroundColor: '#b5828c',
    },
    toggleContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    modelToggleButton: {
      padding: 8,
      marginHorizontal: 5,
      backgroundColor: '#ffb4a2',
      borderRadius: 10,
    },
    outfitToggleButton: {
      backgroundColor: '#ffb4a2',
      borderRadius: 5,
      paddingHorizontal: 6,
      paddingVertical: 4,
      marginHorizontal: 5,
    },
    selectedButton: {
      backgroundColor: '#b5828c',
    },
    viewLiveButton: {
      padding: 15,
      backgroundColor: '#b5828c',
      marginVertical: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modelViewContainer: {
      height: 530,
      width: '100%',
      backgroundColor: '#e5989b',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
    },
    modelView: {
      height: 400,
      width: '100%',
      backgroundColor: '#ffb4a2',
      borderRadius: 10,
    },
    outfitContainer: {
      width: '100%',
      backgroundColor: '#e5989b',
      borderRadius: 10,
      padding: 8,
      marginBottom: 10,
    },
    outfitItem: {
      padding: 5,
      margin: 5,
      backgroundColor: '#ffffff',
      borderRadius: 5,
    },
    selectedOutfitItem: {
      borderWidth: 2,
      borderColor: '#ffcd82',
    },
    textButton: {
      color: '#ffcd82',
    },
    clearButton:{
      padding: 5,
      backgroundColor: 'orange',
      borderRadius: 10,
      width: 50,
      marginLeft: 130,
      marginBottom: 10,
    },
    formalToggle:{
      width:70,
      borderRadius:10,
      padding:5,
      position:'absolute',
      bottom:20,
      right:20,
      backgroundColor:"#e5989b" 
    }
  });
  
  export default styles;