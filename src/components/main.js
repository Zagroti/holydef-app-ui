import React, { Component } from 'react'
import { Text, ImageBackground ,View,  StyleSheet, Platform , Image , AsyncStorage } from 'react-native'
import { Header, Left, Button, Icon, Right, Body, Title, Drawer, Container  } from 'native-base'
import {SideBar} from './SideBar'
import CarouselComponent from './Carousel';
import LinderUnderMenu from './lineUnderMenu';
import normalize from '../styles/normalizeText';





  class Main extends Component  {
    constructor(props) {
      super(props)
      this.state = { Token: null}
    }
  closeDrawer() {
    this.drawer._root.close() 
  }
  openDrawer() {
    this.drawer._root.open()
  }


  _search(Token) {
    this.props.navigation.navigate('Search',{Token:Token});

  }



  componentWillMount = async () => {

          try {
            let value = await AsyncStorage.getItem('ACTIVITYCODE'); // Get Token from localStrage
      
              this.setState({Token: value }) // Start loadin . . . && token set in state .
              console.log("Token Is: " + this.state.Token);

          } catch (error) {
                console.log(error); 
          }
  };



  render() {

    const {navigate} = this.props.navigation;
    return (
      <ImageBackground blurRadius={30} source={require('../assets/img/08.jpg')}  style={styles.backgroundImage} >
        <Drawer
        side="right"
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigate={navigate} closeDrawer={()=>this.closeDrawer()}/>}
        onClose={() => this.closeDrawer()}
      >
       
        <CarouselComponent navigation={this.props.navigation}     >
          <Header style={styles.headerStyling} >
            <Left style={{flex:1}}>
              <Button transparent onPress={ () => this._search(this.state.Token)}>
                      <Icon name='search' />
              </Button>
            </Left>
            <Body style={{flex:1}}>
              <Button transparent  >
              <Image source={require('../assets/img/logotypew.png')}  style={{width: 120, height: 100,  resizeMode: 'contain', alignItems:'center'}} />  
              </Button>
            </Body>
            <Right style={{flex:1}}>
              <Button transparent onPress={() => this.openDrawer()}>
                      <Icon name='menu' />
              </Button>
            </Right>
          </Header>

          <LinderUnderMenu />

          
        </CarouselComponent>
      


      </Drawer>

     

      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
      width: '100%',
      height: '100%', 
      flex:1,

  },

  headerStyling:{
    backgroundColor: 'transparent',
    shadowOffset: {height: 0, width: 0}, 
    shadowOpacity: 0,
    elevation: 0, 
    borderColor: 'transparent',
  },
  titleStyle:{
    fontFamily: 'IRANSans',
    fontSize: Platform.OS === 'ios' ? normalize(18) : normalize(20), 
  },
})


 export {Main}