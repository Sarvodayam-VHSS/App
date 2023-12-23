// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const HomeServ = () => {
  const serviceButtons = [
    { label: 'KSEB', value: 'kseb', link: 'https://wss.kseb.in/selfservices/quickpay' },
    { label: 'KSFE', value: 'ksfe', link: 'https://ksfeonline.com/payment'},
    { label: 'Akshaya Govt.', value: 'akshayaGovt', link: 'http://www.akshaya.kerala.gov.in/' },
    { label: 'Post Office', value: 'postOffice', link:'https://www.indiapost.gov.in/'},
    { label: 'Courier', value: 'courier', link: 'https://www.dhl.com/' },
    { label: 'Bank', value: 'bank', link: 'https://www.rbi.org.in/' },
    { label: 'Hospital', value: 'hospital', link: 'https://dhs.kerala.gov.in/' },
    { label: 'Edu. Instit.', value: 'eduInstitute', link: 'https://education.kerala.gov.in/' },
    { label: 'Online Shops', value: 'shops', link: 'https://www.amazon.in/' },
    { label: 'Medical Store', value: 'medicalStore', link: 'https://www.quickerala.com/thrissur/healthcare/medical-shops/sbct-5801-dt-13' },
    { label: 'Religious Places', value: 'religiousPlaces', link: 'http://tinyurl.com/religiousplaces' },
    { label: 'Hotels', value: 'hotels', link: 'http://tinyurl.com/363e2vau' },
    { label: 'Job Vacancies', value: 'jobVacancies', link: 'https://www.google.com/about/careers/applications/jobs/results/?location=India' },
    { label: 'Media', value: 'media', link: 'https://www.manoramaonline.com/' },
    { label: 'Agri/Vet Offices', value: 'agriVetOffices', link: 'http://tinyurl.com/agrivetoffices' },
    { label: 'Restaurants', value: 'restaurants', link: 'http://tinyurl.com/bdvuw2hj' },
  ];

  const handleButtonPress = (item) => {
    // Handle button press based on the item value
    console.log(`Button pressed: ${item.label}`);

    // Check if a link is provided for the button
    if (item.link) {
      // Show a redirect message (you can customize this message)
      console.log(`Redirecting to: ${item.link}`);
      
      // Open the web link
      Linking.openURL(item.link).catch((err) => console.error('Error opening link:', err));
    }
    // You can add additional logic for other buttons here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Other Services</Text>

      {/* Render service theme buttons */}
      <View style={styles.buttonContainer}>
        {serviceButtons.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[styles.button, { backgroundColor: '#001F3F' }]}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={[styles.buttonText, { fontFamily: 'Poppins-Medium' }]}>{item.label}</Text>
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
    borderRadius: 25,
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
