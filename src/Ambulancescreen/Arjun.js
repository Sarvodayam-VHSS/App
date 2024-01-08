import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, SafeAreaView, ScrollView, Modal } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const Arjun = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const arjunPhoto = require('./arjun.jpg');

  const handleCallPress = () => {
    const phoneNumber = '+91 9995738195';
    const phoneDialerUrl = `tel:${phoneNumber}`;

    Linking.openURL(phoneDialerUrl)
      .then((supported) => {
        if (!supported) {
          console.log('Phone dialer is not supported on the device.');
        }
      })
      .catch((err) => console.error('Error opening phone dialer', err));
  };

  const handleWhatsAppPress = () => {
    const whatsappNumber = '+91 9995738195';
    const whatsappUrl = `whatsapp://send?phone=${whatsappNumber}`;

    Linking.openURL(whatsappUrl)
      .then((supported) => {
        if (!supported) {
          console.log('WhatsApp is not installed on the device.');
        }
      })
      .catch((err) => console.error('Error opening WhatsApp', err));
  };

  const renderRatingBar = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return <Text style={styles.ratingBar}>{filledStars}{emptyStars}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.orangeBackground}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={arjunPhoto} style={styles.profilePicture} />
          </TouchableOpacity>
          <Text style={styles.name}>Arjun</Text>
          {renderRatingBar(4)}
        </View>
        <Text style={styles.heading}>Bio</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Age: 35</Text>
          <Text style={styles.detailsText}>Experience: 45 years</Text>
          <Text style={styles.detailsText}>Place: Mundathicode</Text>
        </View>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.description}>
          Welcome to Arjun's profile. He is an experienced professional with 45 years of expertise
          in Mundathicode. Feel free to contact him for any assistance. He works in Ottupara hospital as 
          the primary Ambulance driver. He is a social service with a good heart, His ambulance number is
          KL 48 G 1897 . Feel free to contact him if a necessary sequence of urgent occurs. The service is 
          available for 24/7.
        </Text>
      </ScrollView>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleCallPress}>
          <Ionicons name="call-outline" size={18} color="white" />
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.greenBackground]} onPress={handleWhatsAppPress}>
          <Ionicons name="logo-whatsapp" size={18} color="white" />
          <Text style={styles.actionText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Ionicons name="close" size={32} color="black" />
          </TouchableOpacity>
          <Image source={arjunPhoto} style={styles.modalProfilePicture} resizeMode="contain" />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  orangeBackground: {
    backgroundColor: 'orange',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 16,
  },
  greenBackground: {
    backgroundColor: 'green',
  },
  profilePicture: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 16,
  },
  modalProfilePicture: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  ratingBar: {
    fontSize: 24,
    color: 'white',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 16,
  },
  detailsContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  detailsText: {
    fontSize: 16,
    color: 'black',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  actionButton: {
    flexDirection: 'row',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    flex: 1,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Arjun;
