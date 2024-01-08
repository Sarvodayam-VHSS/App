import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', name: 'Angel', age: 35, experience: '5 years', place: 'New York', pfp: require('../Ambulancescreen/angel.jpg') },
  { id: '2', name: 'James', age: 40, experience: '8 years', place: 'Los Angeles', pfp: require('../Ambulancescreen/2.jpg') },
  { id: '3', name: 'Wick', age: 45, experience: '10 years', place: 'Chicago', pfp: require('../Ambulancescreen/3.jpg') },
  { id: '4', name: 'Alfred', age: 38, experience: '6 years', place: 'San Francisco', pfp: require('../Ambulancescreen/4.jpg') },
  // Add more items as needed
];

const Taxi = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  
  const handleRefresh = () => {
    setRefreshing(true);
    // Implement your refresh logic here
    // Example: Fetch new data from API
    fetchDataFromAPI()
      .then(newData => {
        setData(newData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setRefreshing(false);
      });
  };

  const handleItemPress = (item) => {
    console.log(`Item ${item.id} pressed`);

    // Example: Navigate based on the item name
    if (item.name === 'Angel') {
      navigation.navigate('AngelScreen');
    }
    // Add more navigation logic for other names if needed
  };

  const renderItem = ({ item, index }) => {
    if (index === 0 || data[index - 1].category !== item.category) {
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

export default Taxi;
