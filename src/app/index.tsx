import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import ToDoCard from '../components/ToDoCard'
import ActionButton from '../components/ActionButton'

const Home = () => {
    return (
        <View style={styles.root}>
            <Header />
            <View style={styles.container}>
                <ToDoCard />
                <ToDoCard />
            </View>
            <View style={styles.actionButton}>
                <ActionButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        position: 'relative',
    },
    container: {
        padding: 20,
        gap: 12,
    },
    actionButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
})

export default Home
