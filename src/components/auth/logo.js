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
                    <Image source={require('../../assets/img/logotype.png')}  style={{width: 200, height: 100,  resizeMode: 'contain', alignItems:'center'}} />
                    <Image source={require('../../assets/img/logo.png')}  style={{width: 200, height: 200}} />
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
        height:300,  
        alignSelf: 'center',
        justifyContent: 'center',
    }

});
 
export default Logo;