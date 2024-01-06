// Professionals.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Professionals = () => {
  const navigation = useNavigation();

  const serviceButtons = [
    { label: 'Lawyer', value: 'lawyer', icon: 'ios-briefcase-outline' },
    { label: 'Health Care', value: 'hc', icon: 'ios-medkit-outline' },
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

    // Navigate to a new page (replace 'YourNewPage' with the actual name of your new page component)
    if (item.value === 'lawyer') {
      navigation.navigate('Lawyer');
    }
    if (item.value === 'hc') {
      navigation.navigate('Healthcare');
    }
    if (item.value === 'finance') {
      navigation.navigate('Finance');
    }
    if (item.value === 'firedepartment') {
      navigation.navigate('FireDepartment');
    }
    if (item.value === 'insurance') {
      navigation.navigate('Insurance');
    }
    if (item.value === 'engineering') {
      navigation.navigate('Engineering');
    }
    if (item.value === 'policeservices') {
      navigation.navigate('PoliceServices');
    }
    if (item.value === 'itprofessionals') {
      navigation.navigate('ITProfessionals');
    }
    if (item.value === 'photo/videographers') {
      navigation.navigate('PhotoVideoGraphers');
    }
    if (item.value === 'socialworkers') {
      navigation.navigate('SocialWorkers');
    }
    
    // Add more conditions for other buttons if needed
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // Update the path to your actual image
      style={styles.background}
    >
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
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
    width: '31%',
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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

export default Professionals;
