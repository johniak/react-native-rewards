import React from 'react';
import {Animated } from 'react-native';

export function ConfettiItem({ color, translateX, translateY, opacity, rotateX, rotateZ }) {
  const spinX = rotateX.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '360deg'],
  });
  const spinZ = rotateZ.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '360deg'],
  });
  const itemStyle = {
    backgroundColor: color,
    height: 8,
    width: 8,
    opacity,
    transform: [
      { translateX },
      { translateY },
      { rotateX: spinX },
      { rotateZ: spinZ },
    ],
    position: 'absolute',
  };
  return (
    <Animated.View style={itemStyle}/>
  );
}


export function generateConfettiItems(translations, count, colors) {
  const items = [];
  for (let i = 0; i < count; i++) {
    const { transform, opacity, rotateX, rotateZ } = translations[i];
    const item = (
      <ConfettiItem
        key={i}
        color={colors[i % colors.length]}
        translateX={transform.x}
        translateY={transform.y}
        rotateX={rotateX}
        rotateZ={rotateZ}
        opacity={opacity}
      />
    );
    items.push(item);
  }
  return items;
}

export function generateConfettiInitialTranslations(count = 20, initialOpacity = 1) {
  const translations = [];
  for (let i = 0; i < count; i++) {
    const translation = {
      transform: new Animated.ValueXY(0, 0),
      opacity: new Animated.Value(initialOpacity),
      rotateX: new Animated.Value(0),
      rotateZ: new Animated.Value(0),
    };
    translations.push(translation);
  }
  return translations;
}

export function generateConfettiAnimations(translations, params) {
  return translations.map((item, index) => generateConfettiAnimation(item, index, translations.length, params));
}

function generateConfettiAnimation({ transform, opacity, rotateX, rotateZ }, index, count, params) {
  const { initialSpeed, spread, deacceleration, rotationXSpeed, rotationZSpeed, useNativeDriver } = params;
  const degrees = 0;
  const angle = degrees * Math.PI / 180;
  const vx = Math.cos(angle);
  const vy = Math.sin(angle);
  const spreadSpeed = (Math.random() - 0.5) * 3 * initialSpeed * spread;
  const flySpeed = (-1.0 - Math.random() * 2) * initialSpeed;
  const xSpeed = spreadSpeed * vx + flySpeed * vy;
  const ySpeed = flySpeed * vx + flySpeed * vy;
  const upAnimation =
  Animated.decay(transform, {
    // coast to a stop
    velocity: { x: xSpeed, y: ySpeed }, // velocity from gesture release
    deceleration: 0.989 + (1 - deacceleration) / 100,
    useNativeDriver,
  });

  const duration = 2000 + Math.random() * 100;
  const downAnimation = Animated.timing( // Animate over time
    transform.y, // The animated value to drive
    {
      toValue: 100 + Math.random() * 100, // Animate to opacity: 1 (opaque)
      duration, // Make it take a while
      useNativeDriver,
    },
  );
  const disapearAnimation = Animated.timing( // Animate over time
    opacity, // The animated value to drive
    {
      toValue: 0, // Animate to opacity: 1 (opaque)
      duration, // Make it take a while
      useNativeDriver,
    },
  );
  const rotateXAnimation = Animated.timing(
    rotateX,
    {
      toValue: (Math.random() * 3) * rotationXSpeed,
      duration,
      useNativeDriver,
    },
  );
  const rotateZAnimation = Animated.timing(
    rotateZ,
    {
      toValue: (Math.random() * 5) * rotationZSpeed,
      duration,
      useNativeDriver,
    },
  );

  Animated.parallel([
    Animated.sequence([
      upAnimation,
      Animated.parallel([
        disapearAnimation,
        downAnimation,
      ]),
    ]),
    rotateXAnimation,
    rotateZAnimation,
  ]).start();
}
