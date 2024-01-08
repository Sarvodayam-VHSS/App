import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Linking, Picker, Image, Modal, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { 
    id: '0', 
    type: 'ATM',
    name: 'BOI ATM', 
    place: 'Aryampadam Centre', 
    mapLink: 'https://maps.app.goo.gl/ZZeN9pEjjJfgWbrS8',
    phoneNumber: '',
    whatsappNumber: '',
  },

  { 
    id: '1', 
    type: 'ATM',
    name: 'SBI ATM', 
    place: 'MUndathikode', 
    mapLink: 'https://maps.app.goo.gl/WjCuJnr9cwdbtoWb7',
    phoneNumber: '1800112211',
    whatsappNumber: '',
  },

  { 
    id: '2', 
    type: 'ATM',
    name: 'SIB ATM', 
    place: 'Velur Post Office', 
    mapLink: 'https://maps.app.goo.gl/LMsQkiaEBRrdSfzS8',
    phoneNumber: '9876543210',
    whatsappNumber: '9876543210',
  },

  { 
    id: '3', 
    type: 'Bank',
    name: 'South Indian Bank', 
    place: 'Velur Post Office', 
    mapLink: 'https://maps.app.goo.gl/DxhJbvqiNXHkBRPr5',
    phoneNumber: '1234567890',
    whatsappNumber: '1234567890',
  },
];

const Lawyer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [placeImages, setPlaceImages] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch images for each place using the Unsplash API or any other suitable service
    data.forEach((item) => {
      fetchPlaceImage(item.mapLink, item.id);
    });
  }, []);

  const fetchPlaceImage = async (mapLink, itemId) => {
    try {
      // Use a suitable API to fetch images for the given location (Unsplash API example)
      const response = await fetch(`https://api.unsplash.com/photos/random?query=${mapLink}&count=1&client_id=YOUR_UNSPLASH_API_KEY`);
      const data = await response.json();

      if (data && data.length > 0) {
        setPlaceImages((prevImages) => ({
          ...prevImages,
          [itemId]: data[0].urls.small,
        }));
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    // Implement your refresh logic here
    // Example: Fetch new data from API
    // Once data is fetched, setRefreshing(false);
  };

  const handleItemPress = (item) => {
    console.log(`Item ${item.id} pressed`);
    // Remove redirection logic
  };

  const handleMapPress = (item) => {
    Linking.openURL(item.mapLink);
  };

  const handleCallPress = (phoneNumber) => {
    if (!phoneNumber) {
      Alert.alert('Phone number is not available.');
      return;
    }
  
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Phone number is not available.');
        }
      })
      .catch((error) => console.error('Error opening phone app:', error));
  };
  
  const handleWhatsAppPress = (whatsappNumber) => {
    if (!whatsappNumber) {
      Alert.alert('WhatsApp number is not available.');
      return;
    }
  
    const url = `whatsapp://send?phone=${whatsappNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('WhatsApp is not available.');
        }
      })
      .catch((error) => console.error('Error opening WhatsApp:', error));
  };
  const handleMorePress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDropdownChange = (value) => {
    setSelectedCategory(value);
  };

  const renderMenu = () => {
    if (isMenuVisible) {
      return (
        <View style={styles.menuContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => handleDropdownChange(itemValue)}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="ATM" value="ATM" />
            <Picker.Item label="Bank" value="Bank" />
          </Picker>
        </View>
      );
    }
    return null;
  };

  const filteredData = data.filter((item) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return item.type === selectedCategory;  // Change from 'category' to 'type'
    }
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <View style={styles.imageContainer}>
          {placeImages[item.id] && (
            <Image
              style={styles.profilePic}
              source={{ uri: placeImages[item.id] }}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.subText}>{`Place: ${item.place}`}</Text>
          <Text style={styles.subText}>{`Type: ${item.type}`}</Text>  {/* Change from 'category' to 'type' */}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleMapPress(item)}>
            <Ionicons name="location-outline" size={24} color="black" />
          </TouchableOpacity>
          {item.type !== 'BOI ATM' && (
            <TouchableOpacity style={styles.button} onPress={() => handleCallPress(item.phoneNumber)}>
              <Ionicons name="call-outline" size={24} color="black" />
            </TouchableOpacity>
          )}
          {item.type !== 'BOI ATM' && item.type !== 'SBI ATM' && (
            <TouchableOpacity style={styles.button} onPress={() => handleWhatsAppPress(item.whatsappNumber)}>
              <Ionicons name="logo-whatsapp" size={24} color="green" />
            </TouchableOpacity>
          )}
        </View>
        {renderMenu()}
      </TouchableOpacity>
    );
  };  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="ATM" onPress={() => handleDropdownChange("ATM")} />
        <Button title="Bank" onPress={() => handleDropdownChange("Bank")} />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        contentContainerStyle={styles.listContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  listContainer: {
    paddingVertical: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginRight: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    padding: 5,
    marginRight: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default Lawyer;
