import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../styles/colors'
import normalize from '../styles/normalizeText'

const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? normalize(14) : normalize(16),
    color: colors.default,
    fontFamily: 'IRANSans', 
    marginBottom: 5, 
    textAlign: 'right', 
  },
})

const H1 = ({ children }) => <Text style={styles.title}>{children}</Text>

export default H1
