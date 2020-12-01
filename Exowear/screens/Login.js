import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, AsyncStorage, Alert, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: ""
    }
  }

  static navigationOptions = {header:null};

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  checkForAccount = async () => { 
    let name = this.state.name; 
    try {
      const value = await AsyncStorage.getItem(name); 
      if (value !== null) return 1; 
      else return 0;
    } catch (e) {
      return -1;
    }
  }

  validateUser = async () => {  
    let name = this.state.name;
    let pass = this.state.pass;
    try {
      const value = await AsyncStorage.getItem(name);
      if (value === pass) return 1;
      else return 0;
    } catch (e) {
      return -1;
    }
  }



  login = async () => {

    let userExists = await this.checkForAccount();
    if (userExists === 1) { 
      let passCorrect = await this.validateUser();
      if (passCorrect === 1) { 
        let name = this.state.name;
        const { navigation } = this.props;

        navigation.navigate('Menu');      
      }
      else if (passCorrect === 0)  
        Alert.alert("Password er ikke korrekt");
      else 
        Alert.alert("Der er sket en fejl under validering af password");
    } else if (userExists === 0) 
      Alert.alert("Bruger eksisterer ikke");
    else 
      Alert.alert("Der er sket en fejl");
  }

  createAccount = async () => { 
    let name = this.state.name;
    let pass = this.state.pass;
    let userExists = await this.checkForAccount();
    if (userExists === 1) Alert.alert("Brugeren eksisterer allerede");
    else if (userExists === 0) {
      let userCreated = await this.storeData(name, pass);
      if (userCreated) Alert.alert("Brugeren er oprettet");
      else Alert.alert("Der opstod en fejl under oprettelse af bruger");
    }
    else Alert.alert("Der er opstået en fejl.");
  }

  render() {
    return (
      <ImageBackground source={require("../images/exowearbg.png")} style={{width: '100%', height: '100%'}}>
        <View style= {styles.container}><Text style= {styles.userName}>Brugernavn</Text>
        <TextInput style={styles.nameField} onChangeText={text => {this.setState({name: text})}}/>
        <View><Text style= {styles.passWord}>Adgangskode</Text></View>
        <TextInput secureTextEntry={true} style={styles.passField} onChangeText={text => {this.setState({pass: text})}}/>
        <TouchableOpacity style={styles.button} onPress={() => this.login()}>
          <Text style={styles.buttonText}>Log ind</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.createAccount()}>
          <Text style={{color: '#982735', fontSize: 16}}>Opret ny bruger</Text>
          </TouchableOpacity>
          </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.95,
},
  userName: {
    fontSize: 18,
    margin: 5,
    width: 300,
    height: 25,
    color: 'black',
},
  nameField: {
    borderWidth: 0,
    marginBottom: 10,
    width: 300,
    height: 65,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'left',
    padding: 15, 
    fontSize: 18
 },
  passWord: {
    fontSize: 18,
    margin: 5,
    width: 300,
    height: 25,
    color: '#172E40',
},
  passField: {
    borderWidth: 0,
    width: 300,
    height: 65,
    marginBottom: 10,
    borderRadius: 15,
  borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'left',
    padding: 15,
    fontSize: 18
},
  button: {
    borderWidth: 0,
    borderRadius: 10,
    margin: 15,
    backgroundColor: 'black',
    width:'60%',
    height: 50,
},
  buttonText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 50,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
          
 }});