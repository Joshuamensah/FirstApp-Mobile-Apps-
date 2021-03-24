import React from 'react';
import{Text, View,StyleSheet, Image} from 'react-native'
//import Profile from './assets/Profile.jpg'

function App(){
return <View style={styles.contaner}>
<Image source={require('./assets/Profile.jpg')} style={styles.Image}/>
<View style={styles.InfoContainer}>
  <Text style={styles.label}>Name</Text>
  <Text style={[styles.label,styles.info]}>Joshua Mensah</Text>
</View>

<View style={styles.InfoContainer}>
  <Text style={styles.label}>Email</Text>
  <Text style={[styles.label,styles.info]}>Joewy4me@yahoo.com</Text>
</View>

<View style={styles.InfoContainer}>
  <Text style={styles.label}>Gender</Text>
  <Text style={[styles.label,styles.info]}>Male</Text>
</View>
</View>
}

const styles = StyleSheet.create({
contaner:{
  flex:1,
  marginHorizontal:5,
  backgroundColor:"cyan"
},
Image:{
  width:150,
  height:150,
  marginTop:80,
  marginBottom:30,
  alignSelf:"center",
  borderRadius:75
},
InfoContainer:{
  flexDirection:"row",
  marginVertical:3
},
label:{
  borderColor:"black",
  borderWidth:1,
  fontSize:20,
  flex:2.5,
  paddingHorizontal:5
},
info:{
  flex:7.5
}
 
});

export default App; 