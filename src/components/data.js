import React, { Component } from 'react';
import { View , Text, StyleSheet , Platform,ActivityIndicator, ImageBackground,ScrollView , Image } from 'react-native';
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
import Header from './header';
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
        this.state = {dataSource:[], imageFile:img01,  }
    }

 

    gotopage = () => {
        this.props.navigation.navigate('Main');

        
    }
//     componentDidMount(){
//         const {navigation} = this.props;
//         let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';
       
        

//         if(imageId =='01')
//         this.setState({ imageFile : img01});
// else if(imageId =='02')
//         this.setState({ imageFile : img02});
//         console.log(this.state.imageFile + " State is this ");
//     }

   
         componentDidMount(){
            this.setState({ isLoading: true })
            const {navigation} = this.props;
            //let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';

             let catId = navigation.getParam('categoryId', 'Its Null');
             let articleId = navigation.getParam('articleId', 'Its Null');

            // console.log( " catid: "+ catId + " article id: "+ articleId); // TODO delete later

             const url = 'http://api.holydef.ir/api/v1/article/' + catId +"/"+ articleId;
             fetch(url)
             .then((response) => response.json())
             .then((responseJson) => {
                   this.setState({dataSource: responseJson.data});
                   //console.log(this.state.dataSource.description);
                   this.setState({ isLoading: false })
             })
             .catch((error) => {
                   console.log(error);
             })
   
         }
  
    

    render() { 

        const { errors, isLoading } = this.state
        const htmlContent = this.state.dataSource.description;

        return ( 

            <ImageBackground source = {this.state.imageFile} blurRadius={30} style={styles.container}>

                <Header navigation={this.props.navigation} />

                <LinderUnderMenu />

        

                {isLoading ? (

                    <View style={styles.loadingBox}>
                        <Text style={{paddingHorizontal:10}}>درحال بارگذاری</Text>
                        <ActivityIndicator color="white" />
                       
                    </View>

                    ) : (
                        <View style={{padding:20}}>
                            <ScrollView style={styles.dataContainer}>
                                <H1>{this.state.dataSource.title}</H1>
                                <Image source={{uri: this.state.dataSource.image}} style={{ height: 400}} />
                                    <HTMLView
                                    value={htmlContent}
                                    stylesheet={styles}
                                    />
                            </ScrollView>
                        </View>
                   
                    )}


       
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
    }
    

})
 
export default Data;