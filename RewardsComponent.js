import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Animated } from 'react-native';
import posed from 'react-native-pose';
import { generateConfettiItems, generateConfettiInitialTranslations, generateConfettiAnimations } from './confetti';
import { generateEmojiItems } from './emoji';

const confecttiCount = 40;
const SpringAnim = posed.View({
  clicked: {
    y: 5,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 2,
    },
  },
  punished: {
    x: 5,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 2,
    },
  },
  rest: {
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 2,
    },
  },
});
class RewardsComponent extends Component {
  state={
    translations: generateConfettiInitialTranslations(confecttiCount, 0),
    state: null,
  }

  constructor(props) {
    super(props);
    this.containerRef = createRef();
  }

  get animationParams() {
    const { initialSpeed, spread, deacceleration, rotationXSpeed, rotationZSpeed, useNativeDriver } = this.props;
    const params = { initialSpeed, spread, deacceleration, rotationXSpeed, rotationZSpeed, useNativeDriver };
    return params;
  }

  async rest() {
    setTimeout(() => {
      this.setState({ state: 'rest' });
      this.props.onRest();
    }, 100);
  }

  async punishMe() {
    this.setState({ state: 'punished' });
    this.rest();
  }

  UNSAFE_componentWillReceiveProps(props) {
    const newState = props.state;
    const { state } = this.props;
    if (state === newState) {
      return;
    }
    switch (newState) {
      case 'reward':
        this.rewardMe();
        break;
      case 'punish':
        this.rewardMe();
        break;
      default:
    }
  }
  async rewardMe() {
    this.setState({ state: 'clicked' });
    const translations = generateConfettiInitialTranslations(confecttiCount);

    this.setState({ translations }, () => generateConfettiAnimations(translations, this.animationParams));
    this.rest();
  }
  render() {
    const { children, animationType, colors, emojis } = this.props;
    const { translations, state } = this.state;
    let items;
    switch (animationType) {
      case 'confetti':
        items = generateConfettiItems(translations, confecttiCount, colors);
        break;
      case 'emoji':
        items = generateEmojiItems(translations, confecttiCount, emojis);
        break;
      default:
        items = generateConfettiItems(translations, confecttiCount, colors);
    }
    return (
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          {items}
        </View>
        <SpringAnim pose={state}>
          {children}
        </SpringAnim>
      </View>
    );
  }
}
RewardsComponent.propTypes = {
  children: PropTypes.element.isRequired,
  initialSpeed: PropTypes.number,
  spread: PropTypes.number,
  deacceleration: PropTypes.number,
  rotationXSpeed: PropTypes.number,
  rotationZSpeed: PropTypes.number,
  particiesCount: PropTypes.number,
  colors: PropTypes.array,
  emojis: PropTypes.array,
  animationType: PropTypes.oneOf(['confetti', 'emoji']),
  state: PropTypes.oneOf(['rest', 'reward', 'punish']),
  onRest: PropTypes.func,
  useNativeDriver: PropTypes.bool,
};

RewardsComponent.defaultProps = {
  initialSpeed: 1,
  spread: 1,
  deacceleration: 1,
  rotationXSpeed: 5,
  rotationZSpeed: 5,
  particiesCount: 20,
  colors: [
    '#A45BF1',
    '#25C6F6',
    '#72F753',
    '#F76C88',
    '#F5F770',
  ],
  emojis: [
    '👍',
    '😊',
    '🎉',
  ],
  animationType: 'confetti',
  state: 'rest',
  onRest: () => {},
  useNativeDriver: true,
};
export default RewardsComponent;
