import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Linking, Picker, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { 
    id: '0', 
    category: 'Agriculture Office', 
    name: 'Agriculture Office Erumapetty', 
    place: 'Erumapetty', 
    mapLink: 'https://maps.app.goo.gl/JUY47X4yDKDkmMYS8',
    events: [
      { eventName: 'Pachakari Chanda', eventDetails: 'Agriculutre Ofiice In Erumappety Is Giving Away Vegitables In Less Prices And Many Events @ 21/1/24 , The Vegitable Offer Goes Away next Month' },
    ],
  },
  { 
    id: '1', 
    category: 'Agriculture Office', 
    name: 'Agriculture Office Avanoor', 
    place: 'Erumapetty', 
    mapLink: 'https://maps.app.goo.gl/kDE3aHvUoiC76VQ78',
    events: [
      { eventName: 'Pachakari Chanda', eventDetails: 'Agriculutre Ofiice In Avanoor Is Giving Away Vegitables In Less Prices And Many Events @ 21/1/24 , The Vegitable Offer Goes Away next Month' },
    ],
  },
  { 
    id: '1', 
    category: 'Vetenary Office', 
    name: 'Govt. Vetinary Dispensary', 
    place: 'Erumapetty', 
    mapLink: 'https://maps.app.goo.gl/xJgqLnuBKxMsGGzA9',
    events: [
      { eventName: 'Free Vaccination', eventDetails: 'They Are Giving Free Vaccination For The Pets For This Month' },
    ],
  },
];

const EventPopup = ({ visible, onClose, events }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          {events.map((event, index) => (
            <View key={index}>
              <Text style={styles.eventName}>{event.eventName}</Text>
              <Text style={styles.eventDetails}>{event.eventDetails}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const Lawyer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [placeImages, setPlaceImages] = useState({});
  const [isEventPopupVisible, setEventPopupVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({ events: [] });
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

  const handleMorePress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleDropdownChange = (value) => {
    setSelectedCategory(value);
  };

  const handleEventPress = (events) => {
    setSelectedEvent({ events });
    setEventPopupVisible(true);
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
            <Picker.Item label="Church" value="Church" />
            <Picker.Item label="Temple" value="Temple" />
            <Picker.Item label="Mosque" value="Mosque" />
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
      return item.category === selectedCategory;
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
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleMapPress(item)}>
            <Ionicons name="location-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleEventPress(item.events)}>
            <Ionicons name="calendar-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {renderMenu()}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        contentContainerStyle={styles.listContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      />
      <EventPopup
        visible={isEventPopupVisible}
        onClose={() => setEventPopupVisible(false)}
        events={selectedEvent.events}
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
    alignItems: 'center',
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
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Lawyer;
