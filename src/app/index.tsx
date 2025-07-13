import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import ToDoCard from '../components/ToDoCard'

const Home = () => {
    return (
        <View>
            <Header />
            <View style={styles.container}>
                <ToDoCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 12,
    },
})


export default Home;