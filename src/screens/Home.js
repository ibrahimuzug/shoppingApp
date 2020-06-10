import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Container, Footer, FooterTab, Icon, Button } from 'native-base';

export default class Home extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <Content >

                </Content>
                <TouchableOpacity style={styles.button}>
                    <Button
                        onPress={() =>
                            this.props.navigation.navigate('Ürünler')
                        }>
                        <Text>Tümünü Göster</Text>
                    </Button>
                </TouchableOpacity>
                <Footer>
                    <FooterTab>
                        <Button vertical active
                            onPress={() =>
                                this.props.navigation.navigate('Anasayfa')
                            }>
                            <Icon name="home" />
                        </Button>
                        <Button vertical active
                            onPress={() =>
                                this.props.navigation.navigate('Sepetim')
                            }>
                            <Icon name="cart" />
                        </Button>
                        <Button vertical active
                            onPress={() =>
                                this.props.navigation.navigate('Giriş')
                            }>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
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
        borderRadius: 50,
    }


});