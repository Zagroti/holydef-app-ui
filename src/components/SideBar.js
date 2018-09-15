import React, { Component } from 'react';
 import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
import {  Content,  Icon, Button, Card, CardItem } from 'native-base';

export default class SideBar extends Component {
  render() {
    return (
          <Content style={{backgroundColor:'#fff'}} >
       
                      
                      <TouchableOpacity style={styles.buttonContainer}>
                          <Text style={styles.textContainer}>ssssdsd</Text>
                          <Icon name='heart' />
                      </TouchableOpacity>
                     

          </Content>
    );
  }
}



const styles= StyleSheet.create({

    buttonContainer:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#ccc',
        padding: 20,
        textAlign: 'right', 
        right:0, 

        
    },
    textContainer:{
        paddingHorizontal: 10,
        textAlign: 'right', 
        right:0,
        backgroundColor:'#eee'
    }
});

module.exports = SideBar;