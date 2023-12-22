// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeServ = () => {
  const serviceButtons = [
    { label: 'A/C Fridge', value: 'acFridge' },
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

  const handleButtonPress = (item) => {
    // Handle button press based on the item value
    console.log(`Button pressed: ${item.label}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Other Services</Text>

      {/* Render service theme buttons */}
      <View style={styles.buttonContainer}>
        {serviceButtons.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[styles.button, { backgroundColor: '#001F3F' }]} // Dark blue color
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
    backgroundColor: '#001F3F', // Dark blue color
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 8,
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
