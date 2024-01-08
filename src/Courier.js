import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Linking,
  Picker,
  Image,
  Button,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '0',
    type: 'International',
    name: 'DHL',
    website: 'https://dhl.com',
  },
  {
    id: '1',
    type: 'Country',
    name: 'Delhivery',
    phoneNumber: '1800112211',
    website: 'https://delhivery.in',
  },
  {
    id: '2',
    type: 'Country',
    name: 'Ekart',
    phoneNumber: '1234567890',
    whatsappNumber: '1234567890',
    website: 'https://ekartlogistics.com/',
  },
  {
    id: '3',
    type: 'Country',
    name: 'Xpressbees',
    phoneNumber: '1234567890',
    whatsappNumber: '1234567890',
    website: 'https://www.xpressbees.com/',
  },
];

const Courier = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch images for each place using the Unsplash API or any other suitable service
    data.forEach((item) => {
      // fetchPlaceImage(item.mapLink, item.id);
    });
  }, []);

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

  const handleWebsitePress = (websiteLink) => {
    Linking.openURL(websiteLink);
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
            <Picker.Item
              label="International"
              value="International"
            />
            <Picker.Item label="Country" value="Country" />
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
      return item.type === selectedCategory;
    }
  });

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.subText}>{`Type: ${item.type}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleWebsitePress(item.website)}
          >
            <Ionicons name="globe-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {renderMenu()}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="All" onPress={() => handleDropdownChange("All")} />
        <Button
          title="International"
          onPress={() => handleDropdownChange("International")}
        />
        <Button title="Country" onPress={() => handleDropdownChange("Country")} />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
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

export default Courier;
