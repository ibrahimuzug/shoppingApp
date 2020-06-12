import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';



export default class CartPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            selectAll: false,
            cartItemsIsLoading: false,
            cartItems: [
                /* Sample data from walmart */
                { itemId: "501436323", name: "Oyuncak Yarış Arabası", thumbnailImage: "https://i5.walmartimages.com/asr/a3922e8e-2128-4603-ba8c-b58d1333253b_1.44d66337098c1db8fed9abe2ff4b57ce.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", color: "Red", qty: 1, salePrice: "105" },
                { itemId: "35031861", name: "Çift Kişilik Ranza", thumbnailImage: "https://i5.walmartimages.com/asr/4aedb609-4b61-4593-ad8a-cdc8c88696b1_1.3f505ce3d55db4745cf4c51d559994dc.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Green", salePrice: "199" },
                { itemId: "801099131", name: "LEGO Star Wars 2019 Takımı", thumbnailImage: "https://i5.walmartimages.com/asr/9a8ea1ab-311d-455c-bda8-ce15692a8185_3.208d48e0260f80891d32b351cb116a4b.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Blue", salePrice: "27.99" },
                { itemId: "42608079", name: "Süper Kaliteli Oyunevi", thumbnailImage: "https://i5.walmartimages.com/asr/2654cd64-1471-44af-8b0c-1debaf598cb3_1.c30c481d1ac8fdd6aa041c0690d7214c.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", color: "Purple", qty: 1, salePrice: "129.99" },
                { itemId: "247714372", name: "HP 14\" 14-DQ1038wm Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, ", thumbnailImage: "https://i5.walmartimages.com/asr/b442f6e7-c5e1-4387-9cd9-9205811d4980_1.82b94d1c11dd12a6697bc517219f331e.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF", qty: 1, color: "Black", salePrice: "269" }
            ]
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
            return cartItems.reduce((sum, item) => sum + (item.qty * item.salePrice), 0);
        }
        return 0;
    }



    render() {

        const { cartItems, cartItemsIsLoading } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10 }}>
                </View>


                {cartItemsIsLoading ? (
                    <View>
                    </View>
                ) : (
                        <ScrollView>
                            {cartItems && cartItems.map((item, i) => (
                                <View key={i} style={styles.mainView}>
                                    <View style={{ flexDirection: 'row', flexGrow: 1, flexShrink: 1, alignSelf: 'center' }}>
                                        <View>
                                            <Text>{item.name}</Text>
                                            <Text >{item.color ? 'Özellik: ' + item.color : ''}</Text>
                                            <Text>{item.qty * item.salePrice} TL</Text>
                                        </View>
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
                                    <Text style={{ color: '#8f8f8f' }}>Toplam Tutar: </Text>
                                    <Text>{this.subtotalPrice().toFixed(2)} TL</Text>
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
        height: 60,
        width: 60,
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
        borderColor: '#cccccc',
        paddingHorizontal: 7,
        paddingTop: 3,
        color: '#bbbbbb',
        fontSize: 13
    },
    quantityAdd: {
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    quantityRemove: {
        borderWidth: 1,
        borderColor: '#cccccc'
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
    }

});