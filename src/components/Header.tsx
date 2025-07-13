import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppText from './AppText';

const Header = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {(() => {
                const today = new Date();
                const day = today.getDate();
                const month = today.toLocaleString('en-US', { month: 'short' });
                return (
                    <AppText style={styles.title}>
                        Today{' '}
                        <AppText style={styles.date}>{day} {month}</AppText>
                    </AppText>
                );
            })()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontFamily: 'DMSans_600SemiBold',
    },
    date: {
        fontSize: 16,
        color: '#888',
        fontFamily: 'DMSans_400Regular',
    },
});

export default Header;
