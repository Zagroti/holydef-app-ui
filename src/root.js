import React from 'react';
import { createStackNavigator  } from 'react-navigation';
import { Platform } from 'react-native';
import colors from './styles/colors';



import MainScreen from './components/main';
import TestScreen from './components/test';
import DrawerScreen from './components/drawer';
import CarouselScreen  from './components/Carousel';



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



  

  const RootStack = createStackNavigator({

    Main : {screen : MainScreen},
    Test : {screen : TestScreen},
    Drawer : {screen : DrawerScreen},
    Carousel : {screen : CarouselScreen},

},
{
    //  initialRouteName : 'Auth',
    initialRouteName : 'Drawer',
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