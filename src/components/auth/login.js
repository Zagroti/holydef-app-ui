import React, { Component } from 'react';
import { View , StyleSheet, ImageBackground, TextInput , TouchableOpacity, Text} from 'react-native';
import colors from '../../styles/colors';

import Logo from './logo';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <ImageBackground source={require('../../assets/img/login.png')} style={ styles.backgroundImage } >

                 
                <View style={styles.container}>
               
                    <View style={styles.formControler}>
                        <Logo />
                    </View>

                    <View style={styles.formControler}>
                        <TextInput>لطفا جهت ورود به برنامه شماره همراه خود را وارد نماپید.</TextInput>
                  
                    </View>

                    <View style={styles.formControler}>
                        <TextInput>wewewe</TextInput>
                        <TextInput>wewewe</TextInput>
                        <TextInput>wewewe</TextInput>
                        <TextInput>wewewe</TextInput>
                        <TextInput>wewewe</TextInput>
                        <TextInput>wewewe</TextInput>
                    </View>

                    <View style={styles.formControler}>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
               
            </ImageBackground>
         );
    }
}


const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1
          

    },
    backgroundImage: {
        width: '100%',
        height: '100%', 
        flex:1,
        backgroundColor:colors.gold,
  
    },
    formControler:{
        backgroundColor: colors.red,
        padding:10, 
    },
    btnContainer:{ 
        backgroundColor: colors.blue,
        height:60,
        borderRadius: 50,
        justifyContent: 'center',
    },
    btnText:{
        textAlign: 'center',
        alignSelf: 'center',

    }

});
 
export default Login;