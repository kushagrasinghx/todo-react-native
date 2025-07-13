import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export default function AppText(props: TextProps) {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DMSans_400Regular',
  },
}); 