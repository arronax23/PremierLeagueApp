import React, {Component} from 'react';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';

class Arsenal extends Component {
  state = {
    isLoaded1: false,
    isLoaded2: false,
    isLoaded3: false,
    json1: null,
    json2: null,
    json3: null,
  };

  componentDidMount() {
    fetch('https://api-football-v1.p.rapidapi.com/v2/teams/team/42', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '18d4916d39msh3917321934648fap1f6994jsn4d5544e88d0b',
      },
    })
      .then(response => response.json())
      .then(json => this.setState({json1: json, isLoaded1: true}))
      .catch(err => {
        console.log(err);
      });
    /////////////////
    fetch(
      'https://api-football-v1.p.rapidapi.com/v2/players/squad/42/2019-2020',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '18d4916d39msh3917321934648fap1f6994jsn4d5544e88d0b',
        },
      },
    )
      .then(response => response.json())
      .then(json => this.setState({json2: json, isLoaded2: true}))
      .catch(err => {
        console.log(err);
      });
    ////////////////
    fetch('https://api-football-v1.p.rapidapi.com/v2/coachs/team/42', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '18d4916d39msh3917321934648fap1f6994jsn4d5544e88d0b',
      },
    })
      .then(response => response.json())
      .then(json => this.setState({json3: json, isLoaded3: true}))
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View style={{backgroundColor: 'darkcyan'}}>
        {this.state.isLoaded2 ? (
          <View>
            <FlatList
              style={{marginTop: 5}}
              ListHeaderComponent={
                this.state.isLoaded1 ? (
                  <View>
                    <Text style={{textAlign: 'center', fontSize: 30}}>
                      {this.state.json1.api.teams[0].name}
                    </Text>
                    <View style={{alignItems: 'center'}}>
                      <Image
                        source={{
                          width: 100,
                          height: 100,
                          uri: this.state.json1.api.teams[0].logo,
                        }}
                      />
                    </View>
                    <Text style={{textAlign: 'center', fontSize: 15}}>
                      Miasto: {this.state.json1.api.teams[0].venue_city}
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 15}}>
                      Stadion: {this.state.json1.api.teams[0].venue_name}
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 15}}>
                      Rok założenia: {this.state.json1.api.teams[0].founded}
                    </Text>
                    <View style={{marginTop: 20}}>
                      <Text style={{textAlign: 'center', fontSize: 20}}>
                        Lista zawodników:
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 0,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            width: 100,
                            textAlign: 'center',
                          }}>
                          Zawodnik
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            width: 35,
                            textAlign: 'center',
                          }}>
                          Wiek
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            width: 110,
                            textAlign: 'center',
                          }}>
                          Narodowość
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            width: 110,
                            textAlign: 'center',
                          }}>
                          Pozycja
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : null
              }
              ListFooterComponent={
                this.state.isLoaded3 ? (
                  <View>
                    <Text style={{textAlign: 'center', fontSize: 20}}>
                      Trener:
                    </Text>
                    <Text style={{textAlign: 'center'}}>
                      {this.state.json3.api.coachs[0].firstname}{' '}
                      {this.state.json3.api.coachs[0].lastname}
                    </Text>
                    <Text style={{textAlign: 'center'}}>
                      Wiek: {this.state.json3.api.coachs[0].age}
                    </Text>
                    <Text style={{textAlign: 'center'}}>
                      Narodowość: {this.state.json3.api.coachs[0].nationality}
                    </Text>
                  </View>
                ) : null
              }
              data={this.state.json2.api.players}
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
                  <Text style={{fontSize: 15, width: 100, textAlign: 'center'}}>
                    {item.player_name}
                  </Text>
                  <Text style={{fontSize: 15, width: 30, textAlign: 'center'}}>
                    {item.age}
                  </Text>
                  <Text style={{fontSize: 15, width: 110, textAlign: 'center'}}>
                    {item.nationality}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      width: 110,
                      textAlign: 'center',
                    }}>
                    {item.position}
                  </Text>
                </View>
              )}
              keyExtractor={item => item.player_id.toString()}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default Arsenal;
