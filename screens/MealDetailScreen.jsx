import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View>
      {selectedMeal.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View>
      {selectedMeal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
