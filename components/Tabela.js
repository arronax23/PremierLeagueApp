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

class Tabela extends Component {
  state = {isLoaded: false, json: null};

  componentDidMount() {
    fetch('https://api-football-v1.p.rapidapi.com/v2/leagueTable/524', {
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
            Tabela Premier League 19/20
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 0,
          }}>
          <Text style={{fontSize: 15, marginLeft: 5}}>Drużyna</Text>
          <Text style={{fontSize: 15, marginLeft: 5}}>Herb</Text>
          <Text style={{fontSize: 15, marginLeft: 5}}>
            Rozegrane/{'\n'}wygrane-{'\n'}przegrane-{'\n'}zremisowane{'\n'}
            mecze
          </Text>
          <Text style={{fontSize: 15, marginRight: 5}}>Punkty</Text>
        </View>

        {this.state.isLoaded ? (
          <FlatList
            style={{marginTop: 5}}
            data={this.state.json.api.standings[0]}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate(item.teamName.toString())
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 2,
                    margin: 2,
                    backgroundColor:
                      item.rank == 1
                        ? 'green'
                        : item.rank <= 4
                        ? 'lightgreen'
                        : item.rank <= 6 && item.rank >= 5
                        ? 'paleturquoise'
                        : item.rank >= 18
                        ? 'tomato'
                        : 'white',

                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 20}}>
                    {item.rank}.{item.teamName}
                  </Text>
                  <Image source={{width: 25, height: 25, uri: item.logo}} />
                  <Text style={{fontSize: 20}}>
                    {item.all.matchsPlayed}/{item.all.win}-{item.all.lose}-
                    {item.all.draw}
                  </Text>
                  <Text style={{fontSize: 20}}>{item.points}</Text>
                </View>
              </TouchableOpacity>
            )}
            ListFooterComponent={
              <View>
                <View style={{flexDirection: 'row', margin: 2}}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'green',
                    }}></View>
                  <Text> - Mistrzostwo i udział w Lidze Mistrzów UEFA</Text>
                </View>
                <View style={{flexDirection: 'row', margin: 2}}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'lightgreen',
                    }}></View>
                  <Text> - Liga Mistrzów UEFA</Text>
                </View>
                <View style={{flexDirection: 'row', margin: 2}}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'paleturquoise',
                    }}></View>
                  <Text> - Liga Europy UEFA</Text>
                </View>
                <View style={{flexDirection: 'row', margin: 2}}>
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: 'tomato',
                    }}></View>
                  <Text> - Spadek</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.rank.toString()}
          />
        ) : null}
      </View>
    );
  }
}

export default Tabela;
