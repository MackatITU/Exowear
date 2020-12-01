import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Dimensions, ImageBackground, Modal } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';



const { width, height } = Dimensions.get('screen');

export default class MinSideBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          rearofbelt: 2.5,
          thighlength: 3,
          shanklength: 4,
          modalVisible: false,
          value: this.props.value,
          showsettings1: false,
          showsettings2: false,
         }; 
    }


    click = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instructionstep1')
    }

    clickInstruktioner = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instruktionsvideoer', {screen: 'LEGX'})
    }


  render() {
    return (
    <View style={{backgroundColor:'white', height: '100%'}}>

       <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row', paddingRight: 10, paddingLeft: 20, paddingTop: 20, paddingBottom: 20}}>
          <Image source={require("../images/legX.png")} resizeMode="contain" style={styles.images} />
          <View style={{width: '60%', flexDirection:'column'}}>
          <Text style={{flex: 0.5, fontWeight:'bold',fontSize: 16}}>Mine standardindstillinger</Text> 
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Rear of belt</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.rearofbelt}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille</Text>
              </View>
             
            </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Thigh length</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.thighlength}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille</Text>
              </View>            
              </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Shank length</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.shanklength}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille</Text>
              </View>            
              </View>

          </View> 
        
        </View> 
        
        <TouchableOpacity onPress={()=> this.setState({modalVisible: true})} style={{flexDirection:'row', alignSelf:'center',  marginBottom: 20, backgroundColor:'#232323', width:'90%', padding: 10, borderRadius: 10}}> 
              <Image source={require("../images/editicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: 'white'}}> Ret standardindstillinger for legX</Text>
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
                 opacity: 0.6}}>Støt knæ
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Støt knæ</Text>
                 </View>
                 <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Knee angle</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>70 grader</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Strength lift assistance</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>low</Text>
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
                 opacity: 0.6}}>Støt lår
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Støt lår</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Knee angle</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>110 grader</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Strength lift assistance</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>high</Text>
                  </View>
                  
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>

            
          
           
            
      </ScrollView>
      <ScrollView horizontal={true} style={{ marginTop: 10}} showsHorizontalScrollIndicator={false} >
            
      
      </ScrollView>

      <TouchableOpacity onPress={() => this.clickInstruktioner()} style={{flexDirection:'row', paddingTop: 10}} > 
              <Image source={require("../images/playicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}}> Se instruktionsvideoer for legX</Text>
              </TouchableOpacity> 
      </View>
       
      
      </View>

    <Modal visible={this.state.modalVisible} animationType="slide" presentationStyle="overFullScreen" transparent={true}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Rear of belt</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.rearofbelt}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1.5}
              maximumValue={3.5}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.rearofbelt}
              step={0.5}
              {...this.props}
              onValueChange={value => this.setState({rearofbelt: value})}
              />
            
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Thigh length</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.thighlength}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={6}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.thighlength}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({thighlength: value})}
              />

<View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Shank length</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.shanklength}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={6}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.shanklength}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({shanklength: value})}
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