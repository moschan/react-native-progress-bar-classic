/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// import PBC from './index.js'
import PBC from 'react-native-progress-bar-classic'

class ProggressBarExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      progress: 20,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Progress Bar Classic Example</Text>
        <PBC
          valueStyle={'baloon'}
          progress={this.state.progress}
          height={20} /* future work */
          fillColor={{}} /* future work */
          backgroundColor={{}} /* future work */
          borderColor={{}} /* future work */
        />

        <PBC
          valueStyle={'default'}
          progress={this.state.progress}
        />

        <PBC
          valueStyle={'none'}
          progress={this.state.progress}
        />

        <PBC
          valueStyle={'default'}
          label={'Label'}
          progress={this.state.progress}
        />

        <PBC
          valueStyle={'default'}
          label={'Label'}
          value={123}
          progress={this.state.progress}
        />

        <TouchableOpacity
          onPress={() => {
            this.setState({progress: Math.min(...[this.state.progress + 20, 100])})
          }}
          style={styles.button}
        >
          <Text>+20%</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {this.setState({progress: Math.max(...[this.state.progress -= 20, 0])})}}
          style={styles.button}
        >
          <Text>-20%</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 25,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    borderWidth: 2,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ProggressBarExample', () => ProggressBarExample);
