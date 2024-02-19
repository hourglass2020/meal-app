import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) !== -1;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  function renderMealItem(itemData) {
    const { item } = itemData;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
    };

    return (
      <MealItem
        id={mealItemProps.id}
        title={mealItemProps.title}
        imageUrl={mealItemProps.imageUrl}
        duration={mealItemProps.duration}
        affordability={mealItemProps.affordability}
        complexity={mealItemProps.complexity}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
