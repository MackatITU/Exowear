import * as React from 'react';
import { Component } from "react";

import { Button, Text, View, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import MinSideShoulder from './screens/MinSide_shoulder';
import MinSideLeg from './screens/MinSide_leg.js';
import MinSideBack from './screens/MinSide_back.js';
import KatalogBack from './screens/KatalogBack';
import KatalogLeg from './screens/KatalogLeg';
import KatalogShoulder from './screens/KatalogShoulder';
import TilfoejSomFavorit from './screens/TilfoejSomFavorit';
import Instruktionsstep1 from './screens/Instruktionsstep1';
import Instruktionsstep2 from './screens/Instruktionsstep2';
import Instruktionsstep3 from './screens/Instruktionsstep3';
import PersonligeInstillinger from './screens/personligeinstillinger';
import VideoerLeg from './screens/instruktionsvideoerLeg';
import VideoerBack from './screens/instruktionsvideoerBack';
import VideoerShoulder from './screens/instruktionsvideoerShoulder';

const Tab = createMaterialTopTabNavigator();

function MinSideTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#982735',
      inactiveTintColor: 'black',
      indicatorStyle: {borderColor: '#982735', borderBottomWidth:2 },
    }}>
      <Tab.Screen name="BackX" component={MinSideBack} />
      <Tab.Screen name="LegX" component={MinSideLeg} />
      <Tab.Screen name="ShoulderX" component={MinSideShoulder} />
    </Tab.Navigator>
  );
}

const Tab2 = createMaterialTopTabNavigator();

function MinSideTabs2() {
  return (
    <Tab2.Navigator tabBarOptions={{
      activeTintColor: '#982735',
      inactiveTintColor: 'black',
      indicatorStyle: {borderColor: '#982735', borderBottomWidth:2 },
    }}>
      <Tab2.Screen name="BackX" component={MinSideBack} />
      <Tab2.Screen name="ShoulderX" component={MinSideShoulder} />
    </Tab2.Navigator>
  );
}

const minsideback = createStackNavigator();

function MinSideBackScreen() {
  return (
    <minsideback.Navigator>
      <minsideback.Screen name="Back x" component={MinSideTabs}  options={{headerShown: false}}/>
      <minsideback.Screen name="Instructionstep1" component={Instruktionsstep1} options={{headerShown: false}}/>
      <minsideback.Screen name="Instructionstep2" component={Instruktionsstep2} options={{headerShown: false}}/>
      <minsideback.Screen name="Instructionstep3" component={Instruktionsstep3} options={{headerShown: false}}/>
    </minsideback.Navigator>
  );
}

const minsideback2 = createStackNavigator();

function MinSideBackScreen2() {
  return (
    <minsideback2.Navigator>
      <minsideback2.Screen name="Back x" component={MinSideTabs2}  options={{headerShown: false}}/>
      <minsideback2.Screen name="Instructionstep1" component={Instruktionsstep1} options={{headerShown: false}}/>
      <minsideback2.Screen name="Instructionstep2" component={Instruktionsstep2} options={{headerShown: false}}/>
      <minsideback2.Screen name="Instructionstep3" component={Instruktionsstep3} options={{headerShown: false}}/>
    </minsideback2.Navigator>
  );
}

const KatalogTab = createMaterialTopTabNavigator();

function KatalogTabs() {
  return (
    <KatalogTab.Navigator tabBarOptions={{
      activeTintColor: '#982735',
      inactiveTintColor: 'black',
      indicatorStyle: {borderColor: '#982735', borderBottomWidth:2},
    }}>
      <KatalogTab.Screen name="BackX" component={KatalogBack} />
      <KatalogTab.Screen name="LegX" component={KatalogLeg} />
      <KatalogTab.Screen name="ShoulderX" component={KatalogShoulder} />
    </KatalogTab.Navigator>
  );
}


const KatalogStack = createStackNavigator();

function KatalogStackFunction( ) {
    return(
        <KatalogStack.Navigator>
            <KatalogStack.Screen name="Find arbejdsstillinger" component={KatalogTabs} options={{headerShown: false}}/>
            <KatalogStack.Screen name="Tilføj som favorit" component={TilfoejSomFavorit} options={{headerShown: false}}/>
        </KatalogStack.Navigator>
    )
}




/**function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Intruktionsvideoer" />
      <DrawerItem label="Rengøring og vedligehold" />
      <DrawerItem label="Log ud"/>
    </DrawerContentScrollView>
  );
}
drawerContent={props => <CustomDrawerContent {...props} />}**/

const InstruktionsTab = createMaterialTopTabNavigator();

function Instruktioner(){
  return(
    <InstruktionsTab.Navigator tabBarOptions={{
      activeTintColor: '#982735',
      inactiveTintColor: 'black',
      indicatorStyle: {borderColor: '#982735', borderBottomWidth:2},
    }}>
      <InstruktionsTab.Screen name="BACKX" component={VideoerBack}/>
      <InstruktionsTab.Screen name="LEGX" component={VideoerLeg}/>
      <InstruktionsTab.Screen name="SHOULDERX" component={VideoerShoulder}/>
    </InstruktionsTab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer1() {
  return ( 
    <Drawer.Navigator drawerPosition={'left'} backBehavior={'history'} drawerStyle={{backgroundColor: 'white', color: 'black', width: 240    }} drawerContentOptions={{activeTintColor:'#982735'}} >
      <Drawer.Screen name="Min side" component={MinSideBackScreen}  options={{headerTintColor:'#982735', headerStyle:{alignItems: 'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>), }}/>
      <Drawer.Screen name="Find arbejdsstillinger" component={KatalogStackFunction} options={{headerTintColor:'#982735', headerStyle:{alignItems:'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>) }} />
      <Drawer.Screen name="Instruktionsvideoer" component={Instruktioner}  options={{headerTintColor:'#982735', headerStyle:{alignItems:'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>) }}/>
      <Drawer.Screen name="Personlige indstillinger" component={PersonligeInstillinger} options={{headerTintColor:'#982735', headerStyle:{alignItems:'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>) }} />
      <Drawer.Screen name="Log ud" component={Afslutning1} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
}

const Drawer2 = createDrawerNavigator();
function MyDrawer2() {
  return ( 
    <Drawer2.Navigator drawerPosition={'left'} backBehavior={'history'} drawerStyle={{backgroundColor: 'white', color: 'black', width: 240    }} drawerContentOptions={{activeTintColor:'#982735'}} >
      <Drawer2.Screen name="Min side" component={MinSideBackScreen2}  options={{headerTintColor:'#982735', headerStyle:{alignItems: 'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>), }}/>
      <Drawer2.Screen name="Find arbejdsstillinger" component={KatalogStackFunction} options={{headerTintColor:'#982735', headerStyle:{alignItems:'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>) }} />
      <Drawer2.Screen name="Instruktionsvideoer" component={Instruktioner}  options={{headerTintColor:'#982735', headerStyle:{alignItems:'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>) }}/>
      <Drawer2.Screen name="Personlige indstillinger" component={PersonligeInstillinger} options={{headerTintColor:'#982735', headerStyle:{alignItems:'flex-start'}, headerTitle:(<Image style={{marginLeft: 30}} resizeMode='contain' source={require('./images/headertitle.png')}/>) }} />
      <Drawer2.Screen name="Log ud" component={Afslutning1} options={{headerShown: false}} />
    </Drawer2.Navigator>
  );
}

const container = createStackNavigator();

function Afslutning1() {
  return (
    <container.Navigator options={{gestureEnabled: false}}>
      <container.Screen name="Login" component={Login} options={{headerShown: false, gestureEnabled: false}}/>
      <container.Screen name="Menu" component={MyDrawer1} options={{headerShown: false, gestureEnabled: false}}/>
    </container.Navigator>
  );
}

const container2 = createStackNavigator();

function Afslutning2() {
  return (
    <container2.Navigator options={{gestureEnabled: false}}>
      <container2.Screen name="Login" component={Login} options={{headerShown: false, gestureEnabled: false}}/>
      <container2.Screen name="Menu" component={MyDrawer2} options={{headerShown: false, gestureEnabled: false}}/>
    </container2.Navigator>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showtab: true
    }; 
    this.changeShowtab = this.changeShowtab.bind(this);
  } 

  changeShowtab(){
    this.setState({showtab: !this.state.showtab})
  }

  render() {
    return (
      <NavigationContainer changeShowtab={this.changeShowtab} showtab={this.state.showtab}>
      {this.state.showtab? (<Afslutning1 changeShowtab={this.changeShowtab} showtab={this.state.showtab}/>):(<Afslutning2 changeShowtab={this.changeShowtab} showtab={this.state.showtab}/>)}   
      </NavigationContainer>
    );
  }
  }
   

