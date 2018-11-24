import React from 'react';
import { Animated } from 'react-native';

export function EmojiItem({ emoji, translateX, translateY, opacity, rotateZ }) {
  const spinZ = rotateZ.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '360deg'],
  });
  const itemStyle = {
    height: 18,
    width: 18,
    opacity,
    transform: [
      { translateX },
      { translateY },
      { rotateZ: spinZ },
    ],
    position: 'absolute',
  };
  return (
    <Animated.View style={itemStyle}>
      <Animated.Text>{emoji}</Animated.Text>
    </Animated.View>
  );
}


export function generateEmojiItems(translations, count = 20, emojis) {
  const items = [];
  for (let i = 0; i < count; i++) {
    const { transform, opacity, rotateZ } = translations[i];
    const item = (
      <EmojiItem
        key={i}
        emoji={emojis[i % emojis.length]}
        translateX={transform.x}
        translateY={transform.y}
        rotateZ={rotateZ}
        opacity={opacity}
      />
    );
    items.push(item);
  }
  return items;
}
