import { View, Text, StyleSheet, FlatList } from "react-native";


const CartDishItem = ({ cartDish }) => {
    return(
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={{fontWeight: '600'}}>{cartDish.name}</Text>
        <Text style={{ marginLeft: 'auto'}}>{cartDish.price}</Text>
    </View>
    );
};

const styles = StyleSheet.create({    
    name: 
    {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 10,
    },
    description: {
        color: 'grey',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    quantityContainer: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    }
});



export default CartDishItem;