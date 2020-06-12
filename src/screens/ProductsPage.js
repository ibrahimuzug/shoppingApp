import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Content, Container, Footer, FooterTab, Button, Icon, Card, CardItem } from 'native-base';
import { allProducts } from '../common/Data';



export default class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allProducts,

        }
    }

    render() {

        const { allProducts } = this.state;

        return (
            <Container>
                <Content>
                    <View>
                        {allProducts && allProducts.map((pro, i) => (
                            <View key={i} style={styles.mainView}>
                                <Card style={{ flexDirection: 'column', flexGrow: 1, alignSelf: 'center' }}>
                                    
                                    <CardItem button onPress={() => alert("This is Card Header")}>
                                        <Text>{pro.name}</Text>
                                    </CardItem>
                                    <CardItem button onPress={() => alert("This is Card Header")}>
                                        <Text>{pro.description}</Text>
                                    </CardItem>
                                    <CardItem button onPress={() => alert("This is Card Header")}>
                                        <Text>{pro.price} TL</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        ))}

                    </View>
                </Content>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 2,
        height: 120,
    },
});