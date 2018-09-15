import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {drawer} from './drawer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View>
              <drawer />
            </View>
         );
    }
}
 
export default Main;

