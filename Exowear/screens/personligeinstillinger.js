import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Switch, AsyncStorage} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Picker} from '@react-native-picker/picker';

export default class PersonligeInstillinger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isEnabledLeg: true,
          isEnabledBack: true,
          isEnabledShoulder: true, 
          language: 'stillads',
         }; 
    }

    toggleLeg = async () => {
      this.setState({isEnabledLeg: !this.state.isEnabledLeg})
      //this.props.setState({showtab: !this.props.showtab})
      //props.changeShowtab;
      
    }

    toggleBack = async () => {
      this.setState({isEnabledBack: !this.state.isEnabledBack})
    }
  
    toggleShoulder = async () => {
      this.setState({isEnabledShoulder: !this.state.isEnabledShoulder})
    }

  

  render() 
  { console.log(this.state.isEnabledLeg)
    return (
        <View style={{backgroundColor: 'white', width: '100%', height: '100%', flex: 1, flexDirection:'column', padding:'5%'}}>
          <View style={{flex: 0.75, flexDirection:'column'}}>
            <Text style={{flex: 0.5, fontWeight:'bold', fontSize:16}}>Hvilke exoskeletons har du adgang til?</Text>
            <View style={{flex: 1, flexDirection:'row'}}>
              <Text style={{flex: 1, fontSize:16, paddingTop:7}}>BackX</Text> 
              <Switch 
                 trackColor={{ false: "white", true: "#982735" }}
                  thumbColor={this.state.isEnabledBack ? "#white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.toggleBack}
                  value={this.state.isEnabledBack}
                />
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection:'row'}}>
              <Text style={{flex: 1, fontSize:16, paddingTop:7}}>LegX</Text> 
              <Switch 
                 trackColor={{ false: "white", true: "#982735" }}
                  thumbColor={this.state.isEnabledLeg ? "#white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.toggleLeg}
                  value={this.state.isEnabledLeg}
                />
            </View>
            </View>
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection:'row'}}>
              <Text style={{flex: 1, fontSize:16, paddingTop:7}}>ShoulderX</Text> 
              <Switch 
                 trackColor={{ false: "white", true: "#982735" }}
                  thumbColor={this.state.isEnabledShoulder ? "#white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={this.toggleShoulder}
                  value={this.state.isEnabledShoulder}
                />
            </View>
            </View>
          </View>
          <View style={{flex: 1}}>
          <Text style={{ fontWeight:'bold', fontSize:16}}>Vælg dit erhverv</Text>
          <Text>Når du har valgt dit erhverv, får du vist arbejdsstillinger tilpasser dit job.</Text>
          <Picker
          mode='dropdown'
  selectedValue={this.state.language}
  style={{width: '100%'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  
  <Picker.Item label="Maler" value="maler" />
  <Picker.Item label="Murer" value="Murer" />
  <Picker.Item label="Stilladsmedarbejder" value="stillads" />
  <Picker.Item label="Lagermedarbejder" value="lager" />
  <Picker.Item label="SOSU-assistent" value="js" />
</Picker>
          </View>
        </View>
      );
  }
};

