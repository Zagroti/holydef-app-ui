import React, { Component } from 'react';
import { View , Text, StyleSheet , Platform, TouchableOpacity } from 'react-native';
import Button from './touchable/button';
//
//
//
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';
import LinderUnderMenu from './lineUnderMenu';


//
// import component
//
import Header from './header';


class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    gotopage = () => {
        alert("ww");
        this.props.navigation.navigate('Main');

        
    }

    render() { 



        return ( 

            <View style={styles.container}>

            <Header navigation={this.props.navigation} />
            <LinderUnderMenu />
          
            </View>
         );
    }
}



const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: colors.red,

    }
})
 
export default Data;