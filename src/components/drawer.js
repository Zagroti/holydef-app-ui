import React, { Component } from 'react'
import { Text, ImageBackground , StyleSheet, View } from 'react-native'
import { Header, Left, Button, Icon, Right, Body, Title, Drawer, Container } from 'native-base'
import SideBar from './SideBar'
import CarouselComponent from './Carousel';
import LinderUnderMenu from './lineUnderMenu';




export default class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }

  _search() {
    alert("Search is woring");
  }
  render() {
    return (
      <ImageBackground source={require('../assets/img/gradient.png')}  style={styles.backgroundImage} >
        <Drawer
        side="right"
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()}
      >
      

        <CarouselComponent>
          <Header style={{ backgroundColor: 'transparent', border:0, borderColor: 'transparent',   }} >
            <Left>
              <Button transparent onPress={() => this._search()}>
                      <Icon name='search' />
              </Button>
            </Left>
            <Body>
              <Title>HolyDef</Title>
            </Body>
            <Right>
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
})



module.exports = AppHeader