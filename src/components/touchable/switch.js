import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  Switch,
} from 'react-native'

const styles = StyleSheet.create({
  switch: {
    transform: [
      { scaleX: Platform.OS === 'ios' ? 0.6 : 1 },
      { scaleY: Platform.OS === 'ios' ? 0.6 : 1 },
    ],
  },
  checkedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkText: {
    fontSize: 12,
    flex: 1,
    color: 'rgba(35, 36, 42, 0.6)',
    fontWeight: '400',
  },
})

const SwitchWithText = ({ value, onPress, text }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.checkedContainer}>
      <Switch onValueChange={onPress} value={value} style={styles.switch} />
      <Text style={styles.checkText}>{text}</Text>
    </View>
  </TouchableWithoutFeedback>
)

export default SwitchWithText
