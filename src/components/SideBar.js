import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, ImageBackground } from 'react-native';
import {  Content,  Icon, Button, Card, CardItem } from 'native-base';
import colors from '../styles/colors';


import normalize  from '../styles/normalizeText';

export default class SideBar extends Component {
  render() {
    return (
          <Content style={{backgroundColor:'#fff'}} >
       
                      <ImageBackground source={require('../assets/img/gradient.png')} style={styles.backgroundImage} >
                            <View style={styles.avatarContainer}>

                            </View>
                      </ImageBackground>
                      <TouchableOpacity style={styles.buttonContainer}>
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>درباره ما</Text>
                                <Icon name='heart' style={{color:colors.themeBackground}} />
                            </View>
                      </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>درباره ما</Text>
                                <Icon name='heart' style={{color:colors.themeBackground}} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>درباره ما</Text>
                                <Icon name='heart' style={{color:colors.themeBackground}} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer}>
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>درباره ما</Text>
                                <Icon name='heart' style={{color:colors.themeBackground}} />
                            </View>
                    </TouchableOpacity>
          
                     

          </Content>
    );
  }
}



const styles= StyleSheet.create({

    buttonContainer:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#fff',
        padding: 20,
        textAlign: 'right', 
        right:0,
        borderWidth: 0.5,
        borderColor: colors.silver, 
        
    },
    textContainer:{
        paddingRight: 40,
        textAlign: 'right', 
        right:0,  
        fontFamily: 'IRANSans', 
        fontSize: normalize(16),
        color: colors.themeBackground,
        

    },
    itemsContainer:{
        flex:1,
        flexDirection: 'row',
        right:0,
        backgroundColor:'#fff',
        justifyContent: 'flex-end',
        alignItems: 'stretch',

    },
    backgroundImage: {
        width: '100%',
        height: 250, 
        alignItems:'center',
        alignSelf: 'center',
        justifyContent:'center',
    },
    avatarContainer:{ 
        backgroundColor: colors.white,
        height:140,
        width:140,
        borderRadius: 100, 

    },
});

module.exports = SideBar;