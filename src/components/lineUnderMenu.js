import React,{Component} from 'react';
import {View, Text,StyleSheet, ImageBackground } from 'react-native';


class Liner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <ImageBackground source={require('../assets/img/toolbar-wire.png')} style={styles.container}>
            
        </ImageBackground> 
        );
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent',
        height: 30,
        width: '100%',
        marginBottom: 10,
        

    }

});
 
export default Liner;