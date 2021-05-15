import React, { useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';

import Icon from '../common/Icons';
import ComStyle from "../styles/CommonStyle";

import { useSelector } from 'react-redux';

import { ListItem } from '../common/ListItem';

export default MyCartScreen = () => {

    const [textShown, setTextShown] = useState(false);
    const [lengthMore, setLengthMore] = useState(false);
    const toggleNumberOfLines = () => {
        setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 4);
    }, []);


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
            <ListItem data={productData} count={cartItem} screen={'MyCartScreen'} />
        )
    }

    var totcount = 0;
    var cart = CartState.cartItems;
    cart.map(item => {
        if (item.count > 0) {
            totcount += item.count;
        }
    })

    var totmount = 7 * totcount

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <View style={styles.totoverCon}>
                <View style={styles.totCon}>
                    <Text style={styles.totTxt}>Total Cost</Text>
                    <View style={[ComStyle.rowcenter, { paddingTop: 6 }]}>
                        <Icon family={'MaterialIcons'} name={'euro'} size={20} color={'#000'} />
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>{totmount}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 5 }}>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.sectionTxt}>Review Orders</Text>
                        <View>
                            <FlatList
                                initialNumToRender={2}
                                data={CartState.cartItems}
                                renderItem={(data) => _ListData(data)}
                            />
                        </View>
                        {CartState.cartItems.length > 2 ?
                            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ fontSize: 14, textDecorationLine: 'underline' }}>Show More</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 14, textDecorationLine: 'underline' }}>Show Less</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.sectionTxt}>Delivery Options</Text>
                        <View style={{ ...ComStyle.rowcenteraround }}>
                            <View style={ComStyle.rowcenter}>
                                <Icon style={{ paddingRight: 15 }} family={'MaterialCommunityIcons'} name={'silverware-fork-knife'} size={20} color={'#000'} />
                                <Text>Dine-In</Text>
                            </View>
                            <View style={ComStyle.rowcenter}>
                                <Icon style={{ paddingRight: 15 }} family={'MaterialCommunityIcons'} name={'car-hatchback'} size={25} color={'#000'} />
                                <Text>Take Way</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.orderBtnCon}>
                <Text style={styles.orderBtnTxt}>PLACE ORDER</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    totoverCon: {
        flex: 1.3,
        backgroundColor: '#1b476d',
        ...ComStyle.centercenter
    },
    totCon: {
        top: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 50, paddingVertical: 13,
        borderRadius: 10,
    },
    totTxt: {
        fontSize: 12,
        color: 'brown',
        textAlign: 'center'
    },
    sectionTxt: {
        fontSize: 14,
        fontWeight: '700',
        paddingVertical: 20
    },
    orderBtnCon: {
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        backgroundColor: '#1b476d',
        alignItems: 'center',
        paddingVertical: 15
    },
    orderBtnTxt: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '700'
    }
})