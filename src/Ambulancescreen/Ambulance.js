import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  { name: 'Abhishek', age: 35, experience: '45 years', place: 'Mundathicode', pfp: require('../Ambulancescreen/abh.jpg') },
  { name: 'Jose', age: 40, experience: '38 years', place: 'Thiruthiparambb', pfp: require('../Ambulancescreen/2.jpg') },
  { name: 'Mani', age: 45, experience: '40 years', place: 'Muttikal', pfp: require('../Ambulancescreen/3.jpg') },
  { name: 'Biju', age: 38, experience: '48', place: 'Aryampadam', pfp: require('../Ambulancescreen/4.jpg') },
  // Add more items as needed
];

const Ambulance = () => {
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
    console.log(`Item ${item.name} pressed`);

    if (item.name === 'Abhishek') {
      navigation.navigate('Abhishek');
    } else if (item.name === 'Jose') {
      navigation.navigate('Jose');
    }
  };

  const renderItem = ({ item, index }) => {
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
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name} // Use name as the key
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
});

export default Ambulance;
