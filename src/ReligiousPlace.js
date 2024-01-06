import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Linking, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '0', category: 'Church', name: 'Christ King Church Mundathicode', place: 'Mundathicode' },
  { id: '1', category: 'Temple', name: 'Aryampadam Sri Mahavishnu Temple', place: 'Aryampadam' },
  { id: '2', category: 'Mosque', name: 'Aryampadam Mosque', place: 'Aryampadam Main Road' },
];

const Lawyer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

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
    if (item.category === 'Church' && item.name === 'Christ King Church Mundathicode') {
      Linking.openURL('https://maps.app.goo.gl/Jnr8jPxZpDu9ZGXo7');
    } else if (item.category === 'Temple' && item.name === 'Aryampadam Sri Mahavishnu Temple') {
      Linking.openURL('https://maps.app.goo.gl/9r6jDHz7DH56YT9X8');
    } else if (item.category === 'Mosque' && item.name === 'Aryampadam Mosque') {
      Linking.openURL('https://maps.app.goo.gl/AP2DQcAmn5V7Xmh96'); // Updated link for Aryampadam Mosque
    } else {
      Linking.openURL('https://maps.app.goo.gl/defaultLink');
    }
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
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.subText}>{`Place: ${item.place}, Rating: ${item.rating}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleMapPress(item)}>
            <Ionicons name="location-outline" size={24} color="black" />
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
});

export default Lawyer;
