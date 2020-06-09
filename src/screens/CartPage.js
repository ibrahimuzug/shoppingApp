import React from 'react';
import { Text } from 'react-native';
import { Content, Container, Footer, FooterTab, Button, Icon } from 'native-base';


export default class CartPage extends React.Component {
    render() {
        return (
            <Container>
                <Content />
                <Footer>
                    <FooterTab>

                        <Button vertical active
                            onPress={() =>
                                this.props.navigation.navigate('Anasayfa')
                            }>
                            <Icon name="home" />
                        </Button>

                        <Button vertical
                            onPress={() =>
                                this.props.navigation.navigate('Sepetim')
                            }>
                            <Icon name="cart" />
                        </Button>

                        <Button vertical active
                            onPress={() =>
                                this.props.navigation.navigate('Giris')
                            }>
                            <Icon name="person" />
                        </Button>

                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}