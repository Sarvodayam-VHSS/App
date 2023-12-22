// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeServ = () => {
  const agriculturalButtons = [
    { label: 'Crop Management', value: 'cropManagement' },
    { label: 'Livestock Care', value: 'livestockCare' },
    { label: 'Soil Analysis', value: 'soilAnalysis' },
    { label: 'Irrigation', value: 'irrigation' },
    { label: 'Harvesting Tips', value: 'harvestingTips' },
    { label: 'Farm Equipment', value: 'farmEquipment' },
    { label: 'Pest Control', value: 'pestControl' },
    { label: 'Organic Farming', value: 'organicFarming' },
    { label: 'Marketplace', value: 'marketplace' },
    { label: 'Weather Forecast', value: 'weatherForecast' },
  ];

  const handleButtonPress = (item) => {
    // Handle button press based on the item value
    console.log(Button pressed: ${item.label});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>agricultural</Text>

      {/* Render agricultural theme buttons */}
      <View style={styles.buttonContainer}>
        {agriculturalButtons.map((item) => (
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
    backgroundColor: '#6DB33F', // Use your preferred color
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