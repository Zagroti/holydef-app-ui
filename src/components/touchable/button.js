import React from 'react'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native'

const Button = (
  { disabled, onPress, children, ...props } = { disabled: false },
) => {
  if (!onPress || disabled) {
    return children
  }

  return Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={onPress} {...props}>
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={onPress} {...props}>
      {children}
    </TouchableNativeFeedback>
  )
}

export default Button
