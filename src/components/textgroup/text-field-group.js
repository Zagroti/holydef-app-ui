import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 16,
    color: colors.red,
    fontFamily: "IRANSans"
  },
  inputBox: {
    marginVertical: 4,
    color: colors.shadow,
    borderBottomColor: colors.themeBackground,
    borderBottomWidth: 2,
    paddingHorizontal: 0,
    paddingVertical: 2,
  },
  empty: {
    borderBottomColor: colors.empty,
  },
  error: {
    color: colors.google,
    fontSize: 16,
  },
})

const TextFieldGroup = (
  {
    label,
    value,
    placeholder,
    keyboard,
    onChangeText,
    onChange,
    error,
    secureTextEntry,
    multiline,
    maxLength,
    style,
    editable,
    labelStyle,
    fontSize,
    ...props
  } = { labelStyle: null, fontSize: 20},
) => (
  <View {...props}>
    {label && <Text style={labelStyle || styles.inputLabel}>{label}</Text>}
    <TextInput
      style={[styles.inputBox, !value && styles.empty, style, { fontSize }]}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboard}
      placeholderTextColor="rgba(35, 36, 42, 0.3)"
      onChangeText={onChangeText}
      onChange={onChange}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      maxLength={maxLength}
      editable={editable}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
)

export default TextFieldGroup
