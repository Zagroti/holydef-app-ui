import React, {Component} from 'react';
import { View , Text, StyleSheet, TouchableOpacity, Platform , ActivityIndicator } from 'react-native';
import { Icon , Left} from 'native-base';
import IconFont from 'react-native-vector-icons/FontAwesome5'
import colors from '../styles/colors';
import normalize from '../styles/normalizeText'; 


class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { isFavorite:null }
    }


    componentWillMount =  async () => {
        console.log( this.props)
        const {navigation} = this.props;
        console.log(navigation.getParam('categoryId', 'It is Null'))
        console.log(navigation.getParam('Token', 'It is Null'))
        console.log("*************************************")
        // let ISFAVORITE = navigation.getParam('Favorite', 'It is Null');
        // this.setState({isFavorite: ISFAVORITE });

        let catId = navigation.getParam('categoryId', 'It is Null');
        let articleId = navigation.getParam('articleId', 'It is Null');
        let Token = navigation.getParam('Token', 'It is Null');
        let videourl= '';
       //let ISFAVORITE = navigation.getParam('Favorite', 'It is Null');

        const data= {
            method: 'GET',
            headers: {
                "Authorization": Token,
                "Accept":"application/json", 
            }
        }

        let url = 'http://api.holydef.ir/api/v1/article/' + catId + '/'+ articleId +"/favourite" ;
        let response = await fetch(url,data)
        .then((response) => response.json());
       console.log(response.data.is_favourite);
       await this.setState({
            isFavorite: response.data.is_favourite,
            isLoading:true, 
            videoURL:response.data.vi });

    }

  

    goBackTo = () => {
       // this.props.navigation.state.params.onGoBack();
        
        this.props.navigation.goBack();
        console.log("go back");
    }



    _openViewPage(id,catId, Token, video){
        console.log("cat id and : " + id + catId);
        if(video!= '')
        this.props.navigation.navigate('Video', {articleId:id, categoryId: catId, Token:Token, videoURL:video});
        else
        console.log("در حال بارگذاری، لطفا کمی صبر کنید");
    }

    _openSound(id,catId, Token, sound){
        console.log(id);
        this.props.navigation.navigate('Sound', {articleId:id, categoryId: catId, Token:Token, soundURL:sound});

    }

    _setFavorite = async  (id,catId, Token) => {
        //console.log(id);
      //  this.props.navigation.navigate('Sound', {articleId:id, categoryId: catId, Token:Token});


        const formdata = new FormData();
        formdata.append('article_id', catId);
        console.log(catId);

        try {
            const data = {
                        method: 'POST',
                        headers: {
                            "Authorization": Token,
                            "Accept":"application/json", 
                        },
                        
                        body: formdata
                    }
    
                let response = await fetch('http://api.holydef.ir/api/v1/article/favourite', data);
                let responseJson = await response.json();
                    // TODO check later and clear any consol log
                   // console.log(data)
                   console.log(responseJson) 
                   // console.log(responseJson.error) 

                    this.setState({ isLoading: true,  errors: responseJson.error  })
                   // this.setValueLocally(); // save phnoe number in local storage
               
    
                } catch(error) {
                    console.error(error);
                }
    }


    render() { 

    const {isLoading } = this.state;

      
        return ( 

            <View style={styles.container}>
     
            <Left style={{flexDirection:'row'}}>

                <View style={{paddingLeft:15}}>
                    {isLoading ? (
                        <View>
                                        {this.state.isFavorite ? (
                                        <TouchableOpacity   onPress={() => {this._setFavorite(this.props.catid, this.props.id, this.props.Token); this.setState({isFavorite:false})}} >
                                            <Icon style={{color: colors.red}} name='heart' />
                                        </TouchableOpacity>
                                    ) :(
                                        <TouchableOpacity   onPress={() => {this._setFavorite(this.props.catid, this.props.id, this.props.Token); this.setState({isFavorite:true})}} >
                                            <Icon style={{color: colors.white}} name='heart' />
                                        </TouchableOpacity>  
                                    )}
                        </View>
                    ):(
                        <View style={styles.loadingIocn}>
                            <ActivityIndicator />
                        </View>
                    )} 
                </View>

                <View style={{paddingLeft:15}}>
                        {this.props.video ? (
                            <TouchableOpacity  onPress={ () => this._openViewPage(this.props.catid, this.props.id, this.props.Token, this.props.video)} >
                                    <Icon style={{color: '#fff'}} name='videocam' />
                            </TouchableOpacity>
                        ) :(
                            <View >
                                <Icon style={{color: 'transparent'}} name='videocam' />
                            </View>
                        )}
                </View>
                <View style={{paddingLeft:15}}>
                    {this.props.sound ? (
                            <TouchableOpacity  onPress={ () => this._openSound(this.props.catid, this.props.id, this.props.Token, this.props.sound)} >
                                <IconFont style={{color: '#fff'}}  size={22} name='volume-up' />
                            </TouchableOpacity>
                    ) : (
                            <View>
                                <IconFont style={{color: 'transparent'}}  size={22} name='volume-up' />
                            </View>
                    )}
                </View> 
            </Left>
         
              <View><Text style={styles.titleStyling}>  </Text></View>
              <View>
                <TouchableOpacity transparent onPress={this.goBackTo} >
                    <Icon style={{color: '#fff'}} name='arrow-forward'   />
                </TouchableOpacity>
              </View>
              {/* <Text>{this.props.video}</Text> */}
            </View>
         );     
    }
}


const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.transparent,
        height: 60,
        padding: 20,
        alignItems: 'center',
    
    },
    titleStyling:{
        fontFamily: 'IRANSans', 
        fontSize: Platform.os === 'ios' ? normalize(18) : normalize(20),


    },
    loadingIocn:{
        height:25,
        width: 25,
        backgroundColor: colors.transparent,
        alignItems:'center',
        justifyContent:'center'

    }
})
 
export default HeaderSearch;