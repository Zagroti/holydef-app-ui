import React, { Component } from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';


class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/img/logo.png')}  style={{width: 250, height: 250}} />
                </View>

            </View>
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
  
    },

    logoContainer:{
        height:250,
        width:250,
        backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
    }

});
 
export default Logo;