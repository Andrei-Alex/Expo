import {StyleSheet} from "react-native";
import {colors} from '../../config'

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    title : {
        fontSize: 24,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
    },
    userContainer : {
        marginVertical: 40,
    }

});
