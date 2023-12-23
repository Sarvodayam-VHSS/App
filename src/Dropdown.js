import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Dropdown = ({ service, buttonWidth, dropdownWidth, rightOffset, onButtonClick, buttonNames }) => {
  const generateRandomDetails = () => {
    switch (service) {
      case 'Electrical':
        return 'Experienced electricians for all your electrical needs.';
      case 'Plumbing':
        return 'Professional plumbing services for your home or office.';
      case 'Appliance Repair':
        return 'Fast and reliable appliance repair services.';
      case 'Service':
        return 'General maintenance and service for your property.';
      case 'Auto Service':
        return 'Complete auto services, from repairs to maintenance.';
      case 'Construction':
        return 'Construction experts for building and renovation projects.';
      case 'Others':
        return 'Customized services to meet your unique requirements.';
      default:
        return 'Details not available.';
    }
  };

  return (
    <ImageBackground
      source={require('../assets/wall.png')}
      style={[styles.container, { width: 150, right: rightOffset, height: 500 }]}
    >
      <Text style={styles.detailsText}>{generateRandomDetails()}</Text>

      {/* Add buttons within the dropdown for each service */}
      {buttonNames.map((buttonName, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { width: buttonWidth }]}
          onPress={() => onButtonClick(buttonName)}
        >
          <Text style={styles.buttonText}>{buttonName}</Text>
        </TouchableOpacity>
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 15,
    borderRadius: 0,
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'black',
    zIndex: 1000,
  },
  detailsText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#808080',
    borderRadius: 0,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
});

export default Dropdown;