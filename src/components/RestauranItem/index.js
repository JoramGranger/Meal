import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ restaurant }) => {

  const navigation = useNavigation();

  const onPress = () => {
    /* console.warn('pressed');  */  
    navigation.navigate("Restaurant", {id: restaurant.id}); 
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
        <Image source={{ uri: restaurant.image, }}
        style={styles.image}
        alt="image"
        />
        <View style={styles.row}>
            <View>
                <Text style={styles.Title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>UGX: {restaurant.deliveryFee}, {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} </Text>
            </View>
            <View style={styles.rating}>
                <Text>{restaurant.rating}</Text>
            </View>
        </View>
        
      </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
      width: '100%',
      marginBottom: 5, 
      marginVertical: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
    },
    Title: {
      fontSize: 15,
      fontWeight: '500',
      marginVertical: 5,    
    },
    subtitle: {
      color: 'grey',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgrey',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
  
  });