import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class OrderPage extends React.Component {
    render() {
        return (
            <View>
                <Text>Add friends here!</Text>
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </View>
        );
    }
}