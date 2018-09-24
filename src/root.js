import React from 'react';
import { StackNavigator  } from 'react-navigation';
import { Platform, AsyncStorage } from 'react-native';
import colors from './styles/colors';
import SplashAuto from 'react-native-splash-screen';


import SplashScreen  from './components/splash';
import LoginScreen  from './components/auth/login';
import ActivityScreen  from './components/auth/activity';

import MainScreen from './components/main';
import CarouselScreen  from './components/Carousel';
import CategoryScreen  from './components/category';
import DataScreen  from './components/data';
import SearchScreen  from './components/search';

import TestScreen from './components/test';
import DrawerScreen from './components/drawer';
import StorageScreen from './components/storage';





const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: 'red',
      position: 'absolute',
      borderBottomWidth: 2,
      zIndex: 100,
      elevation: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    headerTintColor: colors.white,
  }

 
  

  const RootStack = StackNavigator({

    Splash : { screen : SplashScreen},
    Login : { screen : LoginScreen},
    Activity : { screen : ActivityScreen},

    Main : {screen : MainScreen},
    Carousel : {screen : CarouselScreen},
    Category : {screen : CategoryScreen},
    Data : {screen : DataScreen},
    Search : {screen : SearchScreen},

    Test : {screen : TestScreen},
    Drawer : {screen : DrawerScreen},
    Storage : {screen : StorageScreen},

},
{
    // initialRouteName : 'Storage',
    initialRouteName : 'Splash',
    headerMode: 'none'

}) 


//
// export App from root stack
//

export default class Root  extends React.Component{
 


    componentDidMount() {
        if (Platform.OS !== 'ios') SplashAuto.hide();
        console.disableYellowBox = true
      }

  


    render(){
        return(

             
            <RootStack  />
        );
    }
}