import React, { Component } from 'react';
import { View , Text, StyleSheet , Platform,ActivityIndicator, ImageBackground,ScrollView , Image, TouchableOpacity,   Clipboard,
    ToastAndroid,
    AlertIOS
     } from 'react-native';
import Button from './touchable/button';
import HTMLView from 'react-native-htmlview';
import Share, {ShareSheet} from 'react-native-share';

//
//
//
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';
import LinderUnderMenu from './lineUnderMenu';
import { H1, H2 } from '../typography/';


//
// import component
//
import Header from './headerData';
import ajax from './category';


// ---------- background images --------------
import img01 from '../assets/img/01.jpg'
import img02 from '../assets/img/02.jpg'
import img03 from '../assets/img/03.jpg'
import img04 from '../assets/img/04.jpg'
import img05 from '../assets/img/05.jpg'
import img06 from '../assets/img/06.jpg'
import img07 from '../assets/img/07.jpg'
import img08 from '../assets/img/08.jpg'
import img09 from '../assets/img/09.jpg'
import img10 from '../assets/img/10.jpg'
import img11 from '../assets/img/11.jpg'
import img12 from '../assets/img/12.jpg'
import imageBackground from '../assets/img/main-bg.jpg'
//---------------------------------------------


 

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource:[], imageFile:img01,visible: false, catIdState: null, IdSate: null, Token:null   }
    }

 

    gotopage = () => {
        this.props.navigation.navigate('Main');

        
    }

         componentWillMount(){
            this.setState({ isLoading: true })
            const {navigation} = this.props;
            //let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';

             let catId = navigation.getParam('categoryId', 'It is Null');
             let articleId = navigation.getParam('articleId', 'It is Null');
             let Token = navigation.getParam('Token', 'It is Null');

               console.log(articleId);
               console.log(catId);

            // console.log( " catid: "+ catId + " article id: "+ articleId); // TODO delete later
            const data= {
                method: 'GET',
                headers: {
                    "Authorization": Token,
                    "Accept":"application/json", 
                }
            }

             const url = 'http://api.holydef.ir/api/v1/article/' + catId +"/"+ articleId;
             fetch(url,data)
             .then((response) => response.json())
             .then((responseJson) => {
                   this.setState({dataSource: responseJson.data});
                   //console.log(this.state.dataSource.description);
                   this.setState({ isLoading: false })
                   this.setState({catIdState: catId , IdSate: articleId, Token:Token});
                   console.log(this.state.catIdState + " is state") // TODO later delet it
             })
             .catch((error) => {
                   console.log(error);
             })
      
         }
  
         onCancel() {
            console.log("CANCEL")
            this.setState({visible:false});
          }
          onOpen() {
            console.log("OPEN")
            this.setState({visible:true});
          }

    render() { 


 

        const { errors, isLoading } = this.state
        const htmlContent = this.state.dataSource.description;

        return ( 

            <ImageBackground source = {imageBackground} blurRadius={10} style={styles.container}>

                <Header navigation={this.props.navigation} catid={this.state.catIdState} id={this.state.IdSate} Token={this.state.Token}/>

                <LinderUnderMenu />

                {/* <TouchableOpacity onPress={this.onOpen.bind(this)}>
                    <Text>Share</Text>
                </TouchableOpacity> */}
        

                {isLoading ? (

                    <View style={styles.loadingBox}>
                        <Text style={{paddingHorizontal:10,fontFamily:'IRANSans'}}>درحال بارگذاری</Text>
                        <ActivityIndicator color="white" />
                    </View>

                    ) : (
                        <View style={{padding:20, marginBottom:100 }}>
                            <ScrollView style={styles.dataContainer}>
                                <Text style={{fontSize:16, fontFamily:'IRANSans_Bold'}}>{this.state.dataSource.title}</Text>
                                <Image source={{uri: this.state.dataSource.image}} style={{ resizeMode: 'contain', height: 250 }} />
                                    <HTMLView
                                    value={htmlContent}
                                    stylesheet={styles}
                                    
                                    />
                            </ScrollView>
                        </View>
                   
                    )}


                    {/* <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
                        <Button iconSrc={{ uri: TWITTER_ICON }}
                                onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                "social": "twitter"
                                }));
                            },300);
                            }}>Twitter</Button>
                        <Button iconSrc={{ uri: FACEBOOK_ICON }}
                                onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                "social": "facebook"
                                }));
                            },300);
                            }}>Facebook</Button>
                        <Button iconSrc={{ uri: WHATSAPP_ICON }}
                                onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                "social": "whatsapp"
                                }));
                            },300);
                            }}>Whatsapp</Button>
                        <Button iconSrc={{ uri: GOOGLE_PLUS_ICON }}
                                onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                "social": "googleplus"
                                }));
                            },300);
                            }}>Google +</Button>
                        <Button iconSrc={{ uri: EMAIL_ICON }}
                                onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                Share.shareSingle(Object.assign(shareOptions, {
                                "social": "email"
                                }));
                            },300);
                            }}>Email</Button>
                        <Button
                            iconSrc={{ uri: CLIPBOARD_ICON }}
                            onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                if(typeof shareOptions["url"] !== undefined) {
                                Clipboard.setString(shareOptions["url"]);
                                if (Platform.OS === "android") {
                                    ToastAndroid.show('Link copiado al portapapeles', ToastAndroid.SHORT);
                                } else if (Platform.OS === "ios") {
                                    AlertIOS.alert('Link copiado al portapapeles');
                                }
                                }
                            },300);
                            }}>Copy Link</Button>
                        <Button iconSrc={{ uri: MORE_ICON }}
                            onPress={()=>{
                            this.onCancel();
                            setTimeout(() => {
                                Share.open(shareOptions)
                            },300);
                            }}>More</Button>
                        </ShareSheet> */}



            </ImageBackground>
         );
    }
}



const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: '100%', 
        flex:1,
        backgroundColor:colors.gold,
        
    },
    dataContainer:{
        padding: 10,
        backgroundColor:colors.white,

    },
    boxContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        backgroundColor: colors.white, 
        marginBottom: 20,



    },
    BoxLeft:{ 
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        textAlign: 'center', 
        alignContent:'center',
        padding:5
        
    },
    boxRight:{
        backgroundColor : colors.blue,
        width: 100,
        height: 100,

    },
    loadingBox:{
        flexDirection: 'row',
        width:200,
        height:60,
        backgroundColor : colors.silver,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    p:{
        fontFamily: 'IRANSans',
    },
    h3:{
        fontFamily: 'iranyekanbold', 
        color: colors.black,
        fontSize: normalize(16),


    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
      },

})
 



export default Data;