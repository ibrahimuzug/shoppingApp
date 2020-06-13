import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Content, Container, Footer, FooterTab, Button, Icon, Card, CardItem } from 'native-base';
import { allProducts } from '../common/Data';

export default class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allProducts,

        }
    }

    quantityHandler = (action, index) => {
        const newItems = [...this.state.allProducts];

        let currentQty = newItems[index]['qty'];

        if (action == 'more') {
            newItems[index]['qty'] = currentQty + 1;
        } else if (action == 'less') {
            newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
        }

        this.setState({ allProducts: newItems });
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
                                    <CardItem>
                                        <TouchableOpacity>
                                            <Image
                                                source={{ uri: allProducts.thumbnailImage }}
                                                style={styles.image} />
                                        </TouchableOpacity>
                                        <View>
                                            <Text style={styles.productText}>{pro.name} {"\n"} {pro.description}
                                                {"\n"}{"\n"}{pro.price} TL</Text>
                                        </View>

                                        <View >
                                            <TouchableOpacity>
                                                <Button style={styles.addCartButton}
                                                    block info
                                                    onPress={() => alert("Ürününüz Sepete Eklendi")}>
                                                    <Text>Sepete Ekle</Text>
                                                </Button>
                                            </TouchableOpacity>
                                        </View>
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
    image: {
        height: 70,
        width: 70,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productText: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    quantityAdd: {
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    quantityRemove: {
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    addCartButton: {
        width: 90,
        height: 40,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});