import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '0', category: 'Financial Analyst', name: 'John', age: 35, experience: '5 years', place: 'New York', pfp: require('../assets/ronaldo.jpg') },
  { id: '1', category: 'Branch Manager', name: 'James', age: 40, experience: '8 years', place: 'Los Angeles', pfp: require('../assets/messi.jpg') },
  { id: '2', category: 'Personal Banker', name: 'Wick', age: 45, experience: '10 years', place: 'Chicago', pfp: require('../assets/jude.jpeg') },
  { id: '3', category: 'Financial Advisor', name: 'Alfred', age: 38, experience: '6 years', place: 'San Francisco', pfp: require('../assets/neymar.jpg') },
  // Add more items as needed
];

const Finance = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation(); // Add this line

  const handleRefresh = () => {
    setRefreshing(true);
    // Implement your refresh logic here
    // Example: Fetch new data from API
    // Once data is fetched, setRefreshing(false);
  };

  const handleItemPress = (item) => {
    // Handle item press logic here
    console.log(`Item ${item.id} pressed`);

    if (item.name === 'John') {
      navigation.navigate('John');
    }
    if (item.name === 'James') {
      navigation.navigate('James');
    }
    if (item.name === 'Wick') {
      navigation.navigate('Wick');
    }
    if (item.name === 'Alfred') {
      navigation.navigate('Alfred');
    }
  };

  const renderItem = ({ item, index }) => {
    if (index === 0 || data[index - 1].category !== item.category) {
      // Render heading for the first item or when category changes
      return (
        <>
          <Text style={styles.headingLarge}>{item.category}</Text>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleItemPress(item)}
          >
            <Image source={item.pfp} style={styles.profilePicture} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.subText}>{`Age: ${item.age}, Experience: ${item.experience}, Place: ${item.place}`}</Text>
            </View>
          </TouchableOpacity>
        </>
      );
    } else {
      // Render regular item without heading
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => handleItemPress(item)}
        >
          <Image source={item.pfp} style={styles.profilePicture} />
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.subText}>{`Age: ${item.age}, Experience: ${item.experience}, Place: ${item.place}`}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
    justifyContent: 'flex-start',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
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
  headingLarge: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 16,
    color: '#333',
  },
});

export default Finance;
