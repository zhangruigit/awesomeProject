import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';



export default class ShopCar extends Component {

    render() {
        return (
            <View style={styles.flash}>
                <Text>这是ShopCar</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },

});
