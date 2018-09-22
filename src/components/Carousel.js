import React , {Component} from 'react';
import { View, Text , TouchableOpacity, StyleSheet , ImageBackground, Platform} from 'react-native';
import Carousel from "react-native-carousel-control";
// --- styling of components --- --- --- ---
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';


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


 

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sourceFile: img01,
            currentPage: 0 ,

         }
    }

    navigateToData = (www) => { 
       console.log(www);
        this.props.navigation.navigate('Category', {DataId: www});

    }

    // --- Get image when i swipe image ---
    handleOnPageChange(position) {
   
                 if(position ===0)
                    this.setState({currentPage:position, sourceFile : img01});
                    else if(position ===1)
                    this.setState({currentPage:position, sourceFile : img02});
                    else if(position ===2)
                    this.setState({currentPage:position, sourceFile : img03});
                    else if(position ===3)
                    this.setState({currentPage:position, sourceFile : img04});
                    else if(position ===4)
                    this.setState({currentPage:position, sourceFile : img05});
                    else if(position ===5)
                    this.setState({currentPage:position, sourceFile : img06});
                    else if(position ===6)
                    this.setState({currentPage:position, sourceFile : img07});
                    else if(position ===7)
                    this.setState({currentPage:position, sourceFile : img08});
                    else if(position ===8)
                    this.setState({currentPage:position, sourceFile : img09});
                    else if(position ===9)
                    this.setState({currentPage:position, sourceFile : img10});
                    else if(position ===10)
                    this.setState({currentPage:position, sourceFile : img11});
                    else if(position ===11)
                    this.setState({currentPage:position, sourceFile : img12});
        
    }

    render() { 
        return ( 

            <ImageBackground source= {this.state.sourceFile} blurRadius={30} style={{ width:'100%', height:'100%', }}>
                 {this.props.children}
                <Carousel swipeThreshold={0.2}  onPageChange={this.handleOnPageChange.bind(this) } currentPage={ this.state.currentPage }   pageStyle={{backgroundColor:'transparent', borderRadius: 5,  }}>
                     
                     {/*--------------- Items of category --------------- */}
                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/01.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'1')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>تاریخ دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/02.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'2')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>عملیات ها</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/03.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'3')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>سرداران دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/04.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'4')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>ستاد مشترک دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/05.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'5')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>دفاع مقدس در آیینه هنر</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/06.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'6')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>دستاوردهای دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/07.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'7')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>ناگفته های دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/08.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'8')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>جغرافیا دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/09.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'9')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>نقش مردم در دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/10.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'10')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>بانک مقالات و پایان نامه ها</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/11.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'11')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>آزادگان و جانبازان</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                                         {/*--------------- Items of category --------------- */}
                                         <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/12.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity onPress={this.navigateToData.bind(this,'12')} style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                <Text style={styles.textStyling}>گاه شمار دفاع مقدس</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>





              

                </Carousel>
            </ImageBackground>
         );
    }
}
 
const styles  = StyleSheet.create({

 container:{
     backgroundColor: 'transparent',
     width:'90%',
     height:'80%',
     alignSelf: 'center',
     borderWidth: 10  ,
     borderColor: '#fff',

 },
 tocuContainer:{
     backgroundColor: 'transparent', 
     justifyContent: 'flex-end', 
     width: '100%',
     height: '100%',
     
 },
 backgroundImage: {
    width: '100%',
    height: '100%',  

},
viewTextContainer:{
    backgroundColor:colors.white,
    width:'70%',
    height:50,
    borderRadius: 40,
    alignSelf: 'center', 
    justifyContent:'center',
    marginBottom: 20
},
textStyling:{
    fontFamily: 'IRANSans',
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? normalize(14) : normalize(16), 


}
});

export default  CarouselComponent;