import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationContainer } from '@react-navigation/native';
import { RotationGestureHandler } from 'react-native-gesture-handler';

export default class TilfoejSomFavorit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         }; 
    }

    

    clickedAddToFavorites = () =>
    Alert.alert(
      "Arbejdspositionen er tilføjet til dine favoritter",
      "Du kan finde den på din personlige forside.",
      [
        { text: "OK", onPress: () => {
          const { popToTop } = this.props.navigation;
          popToTop();  
            } 
        }
      ],
      { cancelable: false }
    );


  pop = async () => {
    const { popToTop } = this.props.navigation;
    popToTop();
  }

 

  render()  
  {
    //const {route} =  this.props;
    //const imageurl= route.params.image;
    //console.log(imageurl)

        return (
    
          <View style={styles.container}>
             <View style={{flex:1, flexDirection: 'column', }}>
             
              <View style={{flex: 1,  justifyContent:'center', alignContent:'center'}}>
              <TouchableOpacity style={{ top: 20, right: 20, alignSelf: 'flex-end', position: 'absolute'}} onPress={() => this.pop()}>
                 <Image source={require("../images/closeicon.png")} style={{height: 30, width: 30}}></Image>
             </TouchableOpacity>
              <Image source={require("../images/stilling1.png")} resizeMode='cover' style={styles.myImage} />
                
              <View style={{flex:0.50, flexDirection:'column', backgroundColor: 'black', width: '100%', backgroundColor:'white', justifyContent:'center', alignContent:'center',
                 padding: 3, }}>
                 <View style={{flex:1, flexDirection:'row', width: '80%', alignSelf:'center'}}>
                    <Text style={{flex:1, fontWeight: 'black', color: 'black', fontWeight:'bold'}}>Navn på arbejdsstilling</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row', width: '80%', alignSelf:'center'}}>
                       <Text style={{flex:1, color: 'black'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'black'}}>9 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row', width: '80%', alignSelf:'center'}}>
                  <Text style={{flex:1, color: 'black'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'black'}}>Instant</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row', width: '80%', alignSelf:'center'}}>
                  <Text style={{flex:1, color: 'black'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'black'}}>Standard</Text>
                  </View>

                  <View style={{flex:1, flexDirection:'row', width: '80%', alignSelf:'center'}}>
                  <Text style={{flex:1, color: '#982735', fontWeight:'bold'}}>Se instruktionsvideoer</Text>
                      
                  </View>
                  
                  </View>


              </View>
              <View style={{flex: 0.25}}>
              <TouchableOpacity
                style={styles.naesteKnap}
                onPress={this.clickedAddToFavorites}>
               <Text style={{color: 'white'}}>Tilføj som favorit</Text>
                </TouchableOpacity>
              </View>
             </View>
          
                
                
         
          </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  myImage: {
    height:'50%',
    width:"80%",
    marginHorizontal: '10%'
  },
  
  naesteKnap: {
   
    height:50,
    width:"80%", 
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    borderRadius: 4,
  }
});