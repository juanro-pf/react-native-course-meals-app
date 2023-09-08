import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {

    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    useLayoutEffect(() => {
        const { title: categoryTitle } = CATEGORIES.find(category => category.id === categoryId);

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation]);

    return <MealsList items={displayedMeals} />;

};