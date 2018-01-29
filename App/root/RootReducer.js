/**
 *  Class: RootReducer
 *  Author: xyl
 *  Date: 2018/1/29.
 *  Description:
 */
import React, {Component} from 'react';
import { combineReducers } from 'redux';
import NavReducer from '../common/navigation/NavReducer';

const RootReducer = combineReducers({
    NavReducer
})
export default RootReducer;