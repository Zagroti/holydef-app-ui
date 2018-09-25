import React, {Component} from 'react';
import { View , Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Icon , Left} from 'native-base';

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
    _openViewPage(id,catId){
        console.log(id);
        this.props.navigation.navigate('Video', {articleId:id, categoryId: catId});

    }

    render() { 




      
        return ( 

            <View style={styles.container}>
     
            <Left style={{flexDirection:'row'}}>
                <View style={{paddingLeft:2}}>
                    <TouchableOpacity transparent onPress={this.goBackTo} >
                        <Icon style={{color: '#fff'}} name='share' />
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:15}}>
                    <TouchableOpacity transparent onPress={this.goBackTo} >
                        <Icon style={{color: '#fff'}} name='heart' />
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:15}}>
                    <TouchableOpacity transparent onPress={ () => this._openViewPage(this.props.catid, this.props.id)} >
                        <Icon style={{color: '#fff'}} name='videocam' />
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:15}}>
                    <TouchableOpacity transparent onPress={this.goBackTo} >
                        <Icon style={{color: '#fff'}} name='volume-up' />
                    </TouchableOpacity>
                </View>
            </Left>
         
              <View><Text style={styles.titleStyling}>  </Text></View>
              <View>
                <TouchableOpacity transparent onPress={this.goBackTo} >
                    <Icon style={{color: '#fff'}} name='arrow-forward'   />
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
 
export default HeaderSearch;