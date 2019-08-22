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
                <TouchableOpacity   >
                        <Icon style={{color: '#fff'}} name='search' />
                </TouchableOpacity>
              </View>
                <View>
                    <Image source={require('../assets/img/logotypew.png')}  style={{width: 120, height: 100,  resizeMode: 'contain', alignItems:'center'}} />  
                </View>
              <View>
                <TouchableOpacity   onPress={this.goBackTo} >
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