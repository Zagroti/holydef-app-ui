import React, { Component } from 'react';
import { View, Text , StyleSheet } from 'react-native';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View>
                <View style={styles.logoContainer}></View>
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
        flex:1,
  
    },

    logoContainer:{
        height:250,
        width:250,
        backgroundColor: 'red',
        alignSelf: 'center',
        justifyContent: 'center',
        top:100,


    }

});
 
export default Logo;