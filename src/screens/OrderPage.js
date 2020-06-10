import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';

export default class OrderPage extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Siparişinizi başarıyla oluşturduk. En kısa zamanda sizlere iletebilmek için çalışıyor olacağız.
                    Bizi tercih ettiğiniz için teşekkür ederiz.
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Anasayfa')}>
                    <Text>Anasayfa</Text>
                </Button>
            </View>
        );
    }
}