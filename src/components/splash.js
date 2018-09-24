import React, { Component } from 'react';
import { View, Text , AsyncStorage, ImageBackground, StyleSheet, Platform } from 'react-native';
import colors from '../styles/colors';
import SplashScreen from 'react-native-splash-screen';

import Logo from './auth/logoSplash';



export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }




    _loadInitialState = async () => {
        try {
          let value = await AsyncStorage.getItem('phoneNumber');
            if (value.length < 11 && value != ""){
                this.props.navigation.navigate('Login')
            } else {
                this.props.navigation.navigate('Main')
            }
        } catch (error) {
               console.log(error);
               this.props.navigation.navigate('Login')
        }
      };
      componentWillMount() {
        if (Platform.OS !== 'ios')
        SplashScreen.hide();
        this._loadInitialState().done();
      }



    render() { 
        return ( 

            <View style={styles.backGround}>
               
            </View>
             
         );
    }
}



const styles = StyleSheet.create({
   

    backGround:{
        backgroundColor: '#444',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        

    }

}) 