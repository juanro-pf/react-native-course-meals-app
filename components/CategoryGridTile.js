import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem} >
            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                android_ripple={{color: "#ccc"}}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]} >
                    <Text style={styles.title} >{ title }</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: "white", // Added for the shadow to take effect on ios
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible" // For the ripple effect to not pass the borderRadius
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
});