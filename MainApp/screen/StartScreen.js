import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

import Icon from '../common/Icons';
import ComStyle from '../styles/CommonStyle';

import { ListItem } from '../common/ListItem';

import { useNavigation, StackActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default StartScreen = () => {

    const navigation = useNavigation();

    const GoToScreen = (route) => {
        navigation.dispatch(
            StackActions.push(route)
        )
    }

    const ProductsState = useSelector((state) => state.ProductsState);
    const CartState = useSelector((state) => state.CartState);

    const _ListData = (rowData) => {
        var cartItem = rowData.item;
        var products = ProductsState.Products;
        var productData = {};
        products.map(item => {
            if (cartItem.productid == item.cateid) {
                productData = item;
            }
        });

        return (
            <ListItem data={productData} count={cartItem} screen={'StartScreen'} />
        )
    }

    var totcount = 0;
    var cart = CartState.cartItems;
    cart.map(item => {
        if (item.count > 0) {
            totcount += item.count;
        }
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={{ flex: 1.5 }}>
                <ImageBackground style={styles.imgSty} source={require('../assets/img/res.jpg')}>
                    <View style={{ ...ComStyle.rowcenterspace, marginHorizontal: 10 }}>
                        <View style={{ padding: 10 }}>
                            <Icon family={'AntDesign'} name={'arrowleft'} size={23} color={'#FFF'} />
                        </View>
                        <View style={ComStyle.rowcenter}>
                            <TouchableOpacity style={{ marginHorizontal: 2 }}>
                                <Icon style={{ padding: 10 }} family={'AntDesign'} name={'upload'} size={20} color={'#eaeaea'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 2 }}>
                                <Icon style={{ padding: 10 }} family={'AntDesign'} name={'infocirlceo'} size={20} color={'#FFF'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.infoCon}>
                    <Text style={styles.resTxt}>Inka Restaurant</Text>
                    <View style={styles.resaddTxtCon}>
                        <View style={ComStyle.rowcenter}>
                            <Icon style={{ paddingRight: 10 }} family={'SimpleLineIcons'} name={'star'} size={13} color={'#000'} />
                            <Text style={styles.resaddTxt}>5.0(200+) | All days: 09:00 AM - 06:00 PM</Text>
                        </View>
                        <View style={ComStyle.rowcenter}>
                            <Icon style={{ paddingRight: 10 }} family={'Feather'} name={'phone-call'} size={13} color={'#000'} />
                            <Text style={styles.resaddTxt}>Reach us at : 9854562142</Text>
                        </View>
                    </View>
                    <View style={styles.bookCon}>
                        <Text style={styles.bookTxt}>BOOK A TABLE</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 2, paddingHorizontal: 10 }}>
                <View>
                    <Text style={styles.sectionTxt}>Starter</Text>
                    <FlatList
                        data={CartState.cartItems}
                        renderItem={(data) => _ListData(data)}
                    />
                </View>
            </View>
            <View style={styles.menuBtnCon}>
                <Icon style={{ paddingRight: 8 }} family={'MaterialCommunityIcons'} name={'silverware-fork-knife'} size={18} color={'#000'} />
                <Text style={{ fontSize: 13, color: '#000' }}>MENU</Text>
            </View>
            <TouchableOpacity style={styles.cartBtnCon} onPress={() => GoToScreen('MyCartScreen')}>
                <Icon style={{ paddingRight: 15 }} family={'Ionicons'} name={'cart-outline'} size={23} color={'#FFF'} />
                <Text style={{ color: '#FFF' }}>VIEW CART ({totcount} ITEMS)</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imgSty: {
        width: null, height: 210,
        resizeMode: 'contain'
    },
    resTxt: {
        color: '#1b476d',
        fontSize: 17,
        fontWeight: '700'
    },
    resaddTxtCon: {
        alignItems: 'center',
        height: 43,
        justifyContent: 'space-between'
    },
    resaddTxt: {
        fontSize: 12,
        color: '#000'
    },
    sectionTxt: {
        fontSize: 14,
        fontWeight: '700',
        paddingBottom: 20
    },
    infoCon: {
        position: 'absolute',
        top: 130,
        borderRadius: 5,
        height: 160,
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 35, paddingVertical: 10,
        elevation: 5,
    },
    bookTxt: {
        backgroundColor: '#1b476d',
        padding: 7, paddingHorizontal: 18,
        borderRadius: 10,
        color: '#FFF', fontSize: 11
    },
    btnCon: {
        left: 0, right: 0,
        paddingVertical: 10,
        backgroundColor: 'red',
        ...ComStyle.centercenter
    },
    menuBtnCon: {
        position: 'absolute',
        bottom: 65, alignSelf: 'center',
        backgroundColor: '#ffc58e',
        ...ComStyle.rowcenter,
        justifyContent: 'center',
        padding: 5, paddingHorizontal: 15,
        borderRadius: 10
    },
    cartBtnCon: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        backgroundColor: '#1b476d',
        ...ComStyle.rowcenter,
        justifyContent: 'center',
        paddingVertical: 12
    }
})