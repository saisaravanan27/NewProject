import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';

import Icon from '../common/Icons';
import ComStyle from '../styles/CommonStyle';

import { AC_AddCount, AC_RemoveCount } from '../reducer/Cart_Reducer/action';

export function ListItem(props) {

    const dispatch = useDispatch();

    const ComIcon = (props) => {
        return <Icon family={'AntDesign'} name={props.name} size={13} color={'#000'} />
    }

    return (
        <View style={styles.container}>
            <View style={{ marginRight: 10, marginTop: 5 }}>
                <Text style={[styles.dinCon, { marginBottom: 8 }]}>N</Text>
                {props.data.cateid == 1 ? <Text style={styles.dinCon}>D</Text> : null}
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14 }}>{props.data.cateName}</Text>
                <Text style={{ fontSize: 11 }}>{props.data.cateDescrip}</Text>
                <View style={ComStyle.rowcenter}>
                    <Icon style={{ paddingRight: 3 }} family={'MaterialIcons'} name={'euro'} size={15} color={'brown'} />
                    <Text style={{ color: 'brown', fontWeight: '600' }}>{props.data.catePrice}</Text>
                </View>
            </View>
            <View style={{ height: 70, justifyContent: 'space-between' }}>
                <View style={styles.addminCon}>
                    <TouchableOpacity style={styles.addminBtn} onPress={() => { dispatch(AC_RemoveCount(props.data.cateid)) }}>
                        {props.count.count > 1 ? <ComIcon name={'minus'} /> : null}
                    </TouchableOpacity>
                    <Text style={{ fontSize: 11 }}>{props.count.count}</Text>
                    <TouchableOpacity style={styles.addminBtn} onPress={() => { dispatch(AC_AddCount(props.data.cateid)) }}>
                        {props.count.count < 20 ? <ComIcon name={'plus'} /> : null}
                    </TouchableOpacity>
                </View>
                {props.screen != 'StartScreen' ?
                    <View style={{ alignItems: 'flex-end' }}>
                        <Icon family={'MaterialCommunityIcons'} name={'message-reply-text'} size={30} color={'#000'} />
                    </View> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10
    },
    dinCon: {
        width: 16, height: 16,
        fontSize: 9,
        textAlign: 'center',
        borderWidth: 0.4,
        borderRadius: 3
    },
    addminCon: {
        width: 80,
        ...ComStyle.rowcenterspace,
        borderWidth: 0.8,
        borderColor: 'brown'
    },
    addminBtn: {
        width: 25, height: 25,
        ...ComStyle.centercenter
    }
})