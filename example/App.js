import React, { Component, createRef } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import RewardsComponent from 'react-native-rewards';

const CornflowerBlue = '#6495ED';

export default class App extends Component {
  state={
    animationState: 'rest',
  }
  constructor(props) {
    super(props);
    this.rewardsComponent = createRef();
    this.rewardsComponent2nd = createRef();
  }
  render() {
    const { animationState } = this.state;
    return (
      <ImageBackground source={require('./assets/Wiretap.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <RewardsComponent
            ref={this.rewardsComponent}
            animationType="emoji"
          >
            <TouchableOpacity
              onPress={() => this.rewardsComponent.current.rewardMe()}
              style={styles.button}
            >
              <Image source={require('./assets/cup.png')} style={{ width: 24, height: 24 }}/>
            </TouchableOpacity>
          </RewardsComponent>
          <RewardsComponent
            ref={this.rewardsComponent2nd}
            animationType="emoji"
          >
            <TouchableOpacity
              onPress={() => this.rewardsComponent2nd.current.punishMe()}
              style={styles.buttonPunish}
            >
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </RewardsComponent>
          <RewardsComponent
            animationType="confetti"
            state={animationState}
            onRest={() => this.setState({ animationState: 'rest' })}
          >
            <TouchableOpacity
              onPress={() => this.setState({ animationState: 'reward' })}
              style={styles.buttonProps}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </RewardsComponent>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: CornflowerBlue,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPunish: {
    backgroundColor: '#f04',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  buttonProps: {
    backgroundColor: '#f60',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
