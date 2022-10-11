import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
    
    return ( 
        <View style={styles.container}>
            <View style={styles.image}>
                <AntDesign  name="user" size={60} color={"black"}/>
            </View>
                
                <Text style={styles.title}>Profile</Text>
            {/* <View style={{flex: 1}}> */}
                <Text style={styles.name}>Name: Tazuba Hillary</Text>
                <Text style={styles.description} numberOfLines={2}>Phone: +256 700 000 000</Text>
           {/*  </View> */}
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        /* flexDirection: 'row',  */
   },
   image: {
    alignItems: 'center',
    margin: 20,
    paddingVertical: 20,
   },
   title: {
    margin: 20,
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
},
    name: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    description: {
        color: 'grey',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },

})
 
export default ProfileScreen;