import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import CartDishItem from "../../components/CartDishItem";
import { useBasketContext } from "../../contexts/BasketContext";
import { useOrderContext } from "../../contexts/OrderContext";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {

    const { restaurant, basketDishes, totalPrice } = useBasketContext();
    const { createOrder } = useOrderContext();
    const navigation = useNavigation();

    const onCreateOrder = async () => {
        await createOrder();
        navigation.goBack();
      };

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant?.name}</Text>
            <Text style={styles.subtitle}>Your Items</Text>
            <FlatList data={basketDishes} 
            renderItem={({ item }) => <CartDishItem cartDish={ item } />}
            />            
            <View style={styles.separator} />
            <Pressable onPress={onCreateOrder} style={styles.button}>
                <Text style={styles.buttonText}>Make Order (UGX {totalPrice.toFixed(0)})</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        with: '100%',
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 10,
    },
    subtitle: {
        fontWeight: 'bold',
        textAlign: 'center', 
        fontSize: 19, 
        marginTop: 20
    },
    description: {
        color: 'grey',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    }
});

export default CartScreen