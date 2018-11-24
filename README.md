
# react-native-rewards
<p >
  <!-- <a href="https://www.npmjs.com/package/react-native-rewards">
  <img alt="npm dowloads" src="https://img.shields.io/npm/dm/react-native-rewards.svg"/></a> -->
  <a href="https://www.npmjs.com/package/react-native-rewards"><img alt="npm version" src="https://badge.fury.io/js/react-native-rewards.svg"/></a>
</p>

Library is strongly inspired by [react-rewards](https://github.com/thedevelobear/react-rewards) created by [The Develobear](https://medium.com/@thedevelobear)!

<p align="center">
<img alt='react-native-rewards demo' src="https://thumbs.gfycat.com/FancyBriskBluegill-size_restricted.gif"/>
</p>
## Getting started

`$ npm install react-native-rewards --save`

`$ yarn add react-native-root-view-background`

Library is 100% javascript so, there is no need to do native linking


## Usage

using props:

```javascript
import RewardsComponent from 'react-native-rewards';
import React, { Component, createRef } from 'react';

class App extends Component {
  state={
    animationState: 'rest',
  }

  render() {
    const { animationState } = this.state;
    return (
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
    )
  }
}
```

using ref:

```javascript
import RewardsComponent from 'react-native-rewards';
import React, { Component, createRef } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.rewardsComponent = createRef();
  }

  render() {
    return (
       <RewardsComponent
        ref={this.rewardsComponent}
        animationType="emoji"
      >
        <TouchableOpacity
          onPress={() => this.rewardsComponent.current.rewardMe()}
          style={styles.button}
        >
          <Image source={require('./assets/cup.png')}
           style={styles.icon}/>
        </TouchableOpacity>
      </RewardsComponent>
    )
  }
}
```

## Props
|         name         	|      type      	|                          description                          	| required 	|     default     	|
|:--------------------:	|:--------------:	|:-------------------------------------------------------------:	|:--------:	|:---------------:	|
| **`children`**       	| React Element  	| content to animate e.g. Button                                	|    YES   	|                 	|
| **`initialSpeed`**   	| Number/Float   	| initial speed of partices                                     	|    NO    	| `1`              	|
| **`spread`**         	| Number/Float   	| Multiplier of distance beetween partices                      	|    NO    	| `1`              	|
| **`deacceleration`** 	| Number/Float   	| Multiplier how fast partices deaccelerate in firt phase       	|    NO    	| `1`              	|
| **`rotationXSpeed`** 	| Number/Float   	| Rotation speed multiplier in X axis                           	|    NO    	| `5`              	|
| **`rotationZSpeed`** 	| Number/Float   	| Rotation speed multiplier in Z axis                           	|    NO    	| `5`               |
| **`particiesCount`** 	| Number/Integer 	| Partices count in reward animation                            	|    NO    	| `20`              |
| **`colors`**         	| Array          	| Colors used to generate confetti                              	|    NO    	| Some colors :)  	|
| **`emoji`**          	| Array          	| Emojis used to generate confetti                              	|    NO    	| `['👍','😊','🎉']` |
| **`animationType`**  	| String         	| Type of animation `confetti`/`emoji`                          	|    NO    	| `confetti`        |
| **`state`**          	| String         	| State of animation, changing of this value triggers animation 	|    NO    	| `rest`            |
| **`onRest`**         	| Function       	| Callback when animation goes to rest state                    	|    NO    	|                 	|


## Methods

You can call this method by using refs of component
* **`rewardMe`** - Triggers reward animation
* **`punishMe`** - Triggers punish animation

## Notes for local development
You need to have facebook watchman installed


1. `cd example`
2. `yarn`
4. `yarn start`
5. `yarn run sync` in another terminal window (doesn't matter where)

If you have any issues, you can clear your watches using `watchman watch-del-all` and try again.

## Author

Feel free to ask me qustion on Twitter [@JanRomaniak](https://www.twitter.com/JanRomaniak)!

