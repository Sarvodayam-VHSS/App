// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const HomeServ = () => {
  const serviceButtons = [
    { label: 'Lawyer', value: 'lawyer', icon: 'ios-briefcase-outline' },
    { label: 'Health Care', value: 'healthcare', icon: 'ios-medkit-outline' },
    { label: 'Finance', value: 'finance', icon: 'ios-cash-outline' },
    { label: 'Insurance', value: 'insurance', icon: 'ios-shield-outline' },
    { label: 'Engineering', value: 'engineering', icon: 'ios-hammer-outline' },
    { label: 'Police Services', value: 'policeservices', icon: 'ios-people-outline' },
    { label: 'IT Professionals', value: 'itprofessionals', icon: 'ios-desktop-outline' },
    { label: 'Photo/Video Graphers', value: 'photo/videographers', icon: 'ios-camera-outline' },
    { label: 'Social Workers', value: 'socialworkers', icon: 'ios-people-circle-outline' },
    { label: 'Fire Department', value: 'firedepartment', icon: 'ios-flame-outline' },
  ];

  const handleButtonPress = (item) => {
    console.log(`Button pressed: ${item.label}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Professional</Text>

      {/* Render service theme buttons */}
      <View style={styles.buttonContainer}>
        {serviceButtons.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            {/* Use the specified icon for each button */}
            <Icon name={item.icon} size={30} color="#001F3F" />

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
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    marginVertical: 10,
    width: '30%',
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#001F3F',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: '#001F3F',
  },
});

export default HomeServ;
