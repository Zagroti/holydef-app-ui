import React, { Component } from 'react';
import { View , Text, ImageBackground , StyleSheet} from 'react-native';
import LinderUnderMenu from './lineUnderMenu';
import Header from './headerSearch';
import colors from '../styles/colors';





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
                    <Text style={styles.textAbout}>اپلیکیشن"از سه روز تا هشت سال" با موضوع ارزشمند دفاع مقدس کار مشترکی از شرکت خدمات نور رایانه سپهر ،شرکت زاگرت و موسسه فلق رایانه اصفهان می باشد و از جمله قابلیت های آن می توان به تنوع موضوعی  و  محتوایی آن اشاره کرد.برای کسب اطلاعات بیشتر و همکاری با شرکت نور رایانه سپهر در زمینه ایجاد و ارائه سرویس های VAS میتوانید با شماره تلفن های 88140692  تماس حاصل فرمایید.</Text>
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
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginBottom: 12,
        elevation: 2,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    textAbout:{
        fontFamily: 'IRANSans',
        paddingVertical: 10,
        
    }


    });

export  {AboutUs};