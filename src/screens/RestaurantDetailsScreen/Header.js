import { View, Image, Text } from "react-native";
import styles from "./styles";


const Header = ({ restaurant }) => {
    return ( 
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image, }}
            style={styles.image}
            />
            {/* <View style={styles.iconContainer}>
                <Ionicons name="arrow-back-circle" size={45} color="white" style={styles.iconContainer}/>
            </View> */}
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    {restaurant.deliveryFee}, {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}
                </Text>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
     );
}

export default Header;
 
