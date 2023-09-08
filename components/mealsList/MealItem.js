import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";

export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate("MealDetails", {
            mealId: id
        })
    };

    return (
        <View style={styles.mealItem} >
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) =>  pressed && styles.buttonPressed}
                onPress={selectMealItemHandler}
            >
                <View>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <MealDetails {...{ complexity, duration, affordability }} />
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 16,
        overflow: Platform.OS === "android" ? "hidden" : "visible" // For the ripple effect to not pass the borderRadius
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    }
});