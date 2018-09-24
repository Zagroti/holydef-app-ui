import React, { Component } from 'react';
import { View , StyleSheet,AsyncStorage , ImageBackground ,TextInput, TouchableOpacity, Text , Platform, KeyboardAvoidingView , ActivityIndicator   } from 'react-native';
import { Icon } from 'native-base';
import colors from '../../styles/colors';
import normalize from '../../styles/normalizeText';
import TextGroup from '../textgroup/text-field-group';


 import Logo from './logo';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { mobile : '' }
    }


    setValueLocally=()=>{

        AsyncStorage.setItem('phoneNumber', this.state.mobile);
       // alert("Value Stored Successfully.")
     
      }



    onPressSending = async () => {
        this.setState({ isLoading: true })

        const formdata = new FormData();
        formdata.append('mobile', this.state.mobile);

        try {
        const data = {
                    method: 'POST',
                    headers: {
                    "X-Debug": 1,
                    "Accept":"application/json",
                    },
                    
                    body: formdata
                }

            let response = await fetch('http://api.holydef.ir/api/v1/auth/otp/sms', data);
            let responseJson = await response.json();
                // TODO check later and clear any consol log
                console.log(data)
                console.log(responseJson) 
                console.log(responseJson.error) 
                this.setState({ isLoading: false,  errors: responseJson.error  })
                this.setValueLocally(); // save phnoe number in local storage
                if(responseJson.error === undefined ){
                    this.props.navigation.navigate('Activity', { phoneNumber: this.state.mobile});
                }

            } catch(error) {
                console.error(error);
            }

       // this.props.navigation.navigate('Activity');
       // this.setState({ isLoading: false })

    }

 



    render() { 

        const { errors, isLoading } = this.state


        return ( 
        
            <KeyboardAvoidingView behavior="padding" style={styles.container}  keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -300}>

            <ImageBackground source={require('../../assets/img/main-bg.jpg')} style={ styles.backgroundImage } >

       
                <View style={styles.containerForm}>
               
                    {/* <View style={styles.formControler}> */}
                        <Logo />
                    {/* </View> */}

                    {/* <View style={styles.formControler}> */}
                        <Text styl={styles.txtTitle}>لطفا جهت ورود به برنامه شماره همراه خود را وارد نماپید.</Text>
                  
                    {/* </View> */}

                    {/* <View style={styles.formControler}> */}
                      
                        <View style={styles.txtContainer}>  
                                            <TextInput
                                                placeholder="شماره تلفن همراه"
                                                style={{ color:'#333', borderBottomWidth: 0,fontSize:16, textAlign:'center',justifyContent:'center',alignItems:'center',paddingTop:5, letterSpacing: 10 }}
                                                maxLength={11}
                                                keyboardType='numeric'
                                                onChangeText={(mobile) => this.setState({mobile})}
                                                />
                                            
                        </View>
                        {errors  ? (
                            <View style={styles.errorBox}>
                                <Text>{errors}</Text>
                            </View>
                        ) : (
                            <Text state={{padding: 10}}>{errors}</Text>
   
                        )}
                     
                      
                    {/* </View> */}

                    <View style={styles.formControler}>
                        <TouchableOpacity style={styles.btnContainer}  onPress={this.onPressSending} >

                                       
                                                {isLoading ? (

                                                    <View style={styles.loadingBox}>
                                                        <ActivityIndicator color={colors.gold} />
                                                    </View>

                                                ) : (
                                                    <View style={styles.loadingBox}>
                                                        <Icon name='arrow-back' style={{color:colors.gold}} />
                                                    </View>
                                                )}

                                                 <Text style={styles.btnText}>ورود</Text>
                           
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
        alignItems: 'center', 

    },
    containerForm:{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    backgroundImage: {
        width: '100%',
        height: '100%', 
        flex:1,
  
    },
    formControler:{ 
        padding:10,
        alignSelf: 'center',
        alignItems: 'center', 
        marginBottom: 30
    },
    btnContainer:{ 
        flexDirection: 'row',
        backgroundColor: colors.black,
        height:60,
        width:'90%',
        borderRadius: 50,
        justifyContent: 'center', 
    },
    btnText:{
        flex:2,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'IRANSans',
        fontSize: normalize(20),
        color:colors.gold,

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
        width:300,
        justifyContent:'center', 
      

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
          backgroundColor : colors.blackLow,
          borderRadius:100,
          justifyContent: 'center',
          alignItems: 'center',

      },
      errorBox:{
          backgroundColor: colors.danger,
          marginTop: 10,
          borderRadius: 30,
          height:50,
          textAlign:'center',
          justifyContent:'center',
          paddingHorizontal:20,
           
           



      }


});
 
export default Login;