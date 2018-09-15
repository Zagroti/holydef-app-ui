import { StyleSheet } from 'react-native'

import colors from './colors'

const defaultStyles = StyleSheet.create({
  defaultTextColor: {
    color: colors.default,
  },

  defaultHeaderTitle: {
    color: colors.default,
  },
})

export default defaultStyles
export const { defaultHeaderTitle } = defaultStyles
