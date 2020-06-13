import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
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
            <Container>
                <Content >
                    <ScrollView>
                        <View style={styles.container}>
                            {categories && categories.map((cat, i) => {
                                return (
                                    <TouchableOpacity
                                        key={i}
                                        style={styles.item}
                                        onPress={() =>
                                            this.props.navigation.navigate('Ürünler')
                                        }
                                    >
                                        <Image
                                            style={styles.itemIcon}
                                            source={{ uri: cat.thumbnailImage }}
                                        />
                                        <Text style={styles.itemTitle}>
                                            {cat.name}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                            }
                        </View>
                    </ScrollView>
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
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    content: {
        flex: 1,
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
    },
    item: {
        width: Dimensions.get('window').width * 0.3333,
        height: 200,
        borderWidth: 1,
        borderColor: "lightgray",
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemIcon: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    itemTitle: {
        marginTop: 15,
    },


});