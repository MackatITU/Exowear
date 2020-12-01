import React from 'react';
import { StyleSheet, Modal, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';


const { width, height } = Dimensions.get('screen');

export default class MinSideBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          rammensbredde: 4,
          rammenshøjde: 3,
          rammensdybde: 4,
          benlængde: 3,
          modalVisible: false,
          value: this.props.value,
          showsettings1: false,
          showsettings2: false,
          showsettings3: false,
          showsettings4: false,
          showsettings5: false,
          showsettings6: false
         }; 
    }


    click = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instructionstep1')
    }

    clickInstruktioner = async () => {
      const { navigate } = this.props.navigation;
      navigate('Instruktionsvideoer', {screen: 'BACKX'})
    }

    

  render() {
    const width = 20;
    const height = 100;

    return (
    <View style={{backgroundColor:'white', height: '100%'}}>
       <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row', paddingRight: 10, paddingLeft: 20, paddingTop: 20, paddingBottom: 20}}>
          <Image source={require("../images/backX.png")} resizeMode="contain"style={styles.images} />
          <View style={{width: '60%', flexDirection:'column'}}>
          <Text style={{flex: 0.75, fontWeight:'bold', fontSize: 16}}>Mine standardindstillinger</Text> 
            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Rammens bredde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.rammensbredde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille bredden</Text>
              </View>
             
            </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Rammens højde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.rammenshøjde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille højden</Text>
              </View>            
              </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Rammens dybde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.rammensdybde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille dybden</Text>
              </View>            
              </View>

            <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
              <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection:'row'}}>
                <Text style={{width:'80%'}}>Benlængde</Text> 
                <Text style={{width:'20%', textAlign:'right'}}>{this.state.benlængde}</Text>
              </View>
              <View style={{flexDirection:'row'}}> 
              <Image source={require("../images/listicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}} onPress={() => this.click()}> Få hjælp til at indstille længden</Text>
              </View>            
              </View>
          </View>
        
        </View>
        
        <TouchableOpacity onPress={()=> this.setState({modalVisible: true})} style={{flexDirection:'row', alignSelf:'center',  marginBottom: 20, backgroundColor:'#232323', width:'90%', padding: 10, borderRadius: 10}}> 
              <Image source={require("../images/editicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: 'white'}}> Ret standardindstillinger for backX</Text>
              </TouchableOpacity>    
        
        
        <View style={{marginLeft: 20, marginRight: 20}}>
            <Text style={{fontWeight:'bold', fontSize: 16}}>Favorit arbejdsstillinger</Text>
       


    
  
            <View style={{flexDirection: 'column'}}>
      <ScrollView horizontal={true} style={{ marginTop: 10}} showsHorizontalScrollIndicator={false} >
        
      <TouchableOpacity onPress={() => this.setState({showsettings1: !this.state.showsettings1})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/stilling1.png")} resizeMode='cover' style={styles.images1}>
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
                 opacity: 0.6}}>Støt ryg
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Støt ryg</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>9 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Instant</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Standard</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({showsettings2: !this.state.showsettings2})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/stilling2.png")} resizeMode='cover' style={styles.images1}>
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
                 opacity: 0.6}}>Foroverbøjet
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Foroverbøjet</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>15 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Standard</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Smart</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({showsettings3: !this.state.showsettings3})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/stilling3.png")} resizeMode='cover' style={styles.images1}>
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
                 opacity: 0.6}}>Navn på arbejdsstilling
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Navn på arbejdsstilling</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>9 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Instant</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Standard</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({showsettings4: !this.state.showsettings4})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/stilling4.png")} resizeMode='cover' style={styles.images1}>
                {this.state.showsettings4 === false ?(
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
                 opacity: 0.6}}>Navn på arbejdsstilling
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Navn på arbejdsstilling</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>9 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Instant</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Standard</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>
           
            
      </ScrollView>
      <ScrollView horizontal={true} style={{ marginTop: 10}}  showsHorizontalScrollIndicator={false} >
      <TouchableOpacity onPress={() => this.setState({showsettings5: !this.state.showsettings5})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/stilling5.png")} resizeMode='cover' style={styles.images1}>
                {this.state.showsettings5 === false ?(
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
                       <Text style={{flex:1, color: 'white'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>13 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Instant</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Smart</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({showsettings6: !this.state.showsettings6})} style={styles.myTouchableOpacity1} >
                <ImageBackground source={require("../images/exoskeleton1.jpeg")} resizeMode='cover' style={styles.images1}>
                {this.state.showsettings6 === false ?(
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
                 opacity: 0.6}}>Støt lænd
                  
                 </Text>
                ) : (
                  
                  <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start' , backgroundColor: 'black', width: '100%',
                 padding: 3, opacity: 0.7}}>
                 <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{flex:1, fontWeight: 'bold', color: 'white',}}>Støt lænd</Text>
                 </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                       <Text style={{flex:1, color: 'white'}}>Support</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>9 kg</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Indstilling</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Instant</Text>
                  </View>
                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1, color: 'white'}}>Vinkel</Text>
                      <Text style={{flex:1, textAlign:'right', color: 'white'}}>Standard</Text>
                  </View>
                  
                  </View>
                  
                  
                )}
                
                 </ImageBackground> 
            </TouchableOpacity>


      </ScrollView>

      <TouchableOpacity onPress={() => this.clickInstruktioner()} style={{flexDirection:'row', paddingTop: 10}} > 
              <Image source={require("../images/playicon.png")} style={{height: 14, width: 14, paddingTop: 15}}></Image>
              <Text style={{color: '#982735'}}> Se instruktionsvideoer for backX</Text>
              </TouchableOpacity> 


      </View> 
      
       
      
      </View>



      <Modal visible={this.state.modalVisible} animationType="slide" presentationStyle="overFullScreen" transparent={true}>
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Rammens bredde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.rammensbredde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={5}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.rammensbredde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({rammensbredde: value})}
              />
            
            <View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Rammens højde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.rammenshøjde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={4}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.rammenshøjde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({rammenshøjde: value})}
              />

<View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Rammens dybde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.rammensdybde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={3}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.rammensdybde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({rammensdybde: value})}
              />

<View style={{flexDirection:'row'}}>
            <Text style={styles.modalText, {flex: 1}}>Benlængde</Text>
            <Text style={{flex: 1, textAlign:'right'}}>
              {this.state.benlængde}
             </Text>
             </View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={1}
              maximumValue={3}
              minimumTrackTintColor="#982735"
              maximumTrackTintColor="#000000"
              slide
              value={this.state.benlængde}
              step={1}
              {...this.props}
              onValueChange={value => this.setState({benlængde: value})}
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
  height:140,
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