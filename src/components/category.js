import React, { Component } from 'react';
import { 
    View , 
    Text, 
    StyleSheet , 
    ActivityIndicator, 
    TouchableOpacity,
    FlatList, 
    Image, 
    ImageBackground, 
    AsyncStorage  

} from 'react-native';
import Button from './touchable/button';
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


 

class category extends Component {
    constructor(props) {
        super(props);
        this.state = {dataSource:[], imageFile:img01, token:null  }
    }

 

    gotopage = () => {
        this.props.navigation.navigate('Main');

        
    }

    _getPhotoWallpaper(id){
 
        if(id ==0)
        this.setState({imageFile : img01});
            else if(id ===1)
        this.setState({imageFile : img02});
            else if(id ===2)
        this.setState({imageFile : img03});
            else if(id ===3)
        this.setState({imageFile : img04});
            else if(id ===4)
        this.setState({imageFile : img05});
            else if(id ===5)
        this.setState({imageFile : img06});
            else if(id ===6)
        this.setState({imageFile : img07});
            else if(id ===7)
        this.setState({imageFile : img08});
            else if(id ===8)
        this.setState({imageFile : img09});
            else if(id ===9)
        this.setState({imageFile : img10});
            else if(id ===10)
        this.setState({imageFile : img11});
            else if(id ===11)
        this.setState({imageFile : img12});
    }
    _loadInitialState = async () => {
        try {
          let value = await AsyncStorage.getItem('ACTIVITYCODE'); // Get Token from localStrage
     
            this.setState({ isLoading: true, token: value }) // Start loadin . . . && token set in state .
            const {navigation} = this.props;
            //let imageId =  navigation.getParam('DataId', 'Its Null') + '.jpg';
            console.log(this.state.token);

            const data = {
                method: 'GET',
                headers: { 
                
                    "Authorization": this.state.token,
                    "Accept":"application/json", 
                },
                
              
            }

             let catId = navigation.getParam('DataId', 'It is Null');
             this._getPhotoWallpaper(catId - 1);  // get photo from wallpaper

             const url = 'http://api.holydef.ir/api/v1/article/' + catId;
             fetch(url, data)
             .then((response) => response.json())
             .then((responseJson) => {
                   this.setState({dataSource: responseJson.data});
                   //console.log(responseJson.data);
                   this.setState({ isLoading: false })
             })
             .catch((error) => {
                   console.log(error);
             })



        } catch (error) {
               console.log(error);
               
        }
      };


    _openViewPage(id,catId,Token){
        console.log(Token); // TO DO later
        this.props.navigation.navigate('Data', {articleId:id, categoryId: catId, Token: Token, onGoBack: () => this.refresh() });

    }

    refresh(){
        console.log("Category is Backed!")
        // TO DO for refreshing page whne is backed
    }

 

    renderItem = ({item})=>{
        return(
            
            
                <TouchableOpacity onPress={ () => this._openViewPage(item.id, item.cat_id,this.state.token)} style={styles.boxContainer}>
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
   
         componentDidMount(){

            this._loadInitialState().done(); // get Token and fetch data from API
         }
  
    

    render() { 

        const { errors, isLoading } = this.state

        return ( 

            <ImageBackground source = {this.state.imageFile} blurRadius={30} style={styles.container}>

                <Header navigation={this.props.navigation} />

                <LinderUnderMenu />

                <View style={styles.dataContainer}>

                {isLoading ? (
                    <View style={styles.loadingBox}>
                        <Text style={{paddingHorizontal:10 ,fontFamily:'IRANSans'}}>درحال بارگذاری</Text>
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
 
export default category;