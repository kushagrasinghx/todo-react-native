import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ActionButton = () => {
    return (
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="add-circle" size={24} color="black" />
        <Text style={styles.text}>Reminder</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 100,
    gap: 7,
  },

  text: {
    fontSize: 18,
    fontFamily: 'DMSans_600SemiBold',
  }
})


export default ActionButton;
