import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('screen');

export default class MinSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         }; 
    }
  render() {
    return (

    <ScrollView contentContainerStyle={styles.myScrollView}>
      <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
          <Image source={require("../images/ionman.png")} style={styles.images} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
      <Text>Hello Pints, Open up App.js to start working on your app!</Text>
      <Text>Hello Pints, Open up App.js to start working on your app!</Text>
      <Text>Hello Pints, Open up App.js to start working on your app!</Text>
      </TouchableOpacity>

    </ScrollView>

      // <View style={styles.container}>    
      //   <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      //     <Image source={require("../images/ionman.png")} styles={{justifyContent:"flex-start", height:"100p"}}/> 
      //     <Image source={require("../images/ionman.png")} styles={{justifyContent: "flex-end",}} />
      //   </View>
      // </View>
    );
}
};

const styles = StyleSheet.create({
  myScrollView: {
    width: width, 
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "space-evenly"
  },
  images: {
      width: "100%",
      height: 200,
      marginTop:10,
      marginLeft:-30,
  },
  myTouchableOpacity: {
    width: "40%",
    alignContent: "center", 
    alignItems: "center",  
    marginTop:10, 
  }
});