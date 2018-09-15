import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Carousel from "react-native-carousel-control";

export default class App extends Component  {



render () {

 
      this.state={ pageNumber: 300 }
 

    return (
      <Carousel pageWidth={ this.state.pageNumber } >
          <Text style={styles.slide1}>Hello</Text>
          <Text style={styles.slide2}>World!</Text>
          <Text style={styles.slide3}>From carousel</Text>
          
      </Carousel> 
    );
}

}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    height: 500,
    textAlign: 'center',  

  },
  slide2: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    height: 500,
    textAlign: 'center',

  },
  slide3: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    height: 500,
    textAlign: 'center',

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})