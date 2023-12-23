import React, { useEffect, useState } from 'react';
import { View, Text, Button, BackHandler, StyleSheet, ScrollView } from 'react-native';
import * as Font from 'expo-font';


const ThoughtScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'poppins-medium': require('./Poppins-Medium.ttf'), // Update the path accordingly
      });
      setFontLoaded(true);
    };

    loadFonts();

    const onBackPress = () => {
      BackHandler.exitApp();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

  const thoughts = [
    'Your thoughts shape your reality.',
    'Embrace the power of positivity.',
    'Every day is a new opportunity to change your life.',
    'Believe in yourself, and you will be unstoppable.',
    'The only limit to our realization of tomorrow will be our doubts of today.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'Strive for progress, not perfection.',
    'Your attitude determines your direction.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'The only way to do great work is to love what you do.',
    'Don’t watch the clock; do what it does. Keep going.',
    'Believe you can and you’re halfway there.',
    'Don’t count the days, make the days count.',
    'The only impossible journey is the one you never begin.',
    'Your life does not get better by chance, it gets better by change.',
    'Success usually comes to those who are too busy to be looking for it.',
    'The secret to getting ahead is getting started.',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
    'Hard work beats talent when talent doesn’t work hard.',
    'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
  ];

  const getRandomThought = () => {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    return thoughts[randomIndex];
  };

  const getRandomColor = () => {
    const colors = ['#092635', '#1B4242', '#5C8374', '#9EC8B9'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const [thought, setThought] = useState(getRandomThought());
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const handleRefresh = () => {
    setThought(getRandomThought());
    setBackgroundColor(getRandomColor());
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      {fontLoaded && (
        <Text style={styles.thoughtText}>
          {thought}
        </Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button title="Skip" onPress={handleSkip} />
        <Button title="Refresh" onPress={handleRefresh} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontFamily: 'poppins-medium',
  },
  thoughtText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    fontFamily: 'poppins-medium',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ThoughtScreen;
