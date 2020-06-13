import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import { Button, Container, Content, Card, CardItem } from 'native-base';

export default class OrderPage extends React.Component {
    render() {
        return (
            <Container>
                <Content>

                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://app.advancingretail.org/sites/default/files/solution_images/order-mgmt.png',
                        }} />

                    <Text style={styles.orderText}>
                        Siparişinizi başarıyla oluşturduk. En kısa zamanda sizlere iletebilmek için çalışıyor olacağız.
                        Bizi tercih ettiğiniz için teşekkür ederiz.
                                </Text>
                </Content>
                <Button block info style={styles.button}
                    onPress={() => this.props.navigation.navigate('Anasayfa')}>
                    <Text>Anasayfaya geri dön</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 0.05,
        alignItems: "center",
        padding: 5,
    },
    image: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.5,
    },
    orderText: {
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.5,
    },
});