import React, { Component} from 'react';
import {  View, Text, StyleSheet , FlatList ,Image , ActivityIndicator, AsyncStorage, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';
import { H1, H2 } from '../typography';
import LinderUnderMenu from './lineUnderMenu';
import Header from './headerSearch';

class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = { Token:null, dataSource:null, refreshData:false }
    }


    componentDidMount() {

        this._fetchDart(); // fetch data from API
     }

    _fetchDart = async () =>{
        let Token = await AsyncStorage.getItem('ACTIVITYCODE'); // Get Token from localStrage

        this.setState({ isLoading: true,  Token: Token })
        const {navigation} = this.props;

                const data= {
                    method: 'GET',
                    headers: {
                        "Authorization": Token,
                        "Accept":"application/json", 
                    }
                }

                const url = 'http://api.holydef.ir/api/v1/article/favourite';
                fetch(url,data)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({dataSource: responseJson.data});
                    console.log(this.state.dataSource); // TODO delete later
                    this.setState({ isLoading: false })
                })
                .catch((error) => {
                    console.log(error);
                })
        }

    
    // Open Data componet for showing data
    _openViewPage = (id,catId,Token) => {
        console.log(Token);
        this.props.navigation.navigate('Data', {articleId:id, categoryId: catId, Token: Token });
    }


  
     renderItem = ({item})=>{
        return(
            
            
                <TouchableOpacity onPress={ () => this._openViewPage(item.id, item.cat_id,this.state.Token)} style={styles.boxContainer}>
                    <View style={styles.BoxLeft}>
                           <H1>{item.title}</H1>
                           <H2 style={{flexWrap: 'wrap', textAlign: 'right',}}>{item.short_description}</H2>
                    </View>
                    <View style={styles.boxRight}>
                        <Image source={{uri: item.image}}  style={{width: 100, height: 100 }} />
                    </View>
                </TouchableOpacity>

         
        )
         }



    render() { 

      
        const { errors, isLoading } = this.state
        return ( 
            <ImageBackground source = {require('../assets/img/01.jpg')} blurRadius={30} style={styles.container}>

                <Header title="لیست علاقمندی ها" navigation={this.props.navigation} />               
                <LinderUnderMenu />


                <View style={styles.dataContainer}>

                            {isLoading ? (
                    <View style={styles.loadingBox}>
                        <Text style={{paddingHorizontal:10}}>درحال بارگذاری</Text>
                        <ActivityIndicator color="white" />
                    
                    </View>

                    ) : (
                        <FlatList
                            data= {this.state.dataSource}
                            renderItem={this.renderItem} 
                            keyExtractor = { (item, index) => index.toString() }
                            style={{marginBottom:100}}

                            />

                    )}


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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        backgroundColor: colors.white, 
        marginBottom: 12,
        elevation: 2,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,

    },
    BoxLeft:{ 
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        textAlign: 'center', 
        alignContent:'center',
        paddingHorizontal: 10,
        paddingTop:5
        
    },
    boxRight:{
        backgroundColor : colors.blue,
        width: 100,
        height: 100,

    },
    flatview: {
        justifyContent: 'center',
        paddingTop: 30,
        borderRadius: 2,
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
    }

})





export  {Favorite};