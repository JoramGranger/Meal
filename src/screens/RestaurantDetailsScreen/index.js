import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";

import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";

const restaurant = restaurants[1];

const RestaurantDetailsScreen = () => {

    const route = useRoute();
    const id = route.params?.id;
    console.warn(id);

    const navigation = useNavigation();

    return ( 
        <View style={styles.page}>
            <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={restaurant.dishes}
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
 
