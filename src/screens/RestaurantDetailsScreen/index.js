import { View, Image, FlatList, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';

/* import restaurants from '../../../assets/data/restaurants.json'; */
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from "../../models";

/* const restaurant = restaurants[1]; */


const RestaurantDetailsScreen = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDishes] = useState(null);

    const route = useRoute();
    const id = route.params?.id;
    
    useEffect(() => {
        DataStore.query(Restaurant, id).then(setRestaurant);
        DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes);
    }, []);

    const navigation = useNavigation();

    if(!restaurant) {
        return <ActivityIndicator size={"large"} color="grey"/>;
    }
    console.log

    return ( 
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={dishes}
            renderItem={({item}) => <DishListItem dish={item}/>}
            keyExtractor={(item) => item.name} 
            />
            <View style={styles.iconContainer}>
                <Ionicons 
                onPress={() => navigation.goBack()}
                name="arrow-back-circle" 
                size={45} color="white" 
                style={styles.iconContainer}
                />
            </View>
        </View>
     );
}

export default RestaurantDetailsScreen;
 
