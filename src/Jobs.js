import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Linking,
  TextInput,
  Modal,
  Button as RNButton,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const jobData = [
  {
    id: '0',
    title: 'Electrician',
    experience: '2+ years',
    qualifications: 'Electrical Certification',
    contactNumber: '+918921254370',
    needsHelper: true,
    needsSecondaryWorker: false,
  },
  {
    id: '1',
    title: 'Plumber',
    experience: '3+ years',
    qualifications: 'Plumbing Certification',
    contactNumber: '9876543210',
    needsHelper: true,
    needsSecondaryWorker: true,
  },
  // Add more job data as needed
];

const Courier = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [requestFormData, setRequestFormData] = useState({
    name: '',
    education: '',
    qualification: '',
    experience: '',
    place: '',
  });
  const [experiencePreview, setExperiencePreview] = useState(true); // Added state for experience preview

  const navigation = useNavigation();

  useEffect(() => {
    // Fetch images for each place using the Unsplash API or any other suitable service
    jobData.forEach((item) => {
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
    setSelectedJob(item);
    setIsModalVisible(true);
  };

  const handleWebsitePress = (contactNumber) => {
    setRequestFormData({
      name: '',
      education: '',
      qualification: '',
      experience: '',
      place: '',
    });
    setIsModalVisible(true);
  };

  const handleRequestJob = () => {
    const { name, education, qualification, experience, place } = requestFormData;

    // Determine the contact number (prefer whatsappNumber if available)
    const contactNumber = selectedJob.whatsappNumber || selectedJob.contactNumber;

    // Check if the user is eligible based on the required experience
    if (selectedJob.experience && parseInt(experience) < parseInt(selectedJob.experience[0])) {
      // If not eligible, show a message and return
      alert(`You are not eligible for this job. Minimum experience required: ${selectedJob.experience}`);
      return;
    }

    // Construct the WhatsApp message
    const whatsappMessage = `Hi, I am interested in the job.\n\nName: ${name}\nEducation: ${education}\nQualification: ${qualification}\nExperience: ${experience}\nPlace: ${place}`;

    // Construct the WhatsApp link
    const whatsappLink = `whatsapp://send?phone=${contactNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp with the filled details
    Linking.openURL(whatsappLink);

    // Close the modal after submitting the request
    setIsModalVisible(false);
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredResults = jobData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const renderJobDetailsModal = () => {
    if (!selectedJob) {
      return null;
    }
  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedJob.title}</Text>
            <Text>{`Experience Required: ${selectedJob.experience}`}</Text>
            <Text>{`Qualifications: ${selectedJob.qualifications}`}</Text>
            <Text>{`Needs Helper: ${selectedJob.needsHelper ? 'Yes' : 'No'}`}</Text>
            {selectedJob.needsSecondaryWorker && (
              <Text>{`Needs Secondary Worker: Yes`}</Text>
            )}
            {/* Add a space between job details and disclaimer */}
            <View style={{ marginBottom: 10 }} />
            <Text style={styles.disclaimerText}>
              We are not the job appointer; we act as middlemen by providing 
              the details given by you to the appointer through external app
              WhatsApp. We do not store your data and directly share the
              information given to the appointer's Whatsapp and do not take
              responsibilities after leaving the app.
            </Text>
            <View style={styles.modalFormContainer}>
              <TextInput
                style={styles.modalInput}
                placeholder="Name"
                value={requestFormData.name}
                onChangeText={(text) =>
                  setRequestFormData((prevData) => ({ ...prevData, name: text }))
                }
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Education"
                value={requestFormData.education}
                onChangeText={(text) =>
                  setRequestFormData((prevData) => ({ ...prevData, education: text }))
                }
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Qualification"
                value={requestFormData.qualification}
                onChangeText={(text) =>
                  setRequestFormData((prevData) => ({ ...prevData, qualification: text }))
                }
              />
              {/* Updated TextInput for experience with preview text */}
              <TextInput
                style={styles.modalInput}
                placeholder="Experience (if any)"
                value={requestFormData.experience}
                onChangeText={(text) => {
                  setRequestFormData((prevData) => ({ ...prevData, experience: text }));
                  setExperiencePreview(false); // Disable the preview when the user starts typing
                }}
              />
              {experiencePreview && (
                <Text style={styles.experiencePreviewText}>{`Required Experience : ${selectedJob.experience}`}</Text>
              )}
              <TextInput
                style={styles.modalInput}
                placeholder="Place"
                value={requestFormData.place}
                onChangeText={(text) =>
                  setRequestFormData((prevData) => ({ ...prevData, place: text }))
                }
              />
              <View style={styles.modalButtonsContainer}>
                <RNButton title="Submit Request" onPress={handleRequestJob} />
                <RNButton
                  title="Close"
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleItemPress(item)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.subText}>{`Experience: ${item.experience}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.clickForMoreButton}
            onPress={() => handleWebsitePress(item.contactNumber)}
          >
            <Text style={styles.clickForMoreButtonText}>Click for More</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderJobDetailsModal()}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#777" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      <FlatList
        data={searchTerm.length > 0 ? searchResults : jobData}
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
  clickForMoreButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  clickForMoreButtonText: {
    color: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    flex: 1,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalFormContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  experiencePreviewText: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
});

export default Courier;
