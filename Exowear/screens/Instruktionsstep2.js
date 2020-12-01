import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Instruktionsstep2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         }; 
    }

    clickNaeste = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instructionstep3')
    }

    pop = async () => {
      const { popToTop } = this.props.navigation;
      popToTop();
    }
  
    render() 
    {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={{ top: 20, right: 20, alignSelf: 'flex-end', position: 'absolute'}} onPress={() => this.pop()}>
            <Image source={require("../images/closeicon.png")} style={{height: 30, width: 30}}></Image>
          </TouchableOpacity>
  
          <Text style={styles.large1}>2</Text>
          
          <Image style={{alignSelf:'center',}} source={require("../images/instruks1.png")}/>
          
          <Text style={styles.infoText}>Her vil der stå noget tekst, som beskriver hvad du skal gøre for at indstille dit exoskeleton til den valgte arbejdsstiling.</Text>
  
          <TouchableOpacity style={styles.naesteKnap} onPress={() => this.clickNaeste()}>
            <Text style={{color: 'white'}}>Næste</Text>
          </TouchableOpacity>
         
        </View>
  
      );
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection:'column',
      justifyContent:'flex-start',
      width: '100%',
      height: '100%',
      padding:'10%',
      
    },
    infoText: {
      textAlign:'center',
      flex:1,
      marginTop:20
    },
    large1: {
      color:"#982735",
      fontSize:175,
      fontWeight:"bold",
      flex:1
    },
    naesteKnap: {
      height:50,
      width:"100%", 
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:'center',
      borderRadius: 4,
    }
  
  });