import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         }; 
    }
  render() 
  {
    return (
      <View style={{flex:1, flexDirection:'column', width: '100%', height:'100%', backgroundColor: 'white', padding: '5%'}}>
            <View style={{flex: 1}}> 
                <Text style={{fontWeight:'bold'}}>Indstil knee angle</Text>
                <Image source={require("../images/video1.png")} resizeMode='cover' style={{height: '80%', width:'100%'}}></Image>

            </View>
            <View style={{flex: 1}}> 
                <Text style={{fontWeight:'bold'}}>Indstil Strength lift assistance</Text>
                <Image source={require("../images/video3.png")} resizeMode='cover' style={{height: '80%', width:'100%'}} ></Image>
            </View>
            <View style={{flex: 1}}> 
                 
            </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});