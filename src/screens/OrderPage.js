import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Container, Content } from 'native-base';

export default class OrderPage extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>
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
    container: {
    },
    content: {
        flex: 1
    },
    button: {
        flex: 0.05,
        alignItems: "center",
        padding: 5,
    }


});