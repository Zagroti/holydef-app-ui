import React, { Component } from 'react';
import { View , Text, StyleSheet , Platform, TouchableOpacity,FlatList, Image, ImageBackground,  } from 'react-native';
import Button from './touchable/button';
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
import ajax from './FetchData';


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
    componentDidMount(){
        const {navigation} = this.props;
        let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';
       
        

        if(imageId =='01')
        this.setState({ imageFile : img01});
else if(imageId =='02')
        this.setState({ imageFile : img02});
        console.log(this.state.imageFile + " State is this ");
    }


 

    renderItem = ({item})=>{
        return(
            
            
                <TouchableOpacity style={styles.boxContainer}>
                    <View style={styles.BoxLeft}>
                      
                           <H1>{item.title}</H1>
                           <H2 style={{flexWrap: 'wrap', textAlign: 'right',}}>{item.description}</H2>
                    </View>
                    <View style={styles.boxRight}>
                        <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
                    </View>
                </TouchableOpacity>

         
        )
         }
   
         componentDidMount(){
             let catId = "1"
             const url = 'http://api.holydef.ir/api/v1/article/' + catId;
             fetch(url)
             .then((response) => response.json())
             .then((responseJson) => {
                   this.setState({dataSource: responseJson.data});
                   console.log(responseJson.data);
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

                {/* <View style={styles.boxContainer}>
                    <View style={styles.BoxLeft}>
                      
                           <H1>Title of Text</H1>
                           <H2 style={{flexWrap: 'wrap', textAlign: 'right',}}>I found that because i was using a full width button I found that because i was using a full width button</H2>
                    </View>
                    <View style={styles.boxRight}>
                        <Image source={require('../assets/img/tm.jpg')} style={{width: 100, height: 100}} />
                    </View>
                </View> */}

                <FlatList
                        data= {this.state.dataSource}
                        renderItem={this.renderItem}
                        />

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
        padding:5
        
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
      name: {
        fontFamily: 'Verdana',
        fontSize: 18

      },
      email: {
        color: 'red'
      }
    

})
 
export default Data;