import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class Category extends Component {

    render() {
        return (
            <View style={styles.flash}>
                <Text>这是Category</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },

});
