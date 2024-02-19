import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

export default function CategoryGridTitle({ title, color, onPress }) {  
    return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5
  },    
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // color: 'white'
  },
});
