import { 
    View, 
    Image, 
    FlatList, 
    StyleSheet, 
    Text, 
    ActivityIndicator, 
    Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';

/* import restaurants from '../../../assets/data/restaurants.json'; */
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";

/* const restaurant = restaurants[1]; */


const RestaurantDetailsScreen = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDishes] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params?.id;

    const {setRestaurant: setBasketRestaurant, basket, basketDishes} = useBasketContext();
    
    useEffect(() => {
        if(!id){
            return;
        }
        setBasketRestaurant(null);
        DataStore.query(Restaurant, id).then(setRestaurant);
        DataStore.query(Dish, (dish) => dish.restaurantID("eq", id)).then(setDishes);
    }, [id]);

    useEffect(() => {
        setBasketRestaurant(restaurant);
    }, [restaurant]);


    if(!restaurant) {
        return <ActivityIndicator size="large" color="black"/>;
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
            {/* <View style={styles.iconContainer}> */}
                <Ionicons 
                onPress={() => navigation.goBack()}
                name="arrow-back-circle" 
                size={45} color="white" 
                style={styles.iconContainer}
                />
                {
                    basket && 
                    (
                        <Pressable onPress={() => navigation.navigate("Cart")} style={styles.button}>
                          <Text style={styles.buttonText}>
                            View Cart ({basketDishes.length})
                          </Text>
                        </Pressable>
                    )
                }
            {/* </View> */}
        </View>
     );
}

export default RestaurantDetailsScreen;
 
