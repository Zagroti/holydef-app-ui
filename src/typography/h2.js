import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../styles/colors'
import normalize from '../styles/normalizeText'

const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),
    color: colors.default,
    fontFamily: 'IRANSans',
    textAlign: 'right', 
 
  },
})

const H2 = ({ children }) => <Text style={styles.title}>{children}</Text>

export default H2
