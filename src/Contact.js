import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';

const HomeServ = () => {
  const logo = require('../assets/logo.png');
  const phoneNumber = '+919746132313';
  const email = 'Svhss2024@gmail.com';
  const coordinates = '10.644267683689785,76.20448837123018';

  const openWhatsApp = () => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(whatsappUrl).catch((err) => console.error('Error opening WhatsApp:', err));
  };

  const sendEmail = () => {
    const emailUrl = `mailto:${email}`;
    Linking.openURL(emailUrl).catch((err) => console.error('Error opening email:', err));
  };

  const openMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${coordinates}`;
    Linking.openURL(mapsUrl).catch((err) => console.error('Error opening Maps:', err));
  };

  const fadeInAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image source={logo} style={[styles.logo, { opacity: fadeInAnim }]} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Contact Us</Text>

        {/* School Description Section */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Sarvodhayam Vhss Aryampadam High School (SVAHS) located at Thrissur Wadakkanchery Gups Puthuruthi Mundathikode is one of the popular schools in India. The School has been rated by 27 people on iCBSE. The Sarvodhayam Vhss Aryampadam High School has been viewed 855 times by the visitors on iCBSE. This School is counted among the top-rated Schools in Kerala with an excellent academic track record. If you're looking for more details regarding results, syllabus, application forms, admission procedure, and examinations schedule, kindly contact the relevant department of the school.
          </Text>
        </View>

        {/* Contact Section */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contact Us</Text>

          <TouchableOpacity onPress={openWhatsApp} style={styles.contactInfoContainer}>
            <Text style={styles.contactInfo}>
              📞 Phone: {phoneNumber}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={sendEmail} style={styles.contactInfoContainer}>
            <Text style={styles.contactInfo}>
              ✉️ Email: {email}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openMaps} style={styles.locationInfoContainer}>
            <Text style={styles.locationInfo}>
              📍 Location: {coordinates}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFD180', // Warm orange background color
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#A64C00', // Brown border color
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A64C00', // Brown text color
    marginBottom: 20,
    fontFamily: 'poppins-medium',
  },
  descriptionContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'poppins-regular',
    textAlign: 'left',
  },
  contactContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7F27', // Darker orange text color for header
    marginBottom: 10,
    fontFamily: 'poppins-medium',
  },
  contactInfoContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  contactInfo: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontFamily: 'poppins-medium',
  },
  locationInfoContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  locationInfo: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontFamily: 'poppins-medium',
  },
});

export default HomeServ;
