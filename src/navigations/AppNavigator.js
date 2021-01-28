import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GenOne from '../views/gen-1';
import Search from '../views/search';

import SplashScreen from '../views/splash-screen';
import Main from '../views/main';

const Generation = createStackNavigator({
    GenOne: { screen: GenOne },
}, {
    headerMode: 'none',
    initialRouteName: 'GenOne',
});

const AppNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    Search: { screen: Search },
    Main: { screen: Main },
    Generation: { screen: Generation },
}, {
    headerMode: 'none',
    initialRouteName: 'Search',
});

const InitialNavigator = createStackNavigator({
    Auth: AppNavigator,
   // Bottom: TabBottomNavigator,
},{
    headerMode: 'none',
    headerShown: false,
    initialRouteName: 'Auth',
});

export default createAppContainer(InitialNavigator);