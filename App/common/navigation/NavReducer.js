/**
 *  Class: NavReducer
 *  Author: xyl
 *  Date: 2018/1/29.
 *  Description:
 */

import StackNav from './AppNavigator';
const NavReducer = (state,action)=>{
    let nextState;
    nextState = StackNav.router.getStateForAction(action,state);
    return nextState || state;
}
export default NavReducer;
