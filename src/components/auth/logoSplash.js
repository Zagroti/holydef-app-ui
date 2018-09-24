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
                   
                    <Image source={require('../../assets/img/logo.png')}  style={{width: 120, height: 120, alignSelf:'center',padding:10}} />
                    <Image source={require('../../assets/img/logotype.png')}  style={{width: 120, height: 100,  resizeMode: 'contain', alignItems:'center'}} />
                </View>

            </View>
         );
    }
}


const styles = StyleSheet.create({
    container:{

    },
    backgroundImage: {
        width: '100%',
        height: '100%',     
  
    },

    logoContainer:{
        alignSelf: 'center',
        justifyContent: 'center',
    }

});
 
export default Logo;