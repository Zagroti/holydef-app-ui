import React, { Component } from 'react';
import { View , Text, ImageBackground , StyleSheet, Image, TouchableOpacity , Linking} from 'react-native';
import LinderUnderMenu from './lineUnderMenu';
import Header from './headerSearch';
import colors from '../styles/colors';
import { H1, H2 } from '../typography/';
import normalize from '../styles/normalizeText';




class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ImageBackground source = {require('../assets/img/01.jpg')} blurRadius={30} style={styles.container}>
                
                <Header title="درباره ما" navigation={this.props.navigation} />
                <LinderUnderMenu />

                <View style={styles.boxContainer}>
                    <Image source={require('../assets/img/logo.png')} style={styles.logBox} />
                    <Text style={{
                        fontFamily:'iranyekanbold', 
                        height:50,
                        width:250,
                        alignItems:'center',
                        alignSelf:'center',
                        textAlign:'center',

                        }}>اپلیکیشن"از سه روز تا هشت سال"</Text>
                    <Text style={styles.textAbout}>با موضوع ارزشمند دفاع مقدس کار مشترکی از شرکت خدمات نور رایانه سپهر ،شرکت زاگرت و موسسه فلق رایانه اصفهان می باشد و از جمله قابلیت های آن می توان به تنوع موضوعی  و  محتوایی آن اشاره کرد.برای کسب اطلاعات بیشتر و همکاری با شرکت نور رایانه سپهر در زمینه ایجاد و ارائه سرویس های VAS میتوانید با شماره تلفن های 88140692  تماس حاصل فرمایید.</Text>

                    <TouchableOpacity style={styles.buttonBox} onPress={ ()=>{ Linking.openURL('http://holydef.ir/')}}>
                        <Text style={styles.btnText} >اطلاعات بیشتر</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
         );
    }
}
 



const styles = StyleSheet.create({

    container:{
        flex:1, 
        
    },
    dataContainer:{
        paddingHorizontal: 15,
        
    },
    boxContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        margin: 12,
        elevation: 2,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        padding: 10,
        textAlign: 'left',
        backgroundColor: colors.white,
        
    },
    logBox:{
            height:100,
            width:100,
            alignItems:'center',
            alignSelf:'center',
            padding:30,
            marginBottom:20,




    },
    textAbout:{
        fontFamily: 'IRANSans',
        marginBottom:20,
 
    
    },
    buttonBox:{
        flexDirection: 'row',
        backgroundColor: colors.black,
        height:50,
        width:'80%',
        borderRadius: 50,
        justifyContent: 'center', 
        alignSelf:'center',
        marginBottom:20,

    },
    btnText:{
        flex:2,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'IRANSans',
        fontSize: normalize(20),
        color:colors.gold,
    }


    });

export  {AboutUs};