// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeServ = () => {
  const maintenanceButtons = [
    { label: 'A/C', value: 'airConditioning' },
    { label: 'Fridge', value: 'fridge' },
    { label: 'Well', value: 'well' },
    { label: 'CCTV', value: 'cctv' },
    { label: 'Computer', value: 'computer' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Aluminium', value: 'aluminium' },
    { label: 'Tile', value: 'tile' },
    { label: 'Welding', value: 'welding' },
    { label: 'Workshop', value: 'workshop' },
    { label: 'Paint', value: 'paint' },
    { label: 'All Other', value: 'allOther' },
  ];

  const navigation = useNavigation();

  const handleButtonPress = (item) => {
    // Handle button press based on the item value
    console.log(`Button pressed: ${item.label}`);

    switch (item.value) {
      case 'airConditioning':
        navigation.navigate('ACScreen'); // Replace 'ACScreen' with the actual screen name in ac.js
        break;
      // Add cases for other buttons if needed
      default:
        // Handle default case
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Other Services</Text>

      {/* Render maintenance theme buttons */}
      <View style={styles.buttonContainer}>
        {maintenanceButtons.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#004080', // Darker Blue
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 20, // Make the buttons rounder
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeServ;
