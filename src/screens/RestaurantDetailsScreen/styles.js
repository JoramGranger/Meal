import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 /3,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    }, 
    subtitle: {
        color: 'grey',
        fontSize: 15,
    },
    container: {
        padding: 10,
    },
    iconContainer: {
        /* backgroundColor: 'white',
        padding: 10, */
        position: 'absolute',
        top: 40,
        left: 10,
        /* borderRadius: 50, */
    },
    menuTitle: {
        marginVertical: 20,
        fontSize: 20,
        letterSpacing: 0.7,
        /* alignSelf: "center" */
    }
});