import React from 'react';
import { StackNavigator  } from 'react-navigation';
import { Platform } from 'react-native';
import colors from './styles/colors';



import LoginScreen  from './components/auth/login';
import ActivityScreen  from './components/auth/activity';

import MainScreen from './components/main';
import CarouselScreen  from './components/Carousel';
import DataScreen  from './components/data';

import TestScreen from './components/test';
import DrawerScreen from './components/drawer';





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

    Login : { screen : LoginScreen},
    Activity : { screen : ActivityScreen},

    Main : {screen : MainScreen},
    Carousel : {screen : CarouselScreen},
    Data : {screen : DataScreen},

    Test : {screen : TestScreen},
    Drawer : {screen : DrawerScreen},

},
{
    //  initialRouteName : 'Auth',
    initialRouteName : 'Login',
    headerMode: 'none'

}) 


//
// export App from root stack
//

export default class Root  extends React.Component{

    // componentDidMount() {
    //     if (Platform.OS !== 'ios') SplashAuto.hide();
    //     console.disableYellowBox = true
    //   }


    render(){
        return(

            <RootStack />
        );
    }
}