import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';

// StarRating component definition
const StarRating = ({ rating }) => {
  const filledStars = Array(Math.floor(rating)).fill('★');
  const emptyStars = Array(5 - Math.floor(rating)).fill('☆');
  const allStars = filledStars.concat(emptyStars);

  return (
    <Text style={{ fontSize: 24, color: 'orange', marginLeft: 10 }}>
      {allStars.map((star, index) => (
        <Text key={index}>{star}</Text>
      ))}
    </Text>
  );
};

// James component definition
const James = () => {
  const [rating, setRating] = useState(4); // Initial rating value
  const [age, setAge] = useState(30); // Add age state
  const [experience, setExperience] = useState('10+ years'); // Add experience state

  const biographyText =
    "Cristiano Ronaldo, commonly known as CR7, is a Portuguese professional footballer widely considered one of the greatest football players of all time. Born on February 5, 1985, in Funchal, Madeira, Ronaldo has had an illustrious career playing for Sporting Lisbon, Manchester United, Real Madrid, and currently, Manchester United again. Renowned for his goal-scoring prowess, athleticism, and versatility, Ronaldo has won numerous awards and accolades throughout his career.";

  const handleCallPress = () => {
    // Add logic to initiate a call
    const phoneNumber = 'tel:+919995738195'; // Replace with the actual phone number
    Linking.openURL(phoneNumber);
  };

  const handleMessagePress = () => {
    // Add logic to initiate a message on WhatsApp
    const whatsappNumber = 'whatsapp://send?phone=+919995738195'; // Replace with the actual WhatsApp number
    Linking.openURL(whatsappNumber);
  };

  return (
    <ImageBackground
      source={require('../assets/gradient.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Text style={styles.textAboveProfile}>James</Text>
          <Image
            source={require('../assets/messi.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Rating: </Text>
            <StarRating rating={rating} />
          </View>
          <View style={styles.infoContainer}>
          <Text style={styles.age}>Age: {age}</Text>
          <Text style={styles.experience}>Experience: {experience}</Text>
          <Text style={styles.place}>Place: Argentina</Text>
          </View>
          <Text style={styles.heading}>Bio</Text>
          <Text style={styles.biographyText}>{biographyText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
            <Image source={require('../assets/call.png')} style={styles.callIcon} />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton} onPress={handleMessagePress}>
            <Image source={require('../assets/messenger.png')} style={styles.messageIcon} />
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: '10%', // Adjust as needed
  },
  textAboveProfile: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 10, // Add marginTop for some spacing
  },
  age: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  experience: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft: 30, // Add marginLeft for spacing between age and experience
  },
  place:{
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft: 30, 
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start', // Align to the left
    marginLeft: 40, // Add some left margin
  },
  biographyText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    marginLeft: 20, // Match the left margin
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: 'orange', // Change color to orange
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  callIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: 'white',
  },
  callButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageButton: {
    flexDirection: 'row',
    backgroundColor: 'green', // Change color to green or your preference
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  messageIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: 'white',
  },
  messageButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default James;
