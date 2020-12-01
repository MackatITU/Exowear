import React from 'react';
import { StyleSheet, Modal, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';


const { width, height } = Dimensions.get('screen');

export default class MinSideBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          skulderbredde: 3,
          armlængde: 6,
          overkropshøjde: 7,
          modalVisible: false,
          value: this.props.value,
          showsettings1: false,
          showsettings2: false,
          showsettings3: false,
         }; 
    }


    click = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instructionstep1')
    }

    clickInstruktioner = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instruktionsvideoer', {screen: 'SHOULDERX'})
    }


  render() {
    const width = 20;
    const height = 100;

    return (
    <View style={{backgroundColor:'white', height: '100%'}}>
       <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row', paddingRight: 10, paddingLeft: 20, paddingTop: 20, paddingBottom: 20}}>
          <Image source={require("../images/shoulderX.png")} resizeMode="contain" style={styles.images} />
          <View style={{width: '60%', flexDirection:'column'}}>
          <Text style={{flex: 0.5, fontWeight:'bold', fontSize: 16}}>Mine standardindstillinger</Text> 
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Skulderbredde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.skulderbredde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille bredden</Text>
              </View>
             
            </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Armlængde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.armlængde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille længden</Text>
              </View>            
              </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Overkropshøjde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.overkropshøjde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille højden</Text>
              </View>            
              </View>

           
          </View>
        
        </View>
        
        <TouchableOpacity onPress={()=> this.setState({modalVisible: true})} style={{flexDirection:'row', alignSelf:'center',  marginBottom: 20, backgroundColor:'#232323', width:'90%', padding: 10, borderRadius: 10}}> 
              <Image source={require("../images/editicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: 'white'}}> Ret standardindstillinger for shoulderX</Text>
              </TouchableOpacity> 
        
        
        <View style={{marginLeft: 20, marginRight: 20}}>
            <Text style={{fontWeight:'bold', fontSize: 16}}>Favorit arbejdsstillinger</Text>
       


    
            <View style={{flexDirection: 'column'}}>
      <ScrollView horizontal={true} style={{ marginTop: 10}} showsHorizontalScrollIndicator={false} >

      <TouchableOpacity onPress={() => this.setState({showsettings1: !this.state.showsettings1})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/exoskeleton1.jpeg")} resizeMode='cover' style={styles.images1}>
                {this.state.showsettings1 === false ?(
                  <Text style={{backgroundColor: 'black', width: '100%', 
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                 bottom: 0, // position where you want
                 padding: 3,
                 borderTopColor: 'black',
                 borderBottomColor: 'black',
                 borderBottomWidth:1,
                 borderTopWidth: 1,
                 opacity: 0.6}}>Støt skuldre
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Støt skuldre</Text>
                 </View>
                 <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support- niveau</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>3</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Support- vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>75</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({showsettings2: !this.state.showsettings2})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/exoskeleton2.png")} resizeMode='cover' style={styles.images1}>
                {this.state.showsettings2 === false ?(
                  <Text style={{backgroundColor: 'black', width: '100%', 
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                 bottom: 0, // position where you want
                 padding: 3,
                 borderTopColor: 'black',
                 borderBottomColor: 'black',
                 borderBottomWidth:1,
                 borderTopWidth: 1,
                 opacity: 0.6}}>Tunge løft
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Tunge løft</Text>
                 </View>
                 <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support- niveau</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>5</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Support- vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>105</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>
        
           
            
      </ScrollView>
      <ScrollView horizontal={true} style={{ marginTop: 10}} showsHorizontalScrollIndicator={false} >
            
      <TouchableOpacity onPress={() => this.setState({showsettings3: !this.state.showsettings3})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/stilling1.png")} resizeMode='cover' style={styles.images1}>
                {this.state.showsettings3 === false ?(
                  <Text style={{backgroundColor: 'black', width: '100%', 
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                 bottom: 0, // position where you want
                 padding: 3,
                 borderTopColor: 'black',
                 borderBottomColor: 'black',
                 borderBottomWidth:1,
                 borderTopWidth: 1,
                 opacity: 0.6}}>Lette løft
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Lette løft</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support- niveau</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>1</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Support- vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>90</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>
            
      </ScrollView>

      <TouchableOpacity onPress={() => this.clickInstruktioner()} style={{flexDirection:'row', paddingTop: 10}} > 
              <Image source={require("../images/playicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}}> Se instruktionsvideoer for shoulderX</Text>
              </TouchableOpacity> 

      </View>
       
      
      </View>


      <Modal visible={this.state.modalVisible} animationType="slide" presentationStyle="overFullScreen" transparent={true}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Skulderbredde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.skulderbredde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={4}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.skulderbredde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({skulderbredde: value})}
              />
            
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Armlængde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.armlængde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={7}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.armlængde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({armlængde: value})}
              />

<View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Overkropshøjde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.overkropshøjde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={7}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.overkropshøjde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({overkropshøjde: value})}
              />
            
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "black" }}
            >
              <Text onPress={()=> this.setState({modalVisible: false})} style={styles.textStyle}>Gem indstillinger</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Modal>


    </View>
    );
}
};

const styles = StyleSheet.create({

  images: {
      height: 200,
      width: "35%",
      marginRight:10,
      marginLeft: -5
  },
  myTouchableOpacity: {
    width: "40%",
    alignContent: "center", 
    alignItems: "center",  
    marginTop:10, 
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
 
    images1: {
        width: "100%",
        height: 140,
        borderColor:'black',
        borderWidth: 1,
       
    },
    myTouchableOpacity1: {
      width: 150,
      marginRight:10, 
    },
    myScrollView: {
      width: '100%', 
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    
    },
    modalView: {
      width:'80%',
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "black",
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginTop: 10
    },
    textStyle: {
      color: "white",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }

});