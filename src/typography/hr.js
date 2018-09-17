import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import colors from '../styles/colors'

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.palegrey,
  },
  separator_m: { marginVertical: 10 },
  separator_l: { marginVertical: 20 },
  invisible: {
    backgroundColor: 'transparent',
  },
})

const Hr = ({ size, invisible }) => (
  <View
    style={[
      styles.separator,
      styles[`separator_${size}`],
      invisible && styles.invisible,
    ]}
  />
)

Hr.propTypes = {
  size: PropTypes.oneOf(['m', 'l']),
  invisible: PropTypes.bool,
}

Hr.defaultProps = {
  size: 'm',
  invisible: false,
}

export default Hr
