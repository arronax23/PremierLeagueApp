import React, {Component} from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';

class NajlepsiStrzelcy extends Component {
  state = {isLoaded: false, json: null};

  componentDidMount() {
    fetch('https://api-football-v1.p.rapidapi.com/v2/topscorers/524', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '18d4916d39msh3917321934648fap1f6994jsn4d5544e88d0b',
      },
    })
      .then(response => response.json())
      .then(json => this.setState({json: json, isLoaded: true}))
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'darkcyan'}}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              marginBottom: 10,
            }}>
            Najlepsi strzelcy {'\n'} Premier League 19/20
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 0,
          }}>
          <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
            Zawodnik
          </Text>
          <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
            Występy
          </Text>
          <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
            Oddane strzały /{'\n'} celne
          </Text>
          <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
            Bramki
          </Text>
        </View>

        {this.state.isLoaded ? (
          <FlatList
            style={{marginTop: 5}}
            data={this.state.json.api.topscorers}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 2,
                  margin: 2,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
                  {item.player_name}
                </Text>
                <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
                  {item.games.appearences}
                </Text>
                <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
                  {item.shots.total}/{item.shots.on}
                </Text>
                <Text style={{fontSize: 15, width: 90, textAlign: 'center'}}>
                  {item.goals.total}
                </Text>
              </View>
            )}
            keyExtractor={item => item.player_id.toString()}
          />
        ) : null}
      </View>
    );
  }
}

export default NajlepsiStrzelcy;
