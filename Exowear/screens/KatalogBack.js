import React from 'react';

import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('screen');
var imageOne = "..images/exoskeleton1.png";
var imageTwo = "..images/exoskeleton2.png";

export default class Katalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         }; 
    }

    
    clickImage = async () => {
        const { navigation } = this.props;
        navigation.navigate('Tilføj som favorit');  
    }
  render() 
  {
    return (
        <View style={{backgroundColor:'white'}}>
        <Text style={{margin: '4%'}}>Find arbejdsstillinger til BackX og tilføj dem som favorit, så du altid kan tilgå dem fra din personlige side.</Text>
        <ScrollView  contentContainerStyle={styles.myScrollView} >
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/exoskeleton1.jpeg")} resize='contain' style={styles.images} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/exoskeleton2.png")} style={styles.images} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/stilling1.png")} style={styles.images} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/stilling2.png")} style={styles.images} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/stilling3.png")} style={styles.images} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/stilling4.png")} style={styles.images} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/stilling5.png")} style={styles.images} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/exoskeleton1.jpeg")} style={styles.images} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/exoskeleton1.jpeg")} style={styles.images} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.myTouchableOpacity} onPress={() => this.clickImage()}>
                <Image source={require("../images/stilling1.png")} style={styles.images} />
            </TouchableOpacity>
            
    </ScrollView>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  myScrollView: {
    width: width * 1, 
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "space-evenly",
    
  },
  images: {
      width: "100%",
      height: 150,
  },
  myTouchableOpacity: {
    width: "45%",
    alignContent: "center", 
    alignItems: "center",  
   marginVertical:'1.5%'
  }
});