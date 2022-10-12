import {FlatList, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import RestaurantItem from '../../components/RestauranItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';


export default function HomeScreen() {

  const [restaurants, setRestaurants] = useState([]);
  /* const fetchRestaurants = async () => {
    const results = await DataStore.query(Restaurant);
    setRestaurants(results);    
  } */


  useEffect(() => {
    DataStore.query(Restaurant).then(setRestaurants);
    /* DataStore.query(Restaurant).then((results) => setRestaurants(results)); */
  }, []);

  return (
    <View style={styles.page}>
      <FlatList 
      data={restaurants}
      renderItem={({item}) => <RestaurantItem restaurant={item}/>}
      showVerticalScrollIndicator={false}
      /> 
    </View>    
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    paddingVertical: 20 // temporary solution
  },
});
