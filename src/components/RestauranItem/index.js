import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg";

const RestaurantItem = ({ restaurant }) => {

  const navigation = useNavigation();

  const onPress = () => {
    /* console.warn('pressed');  */  
    navigation.navigate("Restaurant", {id: restaurant.id}); 
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
        <Image source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE }}
        style={styles.image}
        alt="image"
        />
        <View style={styles.row}>
            <View>
                <Text style={styles.Title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>UGX: {restaurant.deliveryFee.toFixed(0)},{"  "}{restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} </Text>
            </View>
            <View style={styles.rating}>
                <Text>{restaurant.rating.toFixed(1)}</Text>
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