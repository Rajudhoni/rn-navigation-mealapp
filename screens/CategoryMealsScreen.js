import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text> Category Meals Screen</Text>
            <Button title="Go to Meal Details" onPress={()=> {
                navigation.navigate("MealDetail");
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default CategoryMealsScreen;
