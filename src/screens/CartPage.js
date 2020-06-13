import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { Icon, Footer, FooterTab, Button } from 'native-base';
import { cartItems } from '../common/Data';

export default class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            cartItemsIsLoading: false,
            cartItems,
        }
    }

    deleteHandler = (index) => {
        Alert.alert(
            'Ürünü Sepetinizden Kaldırmak İstediğinize Emin Misiniz?',
            '',
            [
                { text: 'İptal', style: 'cancel' },
                {
                    text: 'Kaldır', onPress: () => {
                        let updatedCart = this.state.cartItems;
                        updatedCart.splice(index, 1);
                        this.setState(updatedCart);
                    }
                },
            ],
            { cancelable: false }
        );
    }

    quantityHandler = (action, index) => {
        const newItems = [...this.state.cartItems];

        let currentQty = newItems[index]['qty'];

        if (action == 'more') {
            newItems[index]['qty'] = currentQty + 1;
        } else if (action == 'less') {
            newItems[index]['qty'] = currentQty > 1 ? currentQty - 1 : 1;
        }

        this.setState({ cartItems: newItems });
    }

    subtotalPrice = () => {
        const { cartItems } = this.state;
        if (cartItems) {
            return cartItems.reduce((sum, item) => sum + (item.qty * item.price), 0);
        }
        return 0;
    }

    render() {

        const { cartItems, cartItemsIsLoading, selectAll } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                {cartItemsIsLoading ? (
                    <View>
                    </View>
                ) : (
                        <ScrollView>
                            {cartItems && cartItems.map((item, i) => (
                                <View key={i} style={styles.mainView}>
                                    <View style={styles.itemMain}>
                                        <TouchableOpacity style={{ paddingRight: 10 }}>
                                            <Image
                                                source={{ uri: item.thumbnailImage }}
                                                style={styles.image} />
                                        </TouchableOpacity>

                                        <View style={styles.specificationView}>
                                            <Text numberOfLines={2}>{item.name}</Text>
                                            <Text numberOfLines={1}>{item.description}</Text>
                                            <Text style={{color:'blue'}}>{item.qty * item.price} TL</Text>

                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity
                                                    onPress={() => this.quantityHandler('less', i)}
                                                    style={styles.quantityRemove}>
                                                    <Icon name="md-remove" />
                                                </TouchableOpacity>

                                                <Text style={styles.quantity}>{item.qty}</Text>
                                                <TouchableOpacity
                                                    onPress={() => this.quantityHandler('more', i)}
                                                    style={styles.quantityAdd}>
                                                    <Icon name="md-add" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={styles.deleteButtonView}>
                                        <TouchableOpacity
                                            onPress={() => this.deleteHandler(i)}
                                            style={styles.deleteButton}>
                                            <Icon name="md-trash" size={25} color="#FF0202" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    )}

                {!cartItemsIsLoading &&
                    <View style={styles.subTotalMainView}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.subTotal}>
                                <View style={styles.subTotalView}>
                                    <Text style={{ color: 'black' }}>Toplam Tutar: </Text>
                                    <Text style={{ color: 'blue' }}>{this.subtotalPrice().toFixed(2)} TL</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.checkOutView}>
                            <TouchableOpacity style={styles.checkoutButton}
                                onPress={() => this.props.navigation.navigate('Sipariş')}>

                                <Text style={styles.checkOutText}>
                                    Siparişi Tamamla
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

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
            </View>

        );
    }
}
const styles = StyleSheet.create({
    centerElement: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
    },
    mainView: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 2,
        height: 120,
    },
    image: {
        height: 100,
        width: 100,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkOutView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 32,
        paddingRight: 20,
        alignItems: 'center'
    },
    checkoutButton: {
        backgroundColor: '#5C68FF',
        width: 200,
        height: 40,
        borderRadius: 7,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkOutText: {
        textAlign: 'center',
        color: '#ffffff'

    },
    subTotalMainView: {
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderColor: '#f6f6f6',
        paddingVertical: 5
    },
    subTotal: {
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subTotalView: {
        flexDirection: 'row',
        paddingRight: 20,
        alignItems: 'center'
    },
    quantity: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 7,
        paddingTop: 3,
        color: 'black',
        fontSize: 25
    },
    quantityAdd: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    },
    quantityRemove: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    },

    deleteButtonView: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
    },
    itemMain: {
        flexDirection: 'row',
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'center'
    },
    specificationView: {
        flexGrow: 1,
        flexShrink: 1,
        alignSelf: 'center'
    }

});
