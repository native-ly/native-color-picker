import React from 'react'
import { View, StyleSheet } from 'react-native'

// TODO test
// TODO add custom props
export const InsetShadow = () => {
  return <View style={styles.container} />
}

// TODO
const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 30,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
})
