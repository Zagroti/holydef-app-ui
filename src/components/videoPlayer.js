 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from './headerVideoPlayer';

import Video from 'react-native-af-video-player'; 
//import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

class VideoPlayer extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false, 
      screenType:'content',
      videoSource:''

    };
    this.onclick = this.onclick.bind(this)
  }


  componentWillMount(){
    const {navigation} = this.props;
    let GetVideoURL = navigation.getParam('videoURL', 'It is Null');
    this.setState({videoSource: GetVideoURL});
    console.log(GetVideoURL);

  }

  onFullScreen(status) {
    // Set the params to pass in fullscreen status to navigationOptions
    console.log(status)
    this.setState({
      isFullScreen: status
    })
  }

  
     
  onclick(){
    console.log(this.state.isFullScreen)
  }
  render() {

    // const url = 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_30mb.mp4'
    const url = this.state.videoSource;
    // const url = 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3'
    const theme = {
      title: '#FFF',
      more: '#fff',
      center: '#fff',
      fullscreen: '#fff',
      volume: '#fff',
      scrubberThumb: '#E74C3C',
      scrubberBar: '#ffffff',
      seconds: '#ffffff',
      duration: '#fff',
      progress: '#fff',
      loading: '#E74C3C'
    }
  
    const logo = 'http://holydef.ir/logo.png';

 

    return (
      <View style={styles.container}>

          {!this.state.isFullScreen ? 
          (      
            // if is not full screen show close button else hide this button
                <View style={styles.one}>
                    < Header navigation={this.props.navigation} />
                </View>
          ) : (
            null
          )}


          <View style={styles.vierContainer}>
                <Video
                  autoPlay
                  url={url}   
                  theme={theme}
                  logo={logo}
                  resizeMode='cover'
                  rotateToFullScreen
                  onFullScreen={status => this.onFullScreen(status)}
                />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'flex-end',
  },
  one:{ 
    backgroundColor:'#000',
    height: 60,
    position: 'absolute',
    zIndex:99
  },
  vierContainer:{
    flexGrow:2, 
    width:'100%',   
    backgroundColor: '#000',
    justifyContent: 'center' 
  }

});


export default VideoPlayer;