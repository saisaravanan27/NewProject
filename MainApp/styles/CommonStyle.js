import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    rowcenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowspace: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    centercenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowcentercenter: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    rowcenterspace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowcenteraround: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    rowcenterevenly: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    rowstartspace: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    rowjustifycenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centercentercenter: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    rowend: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    rowcenterstart: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
})