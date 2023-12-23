import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ValamPage = () => {
  const fertilizerButtons = [
    { label: 'org fertilizer', value: 'website1', link: 'https://en.wikipedia.org/wiki/Organic_farming' },
    { label: 'inorg fertilizer', value: 'website2', link: 'https://en.wikipedia.org/wiki/Fertilizer' },
    { label: 'bio fertilizer', value: 'website3', link: 'https://www.biofertilizerwebsite.com' }, // Update with the suitable website for bio fertilizer
    { label: 'manure', value: 'website4', link: 'https://www.manure fertilizers.com' }, // Update with the suitable website for manure
    { label: 'nit fertilizers', value: 'website5', link: 'https://www.nitfertilizerwebsite.com' }, // Update with the suitable website for nit fertilizer
    { label: 'phosfertilizers', value: 'website6', link: 'https://www.phosfertilizerwebsite.com' }, // Update with the suitable website for phos fertilizer
    { label: 'compost', value: 'website7', link: 'https://www.compostwebsite.com' }, // Update with the suitable website for compost
    { label: 'pott fertilizers', value: 'website8', link: 'https://www.pottfertilizerwebsite.com' }, // Update with the suitable website for pott fertilizer
  ];

  const handleButtonPress = (item) => {
    console.log(`Button pressed: ${item.label}`);

    if (item.link) {
      Linking.openURL(item.link).catch((err) => console.error('Error opening link:', err));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Valam Page</Text>

        <View style={styles.buttonContainer}>
          {fertilizerButtons.map((item, index) => (
            <TouchableOpacity
              key={item.value}
              style={styles.squareButton}
              onPress={() => handleButtonPress(item)}
            >
              <View style={styles.buttonContent}>
                <Icon name="leaf" size={30} color="#001F3F" />
                <Text style={styles.buttonText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F3F',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  squareButton: {
    backgroundColor: 'transparent',
    padding: 15,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#001F3F',
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    color: '#001F3F',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ValamPage;
