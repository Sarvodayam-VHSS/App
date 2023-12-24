import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeServ = () => {
  const logo = require('../assets/logo.png');
  const phoneNumber = '+919746132313';
  const email = 'Svhss2024@gmail.com';
  const coordinates = "10°38'24.0\"N 76°12'00.0\"E"; // Reduced the size of coordinates

  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = fadeInAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  }, [fadeInAnim]);

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

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[
          styles.logo,
          {
            opacity: fadeInAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>sarvodhyam</Text>

        {/* School Description Section */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Welcome to Sarvodhayam Vhss Aryampadam High School (SVHSS), a place of learning, growth, and excellence. We strive to provide quality education and foster an environment where students can thrive academically and personally.
          </Text>
        </View>

        {/* Contact Section */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Contact Information</Text>

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

          {/* Support Sentence */}
          <Text style={styles.supportText}>
            For any support-related inquiries or other concerns, please don't hesitate to reach out to our dedicated Contact Us team. We're here to assist you!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFD180',
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    marginBottom: 20,
    resizeMode: 'contain',
    borderWidth: 5,
    borderColor: '#A64C00',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A64C00',
    marginBottom: 20,
    fontFamily: 'poppins-medium',
  },
  descriptionContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'poppins-regular',
    textAlign: 'justify',
  },
  contactContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF7F27',
    marginBottom: 15,
    fontFamily: 'poppins-medium',
  },
  contactInfoContainer: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
  contactInfo: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
    fontFamily: 'poppins-medium',
  },
  locationInfoContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  locationInfo: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    fontFamily: 'poppins-medium',
  },
  supportText: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'poppins-regular',
    textAlign: 'justify',
    marginTop: 15,
  },
});

export default HomeServ;
