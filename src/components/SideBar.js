import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, ImageBackground, Image, BackAndroid } from 'react-native';
import {  Content,  Icon, Button, Card, CardItem } from 'native-base';
import colors from '../styles/colors';


import normalize  from '../styles/normalizeText';

 class SideBar extends Component {

    constructor(props) {
        super(props)
        
      }
    gotoHome  (){
        //const {navigation} = this.props;
        // this.props.navigation.navigate('Main')
    }

    closeDrawer() {
        
      }
  render() {
   
    
    return (
          <Content style={{backgroundColor:'#fff'}} >
       
                      <ImageBackground source={require('../assets/img/gradient.png')} style={styles.backgroundImage} >
                            <View style={styles.avatarContainer}>
                                <Image source={require('../assets/img/user.png')} style={{height:80, width:80, alignSelf:'center', justifyContent:'center' }}  />
                            </View>
                      </ImageBackground>

                 

                      <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigate('Main'); this.props.closeDrawer();}} >
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>صفحه اول</Text>
                                <Icon name='home' style={{color:colors.themeBackground}} />
                            </View>
                      </TouchableOpacity>


                      <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigate('Favorite');this.props.closeDrawer();}} >
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>لیست علاقمندی</Text>
                                <Icon name='heart' style={{color:colors.themeBackground}} />
                            </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigate('Search');this.props.closeDrawer();}}>
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>جستجو </Text>
                                <Icon name='search' style={{color:colors.themeBackground}} />
                            </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonContainer} onPress={() => {this.props.navigate('AboutUs');this.props.closeDrawer();}} >
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>درباره ما</Text>
                                <Icon name='information-circle' style={{color:colors.themeBackground}} />
                            </View>
                      </TouchableOpacity>


                       <TouchableOpacity style={styles.buttonContainer} onPress={ () => BackAndroid.exitApp()}>
                            <View style={styles.itemsContainer}>
                                <Text style={styles.textContainer}>خروج از برنامه</Text>
                                <Icon name='exit' style={{color:colors.themeBackground}} />
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
        padding: 15,
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
        justifyContent:'center',

    },
});

export  {SideBar};