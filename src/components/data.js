import React, { Component } from 'react';
import { View , Text, StyleSheet , Platform,ActivityIndicator, ImageBackground,ScrollView , Image, TouchableOpacity,   Clipboard,
    ToastAndroid,
    AlertIOS
     } from 'react-native';
import Button from './touchable/button';
import HTMLView from 'react-native-htmlview'; 

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
//---------------------------------------------


 

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource:[],
            imageFile:img01,
            visible: false, 
            catIdState: null, 
            IdSate: null, 
            Token:null,
            videoURL:'',
            SoundURL:''
        }
    }


    _getPhotoWallpaper(id){
        if(id ==0)
        this.setState({imageFile : img01});
        else if(id ==1)
        this.setState({imageFile : img02});
        else if(id ==2)
        this.setState({imageFile : img03});
        else if(id ==3)
        this.setState({imageFile : img04});
        else if(id ==4)
        this.setState({imageFile : img05});
        else if(id ==5)
        this.setState({imageFile : img06});
        else if(id ==6)
        this.setState({imageFile : img07});
        else if(id ==7)
        this.setState({imageFile : img08});
        else if(id ==8)
        this.setState({imageFile : img09});
        else if(id ==9)
        this.setState({imageFile : img10});
        else if(id ==10)
        this.setState({imageFile : img11});
        else if(id ==11)
        this.setState({imageFile : img12});
    }

 

    gotopage = () => {
        console.log("Back button press!")
        this.props.navigation.navigate('Main');

        
    }


        _fetchdata = async() =>{

            this.setState({ isLoading: true })
            const {navigation} = this.props;
            //let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';

             let catId = navigation.getParam('categoryId', 'It is Null');
             this._getPhotoWallpaper(catId - 1);

             let articleId = navigation.getParam('articleId', 'It is Null');
             let Token = navigation.getParam('Token', 'It is Null');

               console.log(articleId);
               console.log(catId);

            // console.log( " catid: "+ catId + " article id: "+ articleId); // TODO delete later
            console.log(Token)
            const data= {
                method: 'GET',
                headers: {
                    "Authorization": Token,
                    "Accept":"application/json", 
                }
            }

             const url = 'http://api.holydef.ir/api/v1/article/' + catId +"/"+ articleId;
            await fetch(url,data)
             .then((response) => response.json())
             .then((responseJson) => { 
                //console.log(responseJson)
                   this.setState({
                    dataSource: responseJson.data,
                    isLoading: false,
                    catIdState: catId , 
                    IdSate: articleId, 
                    Token:Token, 
                    videoURL:responseJson.data.video, 
                    SoundURL: responseJson.data.audio
                
                });

                   //console.log(responseJson.data) // TODO later delet it
             })
             .catch((error) => {
                   console.log(error);
             })

        }

         componentWillMount(){ 

           this._fetchdata().done();

      
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
        let htmlContent = this.state.dataSource.description;
        if(htmlContent === null)
        htmlContent = ''
        //console.log(htmlContent)
        return ( 

            <ImageBackground source = {this.state.imageFile} blurRadius={10} style={styles.container}>

                <Header navigation={this.props.navigation} 
                        catid={this.state.catIdState} 
                        id={this.state.IdSate} 
                        Token={this.state.Token} 
                        video={this.state.videoURL} 
                        sound={this.state.SoundURL} 
                
                />

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
                                        style={{paddingBottom: 50}}
                                        addLineBreaks={false}
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
        marginTop: 3,
        marginBottom: 3

    },
    h1:{
        fontFamily: 'iranyekanbold', 
        color: colors.black,
        fontSize: normalize(20),
        
    },
    h2:{
        fontFamily: 'iranyekanbold', 
        color: colors.black,
        fontSize: normalize(18),

    },
    h3:{
        fontFamily: 'iranyekanbold', 
        color: colors.black,
        fontSize: normalize(16),

    },
    h4:{
        fontFamily: 'iranyekanbold', 
        color: colors.black,
        fontSize: normalize(14),

    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
      },
      strong:{
        fontFamily: 'iranyekanbold', 
        fontSize: normalize(16),
        color: '#111'

      },
      span:{
          display: 'none',
          color:'#ff0000',
          fontFamily: 'IRANSans',

      },
      ul:{
        fontFamily: 'IRANSans',

      },
      sub:{
        fontFamily: 'IRANSans',

      },
      li:{
        fontFamily: 'IRANSans',
      },
      div:{
        fontFamily: 'IRANSans',
      }
})
 



export default Data;