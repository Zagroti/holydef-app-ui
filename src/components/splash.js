import React, { Component } from 'react';
import { View, Text , AsyncStorage, ImageBackground, StyleSheet } from 'react-native';
import colors from '../styles/colors';

import Logo from './auth/logoSplash';
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

            <View style={styles.backGround}>
                <Logo />
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
 
export default Splash;