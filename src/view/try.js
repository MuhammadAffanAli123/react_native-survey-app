import React, { Component } from 'react'; 
import { StyleSheet, View,  Image} from 'react-native';
import {TextInput} from 'react-native-paper'
 
export default class Try1 extends Component {
 
 
  render() {
    return (
      <View style={styles.container }>
       
        <View style={styles.SectionStyle}>
 
        <Image source={require('./icons/color/cart.png')} style={styles.ImageStyle} />
 
          <TextInput
              style={{flex:1,borderColor:"white", backgroundColor:"transparent" , color:"white"}}
              label="Email"
          />
 
        </View>
        <View style={styles.SectionStyle}>
 
 <Image source={require('./icons/color/lock.png')} style={styles.ImageStyle} />

   <TextInput
       style={{flex:1,borderColor:"white", backgroundColor:"transparent" , color:"white"}}
       label="Email"
   />

 </View>
 <View style={styles.SectionStyle}>
 
 <Image source={require('./icons/color/lock.png')} style={styles.ImageStyle} />

   <TextInput
       style={{flex:1,borderColor:"white", backgroundColor:"transparent" , color:"white"}}
       label="Password"
   />

 </View>
 
      </View>
    );
  }
}
 
 
const styles = StyleSheet.create({
 
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#000',
    height: 70,
    width:350,
    borderRadius: 5 ,
    borderColor:"white",
    fontSize:100,
    margin: 10
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
 
});