// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

  const handleButtonPress = (item) => {
    // Handle button press based on the item value
    console.log(`Button pressed: ${item.label}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maintenance Services</Text>

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
    backgroundColor: '#001F3F', // Dark Blue
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
