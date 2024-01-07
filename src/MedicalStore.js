import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Linking, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '0', category: 'English Medicines', name: 'HealthCare Pharmacy', place: 'Near School', rating: 4.5, phoneNumber: '', mapLink: 'https://maps.app.goo.gl/X1zyjjwEPFkCwBm36', profileImage: 'https://lh5.googleusercontent.com/p/AF1QipPrkK_Hy7gkh2r-qIIkwYTAesvJF6G0U9vOzgDL=w408-h612-k-no' },
  { id: '1', category: 'Ayurveda Medicine', name: 'Kotakkal Arya Vaidya Shala', place: 'Near Sarvodayam VHSS School', rating: 4.5, phoneNumber: '', mapLink: 'https://maps.app.goo.gl/x1gtSmFTmBqNYDwh8', profileImage: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LcEhN20VCFLFEx2w1bnP1w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=216.20923&pitch=0&thumbfov=100' },
  // Add more items as needed
];

const Lawyer = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfileImage, setSelectedProfileImage] = useState('');
  const navigation = useNavigation();

  const handleRefresh = () => {
    setRefreshing(true);
    // Implement your refresh logic here
    // Example: Fetch new data from API
    // Once data is fetched, setRefreshing(false);
  };

  const handleItemPress = (item) => {
    console.log(`Item ${item.id} pressed`);
    setSelectedProfileImage(item.profileImage);
    setModalVisible(true);
  };

  const handleCallPress = (item) => {
    if (!item.phoneNumber) {
      alert(`Phone number is not available for ${item.name}`);
      return;
    }

    const formattedPhoneNumber = encodeURIComponent(item.phoneNumber.replace(/\s/g, ''));

    Linking.canOpenURL(`tel:${formattedPhoneNumber}`).then((supported) => {
      if (supported) {
        Linking.openURL(`tel:${formattedPhoneNumber}`);
      } else {
        alert('Phone calls are not available on this device.');
      }
    });
  };

  const handleWhatsAppPress = (item) => {
    if (!item.phoneNumber) {
      alert(`Phone number is not available for ${item.name}`);
      return;
    }

    const formattedPhoneNumber = encodeURIComponent(item.phoneNumber.replace(/\s/g, ''));

    Linking.canOpenURL(`whatsapp://send?phone=${formattedPhoneNumber}`).then((supported) => {
      if (supported) {
        Linking.openURL(`whatsapp://send?phone=${formattedPhoneNumber}`);
      } else {
        alert('WhatsApp is not available on this device.');
      }
    });
  };

  const handleMapPress = (item) => {
    Linking.openURL(item.mapLink);
  };

  const renderButtons = (item) => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCallPress(item)}>
          <Ionicons name="call" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleWhatsAppPress(item)}>
          <Ionicons name="logo-whatsapp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleMapPress(item)}>
          <Ionicons name="location-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleMorePress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const renderMenu = () => {
    if (isMenuVisible) {
      return (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuOption} onPress={() => alert('Website pressed')}>
            <Text>Website</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption} onPress={() => alert('Treatments pressed')}>
            <Text>Treatments</Text>
          </TouchableOpacity>
          {/* Add more menu options as needed */}
        </View>
      );
    }
    return null;
  };

  const renderItem = ({ item, index }) => {
    // Check if the item is 'Kotakkal Arya Vaidya Shala'
    const isKotakkalAryaVaidyaShala = item.id === '1';

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.subText}>{`Category: ${item.category}`}</Text>
          <Text style={styles.subText}>{`Place: ${item.place}, Rating: ${item.rating}`}</Text>
        </View>
        {renderButtons(item)}
        {/* Check if it's not 'Kotakkal Arya Vaidya Shala' and render the menu icon */}
        {index === data.length - 1 && !isKotakkalAryaVaidyaShala && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleMorePress}
          >
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        )}
        {index === data.length - 1 && index > 1 && renderMenu()}
      </TouchableOpacity>
    );
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
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Image source={{ uri: selectedProfileImage }} style={styles.modalProfileImage} />
          {/* You can add more details or actions in the modal if needed */}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  menuOption: {
    paddingVertical: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalProfileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  modalCloseText: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
});

export default Lawyer;
