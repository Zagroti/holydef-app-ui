import React, {Component} from 'react';
import { View , Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Icon } from 'native-base';

import colors from '../styles/colors';
import normalize from '../styles/normalizeText';



class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    goBackTo =() =>{ 
        this.props.navigation.goBack();
    }


    render() { 




      
        return ( 

            <View style={styles.container}>
         
              <View style={styles.boxTitle}><Text style={styles.titleStyling}>{this.props.title}</Text></View>
              <View>
                <TouchableOpacity transparent onPress={this.goBackTo} >
                        <Icon style={{color: '#fff'}} name='arrow-forward' />
                </TouchableOpacity>
              </View>
            </View>
         );
    }
}


const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: colors.transparent,
        height: 60,
        padding: 20,
        alignItems: 'center',
    
    },
    titleStyling:{
        color:colors.white,
        fontFamily: 'iranyekanbold', 
        fontSize: Platform.os === 'ios' ? normalize(18) : normalize(20),
    },
    boxTitle:{
        paddingHorizontal: 20,
        
    }
})
 
export default HeaderSearch;