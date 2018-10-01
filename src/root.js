import React from 'react';
import { StackNavigator  } from 'react-navigation';
import { Platform, AsyncStorage } from 'react-native';
import colors from './styles/colors';
import SplashAuto from 'react-native-splash-screen';

import { Search, SideBar, Main , AboutUs, Favorite} from './components/index';

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
// import SidbarScreen from './components/SideBar';
import StorageScreen from './components/storage';


import VideoScreen from './components/videoPlayer';
import SoundScreen from './components/soundPlayer';





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

    Splash :   { screen : SplashScreen},
    Login :    { screen : LoginScreen},
    Activity : { screen : ActivityScreen},

    Main :     {screen : Main},
    Carousel : {screen : CarouselScreen},
    Category : {screen : CategoryScreen},
    Data :     {screen : DataScreen},
    Search :   {screen : Search},

    Test :     {screen : TestScreen},
    Drawer :   {screen : DrawerScreen},
    SideBar :   {screen : SideBar},
    Storage :  {screen : StorageScreen},

    Video :    {screen : VideoScreen},
    Sound :    {screen : SoundScreen},

    AboutUs :    {screen : AboutUs},
    Favorite :    {screen : Favorite},

},
{
    // initialRouteName : 'Search',
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