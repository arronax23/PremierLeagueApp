import React, {Component} from 'react';

import {View, Text, Image, Button, Alert} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'darkcyan'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 35,
              marginBottom: 10,
            }}>
            PremierLeagueApp
          </Text>
        </View>
        <Image
          style={{
            width: '75%',
            height: '25%',
            alignSelf: 'center',
            borderRadius: 10,
            marginBottom: 10,
          }}
          source={require('../premierleague.jpg')}
        />
        <View>
          <Text style={{textAlign: 'center', fontSize: 15}}>
            {' '}
            Aplikacja przedstawia informacje o najwyższym szczeblu rozgrywek
            ligi angielskiej w sezonie 2019/2020.{'\n'}
          </Text>
        </View>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          Autor: Wiktor Zielak
        </Text>
      </View>
    );
  }
}

export default Home;
