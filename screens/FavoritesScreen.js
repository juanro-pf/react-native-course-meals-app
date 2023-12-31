// import { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/mealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {

    // const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    if(!favoriteMeals.length) return <View style={styles.rootContainer} >
        <Text style={styles.text} >You have no favorite meals yet.</Text>
    </View>;

    return <MealsList items={favoriteMeals} />
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
});