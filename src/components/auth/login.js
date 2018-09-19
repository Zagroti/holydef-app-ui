import React, { Component } from 'react';
import { View, Text , StyleSheet, ImageBackground } from 'react-native';

import Logo from './logo';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <ImageBackground source={require('../../assets/img/login.png')} style={ styles.backgroundImage } >

                    <Logo />
                    <View >

                    </View>
               
            </ImageBackground>
         );
    }
}


const styles = StyleSheet.create({
    container:{
        padding: 20,
          

    },
    backgroundImage: {
        width: '100%',
        height: '100%', 
        flex:1,
  
    },

});
 
export default Login;