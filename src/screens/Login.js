import React, { Component } from 'react';
import { Text } from 'react-native';
import PhoneSignIn from './PhoneSignIn';
import { Content, Container, Footer, FooterTab, Button, Icon } from 'native-base';


export default class Login extends Component {

    render() {
        return (
            <Container>
                <Content>
                </Content>

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