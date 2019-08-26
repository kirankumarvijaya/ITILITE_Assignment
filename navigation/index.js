import React from 'react';
import {
    createMaterialTopTabNavigator,
    createAppContainer,
} from 'react-navigation';
import DepartureView from '../views/DepartureView/index';
import ReturnView from '../views/ReturnView/index';
import CustomTabbar from './CustomTabbar';

const TopTabBarConfig = createMaterialTopTabNavigator({
    'Departure Date': DepartureView,
    'Return Date': ReturnView,
},{
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true, 
    tabBarComponent: props => (
        <CustomTabbar {...props}/> 
    ),
});


export default createAppContainer( TopTabBarConfig );