import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ToDoCard = () => {
    const [isActive, setisActive] = useState(false);

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => setisActive(!isActive)}>
            <View style={styles.todoContainer}>
                <MaterialCommunityIcons name={isActive ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                <Text style={isActive ? styles.inactiveTitle : styles.title}>ToDoCard</Text>
            </View>
            <Text style={styles.time}>06:00</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: 'DMSans_600SemiBold',
    },
    time: {
        fontSize: 14,
        fontFamily: 'DMSans_600SemiBold',
    },
    inactiveTitle: {
        fontSize: 18,
        fontFamily: 'DMSans_500Medium',
        color: "#777",
    },
    todoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },
})

export default ToDoCard;