import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetial/Subtitle";
import List from "../components/MealDetial/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const meal = MEALS.find((me) => me.id === mealId);

  const headerButtonHandler = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title="Tap" onPress={headerButtonHandler} />;
        return (
          <IconButton
            onPress={headerButtonHandler}
            icon={"star"}
            color={"white"}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
