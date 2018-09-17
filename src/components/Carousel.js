import React , {Component} from 'react';
import { View, Text , TouchableOpacity, StyleSheet , ImageBackground, Platform} from 'react-native';
import Carousel from "react-native-carousel-control";
import colors from '../styles/colors';
import normalize from '../styles/normalizeText';


class CarouselComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <View style={{backgroundColor:'#333', width:'100%', height:'100%'}}>
                <Carousel swipeThreshold={0.1}    pageStyle={{backgroundColor:'transparent', borderRadius: 5,  }}>

                    <View style={styles.container}>
                        <ImageBackground source={require('../assets/img/img-01.png')} style={styles.backgroundImage} >
                            <TouchableOpacity style={styles.tocuContainer}>
                                <View style={styles.viewTextContainer}>
                                    <Text style={styles.textStyling}>سلام بر حسین</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

              

                </Carousel>
            </View>
         );
    }
}
 
const styles  = StyleSheet.create({

 container:{
     backgroundColor: colors.themeBackground,
     flex: 1,
     justifyContent: 'center', 
     width:'100%'
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
    flex:1,

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

export default CarouselComponent;