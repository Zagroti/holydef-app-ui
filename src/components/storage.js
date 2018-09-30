import React, { Component } from 'react';
import { View , Text , StyleSheet, TouchableOpacity , TextInput, AsyncStorage} from 'react-native';


class Storage extends Component {
    constructor(props) {
        super(props);
        this.state = {   textInputData : '',
 
        getValue : '' }
    }
componentDidMount(){
    this.getValueLocally();
}

    setValueLocally=()=>{
 
        AsyncStorage.setItem('phoneNumber', this.state.textInputData);
     
        alert("Value Stored Successfully.")
     
      }

      getValueLocally=()=>{

        AsyncStorage.getItem('phoneNumber').then((value) => this.setState({ getValue : value }))
        .then(console.log(this.state.getValue))
        
    
      }





    onPressLearnMore = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    }

    render() { 

        

        return ( 

            <View style={styles.MainContainer}>
 
 
            <TextInput
                   
                   placeholder="Enter Some Text here"
               
                   onChangeText={ data => this.setState({textInputData : data}) }
       
                   underlineColorAndroid='transparent'
               
                   style={styles.TextInputStyle}
                 />
            
            <TouchableOpacity onPress={this.setValueLocally} activeOpacity={0.7} style={styles.button} >
       
                <Text style={styles.buttonText}> SAVE VALUE LOCALLY </Text>
       
            </TouchableOpacity>
       
            <TouchableOpacity onPress={this.getValueLocally} activeOpacity={0.7} style={styles.button} >
       
               <Text style={styles.buttonText}> GET VALUE LOCALLY SAVED </Text>
       
            </TouchableOpacity>
       
            <Text style={styles.text}> { this.state.getValue } </Text>
       
       
            </View>
         );
    }
}
 
 
const styles = StyleSheet.create({
 
MainContainer :{
justifyContent: 'center',
alignItems: 'center',
flex:1,
margin: 10
 
},
 
TextInputStyle:{
 
  textAlign: 'center',
  height: 40,
  width: '100%',
  borderWidth: 1, 
  borderColor: '#028b53',
  borderRadius: 10
},
 
button: {
    
  width: '100%',
  height: 40,
  padding: 10,
  backgroundColor: '#4CAF50',
  borderRadius:7,
  marginTop: 10
},
 
buttonText:{
  color:'#fff',
  textAlign:'center',
},
 
text:{
 
  fontSize: 20,
  textAlign: 'center'
}
 
});


export default Storage;