/**
 *  Class: Root
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
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux'
import AppNavigator from '../common/navigation/AppNavigator';

class Root extends Component<{}> {
    render() {
        return (
            <AppNavigator
                navigation = {addNavigationHelpers({
                    dispatch:this.props.dispatch,
                    state:this.props.nav
                })}
            />
        );
    }
}
const mapStateToProps = (state)=>({
    nav:state.NavReducer,
})
export default AppWithNavigationState = connect(mapStateToProps)(Root);