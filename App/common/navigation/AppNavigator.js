/**
 *  Class: AppNavigator
 *  Author: xyl
 *  Date: 2018/1/29.
 *  Description:
 */
import React from 'react';
import {StackNavigator,TabNavigator,addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux';
import DiscoverPage from '../../main/Discover/DiscoverPage';
import HomePage from "../../main/Home/HomePage";
import AddPage from "../../main/Add/AddPage";
import ShowPage from "../../main/Show/ShowPage";
import MinePage from "../../main/Mine/MinePage";
import Ionicons from 'react-native-vector-icons/Ionicons'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
const TabNav = TabNavigator(
    {
        HomePage:{
            screen:HomePage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'首页',
                tabBarIcon:({focused,tintColor})=>(
                        <Ionicons
                            name = {focused?'ios-home':'ios-home-outline'}
                            size={28}
                            style={{color:tintColor}}
                        />
                )
            })
        },
        ShowPage:{
            screen:ShowPage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'段友秀',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name = {focused?'ios-apps':'ios-apps-outline'}
                        size={28}
                        style={{color:tintColor}}
                    />
                )
            })
        },
        AddPage:{
            screen:AddPage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'发贴',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name = {focused?'ios-add-circle':'ios-add-circle-outline'}
                        size={28}
                        style={{color:tintColor}}
                    />
                )
            })
        },
        DiscoverPage:{
            screen:DiscoverPage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'发现',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name = {focused?'ios-planet':'ios-planet-outline'}
                        size={28}
                        style={{color:tintColor}}
                    />
                )
            })

        },
        MinePage:{
            screen:MinePage,
            navigationOptions:({navigation})=>({
                tabBarLabel:'我的',
                tabBarIcon:({focused,tintColor})=>(
                    <Ionicons
                        name = {focused?'ios-person':'ios-person-outline'}
                        size={28}
                        style={{color:tintColor}}
                    />
                )
            })
        }
    },
    {
        tabBarPosition:'bottom',
        tabBarOptions: {
            activeTintColor: '#FF95CA',
            inactiveTintColor: '#4F4F4F',
        }

    }
)
const StackNav = StackNavigator(
    {
        Tab:{screen:TabNav}
    },
    {
        initialRouteName:'Tab'
    }
)
export default  StackNav;



