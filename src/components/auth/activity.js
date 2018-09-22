import React, { Component } from 'react';
import { View , StyleSheet, ImageBackground , TouchableOpacity, Text , Platform,TextInput, KeyboardAvoidingView , ActivityIndicator   } from 'react-native';
import { Icon } from 'native-base';
import UserAgent from 'react-native-user-agent'; 
import uuid from 'react-native-uuid';

import colors from '../../styles/colors';
import normalize from '../../styles/normalizeText';
import TextGroup from '../textgroup/text-field-group';


 import Logo from './logo';


class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = { Activekey:'' }
    }


    onPressSending = async () => {
        // get Mobile number from login page in navigate
        const {navigation} = this.props;
        let MOBILE =  navigation.getParam('phoneNumber', 'It is Null');
        let AGENT = UserAgent.getUserAgent();
        let UUID = uuid.v1();
         
        console.log(UUID);

        console.log(MOBILE + this.state.Activekey + "Agent Aras: " + AGENT + "UUID: " + UUID);

        this.setState({ isLoading: true })

        const formdata = new FormData();
        formdata.append('mobile', MOBILE, 'code', this.state.Activekey );

        try {
        const data = {
                    method: 'POST',
                    headers: { 
                    
                    "agent": AGENT,
                    "Accept":"application/json",
                    "uuid": UUID,
                    },
                    
                    body: formdata
                }

            let response = await fetch('http://api.holydef.ir/api/v1/auth/otp/verify', data);
            let responseJson = await response.json();
                // TODO check later and clear any consol log
                console.log(data)
                console.log(responseJson) 
                console.log(responseJson.error) 
                this.setState({ isLoading: false,  errors: responseJson.error  })
                
                if(responseJson.error === undefined ){
                    this.props.navigation.navigate('Activity');
                }

            } catch(error) {
                console.error(error);
            }



    }
    render() { 

        const { errors, isLoading } = this.state


        return ( 
            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}
          >

            <ImageBackground source={require('../../assets/img/main-bg.jpg')} style={ styles.backgroundImage } >

                 
                <View style={styles.containerForm}>
               
                    <View style={styles.formControler}>
                        <Logo />
                    </View>

                    <View style={styles.formControler}>
                        <Text styl={styles.txtTitle}>لطفا کد فعال سازی خود را وارد کنید</Text>
                  
                    </View>

                    <View style={styles.formControler}>
                      
                      <View style={styles.txtContainer}>  
                   

                                         <TextInput
                                            placeholder="-  -  -  -"
                                            keyboardType='numeric'
                                            style={{ borderBottomWidth: 0,fontSize:30, textAlign:'center', letterSpacing: 10 }}
                                            maxLength={4}
                                            onChangeText={(Activekey) => this.setState({Activekey})}
                                             />
                                        
                      </View>
                      
                    </View>

                    <View style={styles.formControler}>
                        <TouchableOpacity style={styles.btnContainer}  onPress={this.onPressSending} >

                                       
                                                {isLoading ? (

                                                    <View style={styles.loadingBox}>
                                                        <ActivityIndicator color="white" />
                                                    </View>

                                                ) : (
                                                    <View style={styles.loadingBox}>
                                                        <Icon name='md-checkmark' />
                                                    </View>
                                                )}

                                                 <Text style={styles.btnText}>شروع</Text>
                                              


                           
                        </TouchableOpacity>
                    </View>
                </View>
                
               
            </ImageBackground>
            </KeyboardAvoidingView>
         );
    }
}


const styles = StyleSheet.create({
    container:{ 
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
         

    },
    containerForm:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:20,
    },
    backgroundImage: {
        width: '100%',
        height: '100%', 
        flex:1,
        backgroundColor:colors.gold,
  
    },
    formControler:{ 
        padding:10,
        alignSelf: 'center',
        alignItems: 'center', 
    },
    btnContainer:{ 
        flexDirection: 'row',
        backgroundColor: colors.blue,
        height:60,
        width:'80%',
        borderRadius: 50,
        justifyContent: 'center',
    },
    btnText:{
        flex:2,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'IRANSans',
        fontSize: normalize(20),

    },
    txtTitle:{
        textAlign:'center',
        fontFamily: 'IRANSans',
        fontSize: normalize(20),
    },
    txtContainer:{
        borderRadius:10,
        borderWidth: 3,
        borderColor: colors.silver,
        paddingHorizontal: 30,
        paddingBottom: 10,
        width:300,
      

    },

    buttonLogin: {
        height:60,
        backgroundColor: colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      loadingBox:{
          
          width:60,
          height:60,
          backgroundColor : colors.darkBlue,
          borderRadius:100,
          justifyContent: 'center',
          alignItems: 'center',

      }

});
 
export default Activity;