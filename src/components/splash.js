import React, { Component } from 'react';
import { View, Text , AsyncStorage, ImageBackground, StyleSheet } from 'react-native';

import Logo from './auth/logo';
class Splash extends Component {
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

        this._loadInitialState().done();
      }



    render() { 
        return ( 

            <ImageBackground source={require('../assets/img/main-bg.jpg')} style={ styles.backgroundImage } >
               <Logo />
            </ImageBackground>
         );
    }
}



const styles = StyleSheet.create({
    container:{ 
        flex:1, 
        alignItems: 'center', 

    },
    containerForm:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    backgroundImage: {
        width: '100%',
        height: '100%', 
        flex:1, 
  
    },

})
 
export default Splash;