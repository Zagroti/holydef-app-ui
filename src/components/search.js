import React, { Component } from 'react';
import { View , Text, StyleSheet , ActivityIndicator, TouchableOpacity,FlatList, Image, ImageBackground, TextInput  } from 'react-native';
import Button from './touchable/button';
import { Icon } from 'native-base';
//
//
//
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';
import LinderUnderMenu from './lineUnderMenu';
import { H1, H2 } from '../typography';


//
// import component
//
import Header from './headerSearch';
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


 

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource:[], imageFile:img01,  }
    }

 

    gotopage = () => {
        this.props.navigation.navigate('Main');

        
    }
 


    _openViewPage(id,catId){
        console.log(id);
        this.props.navigation.navigate('Data', {articleId:id, categoryId: catId});

    }


 

    renderItem = ({item})=>{
        return(
            
            
                <TouchableOpacity onPress={ () => this._openViewPage(item.id, item.cat_id)} style={styles.boxContainer}>
                    <View style={styles.BoxLeft}>
                           <H1>{item.title}</H1>
                           <H2 style={{flexWrap: 'wrap', textAlign: 'right',}}>{item.short_description}</H2>
                    </View>
                    <View style={styles.boxRight}>
                        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
                    </View>
                </TouchableOpacity>

         
        )
         }
   
         componentDidMount(){
            this.setState({ isLoading: true })
            const {navigation} = this.props;
            //let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';

             let catId = navigation.getParam('DataId', 'Its Null');
             const url = 'http://api.holydef.ir/api/v1/article/' + catId;
             fetch(url)
             .then((response) => response.json())
             .then((responseJson) => {
                   this.setState({dataSource: responseJson.data});
                   //console.log(responseJson.data);
                   this.setState({ isLoading: false })

             })
             .catch((error) => {
                   console.log(error);
             })
   
         }
  
    

    render() { 

        const { errors, isLoading } = this.state

        return ( 

            <ImageBackground source = {this.state.imageFile} blurRadius={30} style={styles.container}>

                <Header navigation={this.props.navigation} />

                <LinderUnderMenu />

                <View style={styles.dataContainer}>

                <View style={styles.searchBox}>
                    <View style={styles.searchBoxLeft}>
                    
                    <View>
                        <TouchableOpacity transparent >
                                <Icon name='search' />
                        </TouchableOpacity>
                    </View>
                    
                    </View>
                    <View style={styles.searchBoxRight}>
                        <TextInput style={{fontFamily:'IRANSans', textAlign:'right', }}  placeholder="جستجو..."/>
                    </View>
                    
                </View>

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
        padding: 10,
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
        paddingRight: 10,
        
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
    },
    searchBox:{
        flexDirection:'row',
        backgroundColor: colors.white,
        height:50,
        borderRadius:30,

    },
    searchBoxLeft:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',

        
    },
    searchBoxRight:{
        height:50,
        width:50,
        flex:1,
        paddingHorizontal:10
    }

})
 
export default Search;