import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Subtitle({children}) {
  return (
<View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
      color: "#afafaf",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    subtitleContainer: {
      padding: 6,
      marginHorizontal: 12,
      marginVertical: 4,
      borderBottomColor: "#afafaf",
      borderBottomWidth: 2,
    },
  });
  