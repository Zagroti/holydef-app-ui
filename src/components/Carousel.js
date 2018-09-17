import React , {Component} from 'react';
import { View, Text , TouchableOpacity, StyleSheet , ImageBackground, Platform} from 'react-native';
import Carousel from "react-native-carousel-control";
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';

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

class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sourceFile: img01,
            currentPage: 1 ,

         }
    }


    handleOnPageChange(position) {
        //alert(position + 1); 
        this.setState({currentPage:position});

            if(position ===0)
                this.setState({currentPage:position, sourceFile : img01});
            else if(position ===1)
                this.setState({currentPage:position, sourceFile : img02});
            else if(position ===2)
                this.setState({currentPage:position, sourceFile : img03});
            else if(position ===3)
                this.setState({currentPage:position, sourceFile : img04});
 
    }
    render() { 
        return ( 

            <ImageBackground source= {this.state.sourceFile} blurRadius={4} style={{ width:'100%', height:'100%', }}>
                 {this.props.children}
                <Carousel swipeThreshold={0.1}  onPageChange={this.handleOnPageChange.bind(this) } currentPage={ this.state.currentPage }   pageStyle={{backgroundColor:'transparent', borderRadius: 5,  }}>
                    
                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/01.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>سلام بر حسین</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>


                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/02.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>سلام بر حسین</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>


                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/03.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>سلام بر حسین</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>



                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/04.jpg')} style={styles.backgroundImage} >
                            <TouchableOpacity style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>سلام بر حسین</Text>
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
     backgroundColor: colors.themeBackground,
     flex: 1, 
     width:'100%' ,

 },
 tocuContainer:{
     backgroundColor: 'transparent', 
     justifyContent: 'flex-end', 
     width: '100%',
     height: '90%',
     
 },
 backgroundImage: {
    width: '100%',
    height: '100%',
    flex:1, 
    borderWidth: 3  ,
    borderColor: '#fff',

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