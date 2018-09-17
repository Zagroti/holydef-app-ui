import React from 'react'
import { StyleSheet, Text } from 'react-native'

import colors from '../styles/colors'

const styles = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    color: colors.lightgrey,
    fontSize: 18,
    fontFamily: 'IRANSans',
  },
})

const Empty = ({ children }) => <Text style={styles.empty}>{children}</Text>

export default Empty
