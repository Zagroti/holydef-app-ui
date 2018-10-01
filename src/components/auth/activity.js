import React, { Component } from 'react';
import { View , StyleSheet,AsyncStorage , ImageBackground , TouchableOpacity, Text ,Keyboard, Platform,TextInput, KeyboardAvoidingView , ActivityIndicator   } from 'react-native';
import { Icon } from 'native-base';
// import UserAgent from 'react-native-user-agent'; 
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
    setValueLocally=()=>{

        AsyncStorage.setItem('ACTIVITYCODE', this.state.Activekey);
       // alert("Value Stored Successfully.")
       console.log(this.state.Activekey)
     
      }

    onPressSending = async () => {
        Keyboard.dismiss();
        // get Mobile number from login page in navigate
        const {navigation} = this.props;
        let MOBILE =  navigation.getParam('phoneNumber', 'It is Null');
        let AGENT ="android" //UserAgent.getUserAgent();
        let UUID = uuid.v1();
         
        console.log(UUID);

        console.log(MOBILE + " Activecode:" + this.state.Activekey + " Agent Aras: " + AGENT + "UUID: " + UUID);

        this.setState({ isLoading: true })

        const formdata = new FormData();
        formdata.append('mobile', MOBILE);
        formdata.append('code', this.state.Activekey);


        // bodyFormData.append('title', this.state.orderForm.title.value);
        // bodyFormData.append('short_description', this.state.orderForm.short_description.value);
        // bodyFormData.append('description', this.state.orderForm.description.value);



       // this.props.navigation.navigate('Main');
    if(this.state.Activekey != ''){        
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
                    console.log(response)

                    if(response.status == 200){
                       this.setState({Activekey:responseJson.data.token});
                       this.setValueLocally();
                    }else{

                        this.setState({errors : response.error})
                    }
                    

                    console.log(responseJson.error) 
                    this.setState({ isLoading: false,  errors: responseJson.error  })
                    
                    if(responseJson.error === undefined ){
                        this.props.navigation.navigate('Main');
                    }

                } catch(error) {
                    console.error(error);
                }
            }
            else{
                this.setState({errors:'لطفا کد فعال سازی را وارد نمایید'})
                console.log("Pleas insert active code");
            }



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

                    <View style={styles.formControler}>
                        <Text style={styles.txtTitle}>لطفا کد فعال سازی خود را وارد کنید</Text>
                  
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

                      {errors  ? (
                            <View style={styles.errorBox}>
                                <Text style={styles.txtTitle}>{errors}</Text>
                            </View>
                        ) : (
                            <Text state={{padding: 10}}>{errors}</Text>
   
                        )}


                      
                    </View>

                    <View style={styles.formControler}>
                        <TouchableOpacity style={styles.btnContainer}  onPress={this.onPressSending} >

                                       
                                                {isLoading ? (

                                                    <View style={styles.loadingBox}>
                                                        <ActivityIndicator color={colors.gold} />
                                                    </View>

                                                ) : (
                                                    <View style={styles.loadingBox}>
                                                        <Icon name='md-checkmark' style={{color: colors.gold}} />
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
        flex:2,
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    backgroundImage: {
        width: '100%',
        height: '100%', 
        flex:1,
        backgroundColor:colors.gold,
  
    },
    formControler:{ 
        padding:5,
        alignSelf: 'center',
        alignItems: 'center', 
        paddingBottom:20,
    },
    btnContainer:{ 
        flexDirection: 'row',
        backgroundColor: colors.black,
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
        color:colors.gold,

    },
    txtTitle:{
        textAlign:'center',
        fontFamily: 'IRANSans',
        fontSize: normalize(16),
    },
    txtContainer:{
        borderRadius:10,
        borderWidth: 3,
        borderColor: colors.blackLow,
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
 
export default Activity;