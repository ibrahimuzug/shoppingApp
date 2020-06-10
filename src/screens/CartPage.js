import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Container, Footer, FooterTab, Button, Icon, Card, CardItem } from 'native-base';


export default class CartPage extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>

                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text>Bu ilk ürün</Text>
                        </CardItem>
                    </Card>
                
                </Content>

                <TouchableOpacity style={styles.button}>
                    <Button
                        onPress={() =>
                            this.props.navigation.navigate('Sipariş')
                        }>
                        <Text>Sepeti Onayla</Text>
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
        padding: 10,
        borderRadius: 50,

    }
});