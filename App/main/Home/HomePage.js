/**
 *  Class: HomePage
 *  Author: xyl
 *  Date: 2018/1/29.
 *  Description:
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import  {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
export default class HomePage extends Component<{}> {
    static navigationOptions = ({navigation})=>({
        header:null,
    })
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    HomePage
                </Text>
                <Button
                    onPress={()=>{
                        this.props.navigation.dispatch(NavigationActions.navigate({routeName:'DetailPage'}))
                    }}
                    title={'跳转'}
                />
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