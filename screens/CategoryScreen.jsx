import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
        navigation.navigate("MealOverview", {
            categoryId: itemData.item.id,
        })
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        return item.id;
      }}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
