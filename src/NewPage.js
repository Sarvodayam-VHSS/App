// ReminderPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

const ReminderPage = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, newReminder]);
      setNewReminder('');
    }
  };

  const deleteReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  const renderReminderItem = ({ item, index }) => (
    <View style={styles.reminderItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => deleteReminder(index)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Reminders</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a reminder"
          value={newReminder}
          onChangeText={(text) => setNewReminder(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addReminder}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={reminders}
        renderItem={renderReminderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.reminderList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
  reminderList: {
    flex: 1,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});

export default ReminderPage;
