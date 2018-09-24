import React, {Component} from 'react';
import { View , Text, StyleSheet, TouchableOpacity, Platform , Image} from 'react-native';
import { Icon } from 'native-base';

import colors from '../styles/colors';
import normalize from '../styles/normalizeText';



class Header extends Component {
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
              <View>
                <TouchableOpacity transparent >
                        <Icon name='search' />
                </TouchableOpacity>
              </View>
                <View>
                    <Image source={require('../assets/img/logotype.png')}  style={{width: 120, height: 100,  resizeMode: 'contain', alignItems:'center'}} />  
                </View>
              <View>
                <TouchableOpacity transparent onPress={this.goBackTo} >
                        <Icon name='arrow-forward' />
                </TouchableOpacity>
              </View>
            </View>
         );
    }
}


const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.transparent,
        height: 60,
        padding: 20,
        alignItems: 'center',
    
    },
    titleStyling:{
        fontFamily: 'IRANSans', 
        fontSize: Platform.os === 'ios' ? normalize(18) : normalize(20),


    }
})
 
export default Header;