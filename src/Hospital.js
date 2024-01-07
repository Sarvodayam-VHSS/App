import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Linking,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = [
  { id: '0', category: 'Medical Collage', name: 'Thrissur Medical Collage', place: 'Near Athani', rating: 4.5 },
  // Add more items as needed
];

const Hospital = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [isAppointmentFormVisible, setIsAppointmentFormVisible] = useState(false);
  const [appointmentName, setAppointmentName] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const phoneNumber = '+91 89212 54370'; // The target phone number
  const mapLink = 'https://maps.app.goo.gl/63RmpY33wukF2vAP7';
  const websiteLink = 'https://gmctcr.in/';
  const treatmentsLink = 'https://gmctcr.in/departments';
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

  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleWhatsAppPress = () => {
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };

  const handleMapPress = () => {
    Linking.openURL(mapLink);
  };

  const handleWebsitePress = () => {
    Linking.openURL(websiteLink);
  };

  const handleTreatmentsPress = () => {
    Linking.openURL(treatmentsLink);
  };

  const handleMorePress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleAppointmentButtonPress = () => {
    setIsAppointmentFormVisible(true);
  };

  const handleAppointmentFormClose = () => {
    setIsAppointmentFormVisible(false);
  };

  const handleAppointmentSubmit = () => {
    const appointmentDetails = `Appointment Details:\nName: ${appointmentName}\nDate: ${selectedDate.toDateString()}\n`;
    const whatsappMessageLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(appointmentDetails)}`;

    Linking.openURL(whatsappMessageLink).then(() => {
      console.log('WhatsApp opened successfully');
    }).catch((error) => {
      console.warn('Error opening WhatsApp:', error);
    });

    setIsAppointmentFormVisible(false);
  };

  const renderMenu = () => {
    if (isMenuVisible) {
      return (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuOption} onPress={handleWebsitePress}>
            <Text>Website</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption} onPress={handleTreatmentsPress}>
            <Text>Treatments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption} onPress={handleAppointmentButtonPress}>
            <Text>Appointment</Text>
          </TouchableOpacity>
          {/* Add more menu options as needed */}
        </View>
      );
    }
    return null;
  };

  const renderAppointmentForm = () => {
    if (isAppointmentFormVisible) {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isAppointmentFormVisible}
          onRequestClose={handleAppointmentFormClose}
        >
          <View style={styles.appointmentForm}>
            <Text style={styles.formTitle}>Appointment Form</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={appointmentName}
              onChangeText={(text) => setAppointmentName(text)}
            />
            <View style={styles.datePickerButton}>
              <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
                <Ionicons name="calendar" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.datePickerButtonText}>Select Date</Text>
            </View>
            {isDatePickerVisible && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={(event, date) => {
                  date && setSelectedDate(date);
                  setIsDatePickerVisible(false);
                }}
              />
            )}
            <Text style={styles.selectedDateText}>{`Selected Date: ${selectedDate.toDateString()}`}</Text>
            <TouchableOpacity style={styles.submitButton} onPress={handleAppointmentSubmit}>
              <Text style={styles.submitButtonText}>Submit Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleAppointmentFormClose}>
              <Text style={styles.submitButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      );
    }
    return null;
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <TouchableOpacity style={styles.profilePic} onPress={() => setIsImageModalVisible(true)}>
          <Image
            source={{ uri: 'https://content.jdmagicbox.com/comp/thrissur/b5/9999px487.x487.170929160552.d8b5/catalogue/govt-medical-college-hospital-casualty-mulagunnathukavu-thrissur-hospitals-h2qfabo27w.jpg' }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.subText}>{`Place: ${item.place}, Rating: ${item.rating}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCallPress}>
            <Ionicons name="call" size={24} color="black" />
          </TouchableOpacity>
          {item.name === 'Thrissur Medical Collage' && (
            <TouchableOpacity style={styles.button} onPress={handleWhatsAppPress}>
              <Ionicons name="logo-whatsapp" size={24} color="black" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button} onPress={handleMapPress}>
            <Ionicons name="location-outline" size={24} color="black" />
          </TouchableOpacity>
          {index === data.length - 1 && (
            <TouchableOpacity
              style={styles.button}
              onPress={handleMorePress}
            >
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
        {renderMenu()}
        {renderAppointmentForm()}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isImageModalVisible}
          onRequestClose={() => setIsImageModalVisible(false)}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setIsImageModalVisible(false)}
          >
            <Image
              resizeMode="contain"
              style={{ width: '80%', height: '80%', borderRadius: 10 }}
              source={{ uri: 'https://content.jdmagicbox.com/comp/thrissur/b5/9999px487.x487.170929160552.d8b5/catalogue/govt-medical-college-hospital-casualty-mulagunnathukavu-thrissur-hospitals-h2qfabo27w.jpg' }}
            />
          </TouchableOpacity>
        </Modal>
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
    marginVertical: 8,
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
    marginLeft: 10,
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
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  // Styles for the appointment form
  appointmentForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePickerButtonText: {
    marginLeft: 10,
  },
  selectedDateText: {
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Hospital;
