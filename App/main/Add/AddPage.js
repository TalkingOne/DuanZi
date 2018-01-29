/**
 *  Class: AddPage
 *  Author: xyl
 *  Date: 2018/1/29.
 *  Description:
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class AddPage extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    AddPage
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
