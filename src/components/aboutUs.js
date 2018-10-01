import React, { Component } from 'react';
import { View , Text, ImageBackground , StyleSheet} from 'react-native';
import LinderUnderMenu from './lineUnderMenu';
import Header from './headerSearch';
import colors from '../styles/colors';





class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ImageBackground source = {require('../assets/img/01.jpg')} blurRadius={30} style={styles.container}>
                
                <Header title="درباره ما" navigation={this.props.navigation} />
                <LinderUnderMenu />

                <View style={styles.boxContainer}>
                    <Text>About us</Text>
                </View>
            </ImageBackground>
         );
    }
}
 



const styles = StyleSheet.create({

    container:{
        flex:1, 
        
    },
    dataContainer:{
        paddingHorizontal: 15,
        
    },
    boxContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginBottom: 12,
        elevation: 2,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    }


    });

export  {AboutUs};