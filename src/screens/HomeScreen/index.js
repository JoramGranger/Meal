import {FlatList, StyleSheet, View } from 'react-native';

import restaurants from '../../../assets/data/restaurants.json';

import RestaurantItem from '../../components/RestauranItem';

export default function HomeScreen() {
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
