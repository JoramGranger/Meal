import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from 'aws-amplify';
import { Dish } from "../../models";

const DishDetailsScreen = () => {

    const [dish, setDish] = useState(null);
    const [quantity, setQuantity] = useState(0);

    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.id;

    useEffect(() => {
        if(id) {
            DataStore.query(Dish, id).then(setDish);
        }
    }, [id]);

    const onMinus = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    const onPlus = () => {
        setQuantity(quantity + 1);
    }
    const getTotal = () => {
        return (dish.price * quantity).toFixed(0);
    }

    if(!dish)
    {
        return <ActivityIndicator size="large" color="black" />
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />

            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus}/>
            </View>
            <Pressable onPress={() => navigation.navigate("Cart")} style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to cart (UGX {getTotal()})</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        with: '100%',
        paddingVertical: 30,
        padding: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: '700',
        marginVertical: 10,
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
        justifyContent: 'center',
        marginTop: 50,
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
});

export default DishDetailsScreen