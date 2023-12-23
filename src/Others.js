// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeServ = () => {
  const serviceButtons = [
    { label: 'KSEB', value: 'kseb', link: 'https://wss.kseb.in/selfservices/quickpay', icon: 'ios-flash-outline' },
    { label: 'KSFE', value: 'ksfe', link: 'https://ksfeonline.com/payment', icon: 'ios-cash-outline' },
    { label: 'Akshaya Govt.', value: 'akshayaGovt', link: 'http://www.akshaya.kerala.gov.in/', icon: 'ios-globe-outline' },
    { label: 'Post Office', value: 'postOffice', link: 'https://www.indiapost.gov.in/', icon: 'ios-mail-outline' },
    { label: 'Courier', value: 'courier', link: 'https://www.dhl.com/', icon: 'ios-archive-outline' },
    { label: 'Bank', value: 'bank', link: 'https://www.rbi.org.in/', icon: 'ios-briefcase-outline' },
    { label: 'Hospital', value: 'hospital', link: 'https://dhs.kerala.gov.in/', icon: 'ios-medkit-outline' },
    { label: 'Edu. Instit.', value: 'eduInstitute', link: 'https://education.kerala.gov.in/', icon: 'ios-book-outline' },
    { label: 'Online Shops', value: 'shops', link: 'https://www.amazon.in/', icon: 'ios-cart-outline' },
    { label: 'Medical Store', value: 'medicalStore', link: 'https://www.quickerala.com/thrissur/healthcare/medical-shops/sbct-5801-dt-13', icon: 'ios-medical-outline' },
    { label: 'Religious Place', value: 'religiousPlaces', link: 'http://tinyurl.com/religiousplaces', icon: 'ios-star-outline' },
    { label: 'Hotels', value: 'hotels', link: 'http://tinyurl.com/363e2vau', icon: 'ios-bed-outline' },
    { label: 'Jobs', value: 'jobVacancies', link: 'https://www.google.com/about/careers/applications/jobs/results/?location=India', icon: 'ios-briefcase-outline' },
    { label: 'Media', value: 'media', link: 'https://www.manoramaonline.com/', icon: 'ios-newspaper-outline' },
    { label: 'Agri/Vet Offices', value: 'agriVetOffices', link: 'http://tinyurl.com/agrivetoffices', icon: 'ios-leaf-outline' },
    { label: 'Food', value: 'restaurants', link: 'http://tinyurl.com/bdvuw2hj', icon: 'ios-restaurant-outline' },
  ];

  const handleButtonPress = (item) => {
    console.log(`Button pressed: ${item.label}`);

    if (item.link) {
      console.log(`Redirecting to: ${item.link}`);
      Linking.openURL(item.link).catch((err) => console.error('Error opening link:', err));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Other Services</Text>

      {/* Render service theme buttons */}
      <View style={styles.buttonContainer}>
        {serviceButtons.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[styles.button, { backgroundColor: 'transparent', borderColor: '#001F3F', borderWidth: 1 }]}
            onPress={() => handleButtonPress(item)}
          >
            {/* Use the specified icons for each button */}
            {item.icon && <Icon name={item.icon} size={30} color="#001F3F" />}

            <Text style={[styles.buttonText, { fontFamily: 'Poppins-Medium', marginTop: 5, color: '#001F3F', textAlign: 'center' }]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    marginVertical: 10,
    width: '32%',
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Add this line to align text center
  },
});

export default HomeServ;