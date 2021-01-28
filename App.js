import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {View, Text, Button, Alert} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from './components/Home';
import Tabela from './components/Tabela';
import NajlepsiStrzelcy from './components/NajlepsiStrzelcy';

import BlankPage from './components/BlankPage';

import Liverpool from './components/Liverpool';
import ManchesterCity from './components/ManchesterCity';
import Leicester from './components/Leicester';
import Chelsea from './components/Chelsea';
import Tottenham from './components/Tottenham';
import SheffieldUtd from './components/SheffieldUtd';
import ManchesterUnited from './components/ManchesterUnited';
import Wolves from './components/Wolves';
import Everton from './components/Everton';
import Arsenal from './components/Arsenal';
import Burnley from './components/Burnley';
import Southampton from './components/Southampton';
import Newcastle from './components/Newcastle';
import CrystalPalace from './components/CrystalPalace';
import Brighton from './components/Brighton';
import Bournemouth from './components/Bournemouth';
import AstonVilla from './components/AstonVilla';
import WestHam from './components/WestHam';
import Watford from './components/Watford';
import Norwich from './components/Norwich';
import FootballClub from './components/FootballClub';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Strona główna" component={Home} />
          <Drawer.Screen name="Tabela" component={Tabela} />
          <Drawer.Screen
            name="Najlepsi strzelcy"
            component={NajlepsiStrzelcy}
          />
          <Drawer.Screen
            name="-------------------------"
            component={BlankPage}
          />
          <Drawer.Screen name="Arsenal" component={FootballClub} options={{ id: 42}}/>
          <Drawer.Screen name="Aston Villa" component={FootballClub} options={{ id: 66}}/>
          <Drawer.Screen name="Bournemouth" component={FootballClub} options={{ id: 35}}/>
          <Drawer.Screen name="Brighton" component={FootballClub} options={{ id: 51}}/>
          <Drawer.Screen name="Burnley" component={FootballClub} options={{ id: 44}}/>
          <Drawer.Screen name="Chelsea" component={FootballClub} options={{ id: 49}}/>
          <Drawer.Screen name="Crystal Palace" component={FootballClub} options={{ id: 52}}/>
          <Drawer.Screen name="Everton" component={FootballClub} options={{ id: 45}}/>
          <Drawer.Screen name="Leicester" component={FootballClub} options={{ id: 46}}/>
          <Drawer.Screen name="Liverpool" component={FootballClub} options={{ id: 40}}/>
          <Drawer.Screen name="Manchester City" component={FootballClub} options={{ id: 50}}/>
          <Drawer.Screen name="Manchester United" component={FootballClub} options={{ id: 33}}/>
          <Drawer.Screen name="Newcastle" component={FootballClub} options={{ id: 34}}/>
          <Drawer.Screen name="Norwich" component={FootballClub} options={{ id: 71}}/>
          <Drawer.Screen name="Sheffield Utd" component={FootballClub} options={{ id: 62}}/>
          <Drawer.Screen name="Southampton" component={FootballClub} options={{ id: 41}}/>
          <Drawer.Screen name="Tottenham" component={FootballClub} options={{ id: 47}}/>
          <Drawer.Screen name="Watford" component={FootballClub} options={{ id: 38}}/>
          <Drawer.Screen name="West Ham" component={FootballClub} options={{ id: 48}}/>
          <Drawer.Screen name="Wolves" component={FootballClub} options={{ id: 39}}/>
 
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
