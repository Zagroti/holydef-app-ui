import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header, Left, Button, Icon, Right, Body, Title, Drawer } from 'native-base'
import SideBar from './SideBar'

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
  render() {
    return (
      <Drawer
        side="right"
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()}
      >
        <Header>
          <Left>

          </Left>
          <Body>
            <Title>App Name</Title>
          </Body>
          <Right>
                <Button transparent onPress={() => this.openDrawer()}>
                        <Icon name='menu' />
                </Button>
          </Right>
        </Header>




      </Drawer>
    )
  }
}
module.exports = AppHeader