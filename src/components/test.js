import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
 





 class Test extends Component {
     constructor(props) {
         super(props);
         this.state = { dataSource:[] }
     }


     renderItem = ({item})=>{
     return(
        <View >
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
        </View>
     )
      }

      componentDidMount(){
          const url = 'http://api.holydef.ir/api/v1/category';
          fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
                this.setState({dataSource: responseJson.data});
                console.log(responseJson.data);
          })
          .catch((error) => {
                console.log(error);
          })

      }

     render() { 
         return ( <View>
            
            <FlatList
                data= {this.state.dataSource}
                renderItem={this.renderItem}
                />

         </View> );
     }
 }
  
 export default Test;