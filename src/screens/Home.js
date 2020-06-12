import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Container, Footer, FooterTab, Icon, Button, Card, CardItem, View } from 'native-base';
import { categories } from '../common/Data';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories,

        }
    }

    render() {

        const { categories } = this.state;
        return (
            <Container style={styles.container}>
                <Content >
                    <View style={styles.content}>
                        {categories && categories.map((cat, i) => (
                            <View key={i}>
                                <Card>
                                    <CardItem header button onPress={() =>
                                        this.props.navigation.navigate('Ürünler')
                                    }>
                                        <Text>{cat.name}</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        ))}

                    </View>
                </Content>
                <TouchableOpacity style={styles.button}>
                    <Button block info
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'space-between',
        justifyContent: 'space-around'
    },
    button: {
        flex: 0.05,
        alignItems: "center",
        padding: 10,
    }


});