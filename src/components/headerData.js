import React, {Component} from 'react';
import { View , Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Icon , Left} from 'native-base';

import colors from '../styles/colors';
import normalize from '../styles/normalizeText'; 


class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { isFavorite:true }
    }

    goBackTo = () => {
        this.props.navigation.goBack();
        console.log("go back");
    }



    _openViewPage(id,catId, Token){
        console.log("cat id and : " + id + catId);
        this.props.navigation.navigate('Video', {articleId:id, categoryId: catId, Token:Token});

    }

    _openSound(id,catId, Token){
        console.log(id);
        this.props.navigation.navigate('Sound', {articleId:id, categoryId: catId, Token:Token});

    }

    _setFavorite = async  (id,catId, Token) => {
        //console.log(id);
      //  this.props.navigation.navigate('Sound', {articleId:id, categoryId: catId, Token:Token});


        const formdata = new FormData();
        formdata.append('article_id', catId);


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
                    console.log(data)
                    console.log(responseJson) 
                    console.log(responseJson.error) 
                    this.setState({ isLoading: false,  errors: responseJson.error  })
                   // this.setValueLocally(); // save phnoe number in local storage
          
    
                } catch(error) {
                    console.error(error);
                }

                

    }

    componentWillMount = async () =>{
        const {navigation} = this.props;

        let catId = navigation.getParam('categoryId', 'It is Null');
        let articleId = navigation.getParam('articleId', 'It is Null');
        let Token = navigation.getParam('Token', 'It is Null');

        const data= {
            method: 'GET',
            headers: {
                "Authorization": Token,
                "Accept":"application/json", 
            }
        }

        let url = 'http://api.holydef.ir/api/v1/article/' + catId +"/"+ articleId ;
        let response = await fetch(url,data)
        .then((response) => response.json());
        console.log(response.data.is_favourite);
        this.setState({isFavorite: response.data.is_favourite });

    }

    render() { 




      
        return ( 

            <View style={styles.container}>
     
            <Left style={{flexDirection:'row'}}>
                {/* <View style={{paddingLeft:2}}>
                    <TouchableOpacity transparent onPress={this.goBackTo} >
                        <Icon style={{color: '#fff'}} name='share' />
                    </TouchableOpacity>
                </View> */}
                <View style={{paddingLeft:15}}>
                {this.state.isFavorite ? (
                    <TouchableOpacity transparent onPress={() => this._setFavorite(this.props.catid, this.props.id, this.props.Token)} >
                        <Icon style={{color: '#fff'}} name='heart' />
                    </TouchableOpacity>
                ) :(
                    <TouchableOpacity transparent onPress={() => this._setFavorite(this.props.catid, this.props.id, this.props.Token)} >
                        <Icon style={{color: '#EC7063'}} name='heart' />
                    </TouchableOpacity>  
                )}


                </View>
                <View style={{paddingLeft:15}}>
                    <TouchableOpacity transparent onPress={ () => this._openViewPage(this.props.catid, this.props.id, this.props.Token)} >
                        <Icon style={{color: '#fff'}} name='videocam' />
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:15}}>
                    <TouchableOpacity transparent onPress={ () => this._openSound(this.props.catid, this.props.id, this.props.Token)} >
                        <Icon style={{color: '#fff'}} name='volume-up' />
                    </TouchableOpacity>
                </View>
            </Left>
         
              <View><Text style={styles.titleStyling}>  </Text></View>
              <View>
                <TouchableOpacity transparent onPress={this.goBackTo} >
                    <Icon style={{color: '#fff'}} name='arrow-forward'   />
                </TouchableOpacity>
              </View>
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


    }
})
 
export default HeaderSearch;