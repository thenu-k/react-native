import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useState} from 'react'

export default function App() {

  //State
  const [count, setCount] = useState(0)

  //Footer button press
  const footerPress = (e) =>{
    setCount(count+1)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        {
          (count%2===0)
            ? <Text style={styles.text_style}>Yo</Text>
            : <Text style={styles.text_style}>Yo?</Text>
        }
      </ScrollView>
      <View style={styles.footer_container}>        
        <TouchableOpacity activeOpacity={0.5}  onPress={(e)=>{footerPress(e)}} style={styles.footer_button_container}><Image source={{uri: 'https://www.iconsdb.com/icons/preview/white/home-7-xxl.png'}} style={styles.button_image}/></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}  style={styles.footer_button_container}><Image source={{uri: 'https://www.iconsdb.com/icons/preview/white/letter-c-xxl.png'}} style={styles.button_image}/></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}  style={styles.footer_button_container}><Image source={{uri: 'https://www.iconsdb.com/icons/preview/white/3d-view-xxl.png'}} style={styles.button_image}/></TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}  style={styles.footer_button_container}><Image source={{uri: 'https://www.iconsdb.com/icons/preview/white/gear-xxl.png'}} style={styles.button_image}/></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  main:{
    flexGrow: 1, backgroundColor: 'rgb(18, 18, 18)', alignSelf: 'stretch', 
  },

  text_style:{
    color: '#fff', fontSize: 20, marginLeft:50,marginTop: 200
  },
  footer_container:{
    flexDirection: 'row', 
    backgroundColor: 'rgb(13, 13, 13)', alignSelf:'stretch',
    height: 65, justifyContent: 'center', alignItems: 'center'
  },

  footer_button_container:{
    flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%'
  },

  button_image:{
    height: 30, width: 30
  }
});
