 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './headerVideoPlayer';

import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

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
      playerState: PLAYER_STATES.PLAYING,
      screenType:'content',
      videoSource:''

    };
  }

        componentWillMount(){
          const {navigation} = this.props;
          let GetVideoURL = navigation.getParam('videoURL', 'It is Null');
          this.setState({videoSource: GetVideoURL});
          console.log(GetVideoURL);

        }
        onSeek = seek => {
          this.videoPlayer.seek(seek);
        };

        onPaused = playerState => {
          this.setState({
            paused: !this.state.paused,
            playerState,
          });
        };

        onReplay = () => {
          this.setState({ playerState: PLAYER_STATES.PLAYING });
          this.videoPlayer.seek(0);
        };

        onProgress = data => {
          const { isLoading, playerState } = this.state;
          // Video Player will continue progress even if the video already ended
          if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            this.setState({ currentTime: data.currentTime });
          }
        };

        onLoad = data => this.setState({ duration: data.duration, isLoading: false });

        onLoadStart = data => this.setState({ isLoading: true });

        onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

        onError = () => alert('Oh! ', error);

        exitFullScreen = () => {
          alert("Exit full screen");
        };

        enterFullScreen = () => {};

        onFullScreen = () => {
          if(this.state.screenType=='content')
            this.setState({screenType:'cover'});
         else
            this.setState({screenType:'content'});
        };

        renderToolbar = () => (
          <View >
            {/* <Text> toolbar </Text> */}
          </View>
        );

        onSeeking = currentTime => this.setState({ currentTime });
        
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.one}>
            < Header navigation={this.props.navigation} />
       </View>


        <View style={{flexGrow:2, }}>
              <Video
                onEnd={this.onEnd}
                onLoad={this.onLoad}
                onLoadStart={this.onLoadStart}
                onProgress={this.onProgress}
                paused={this.state.paused}
                ref={videoPlayer => (this.videoPlayer = videoPlayer)}
                resizeMode={this.state.screenType}
                onFullScreen={this.state.isFullScreen}
                source={{ uri: this.state.videoSource }}  // video sorce get from props
                style={styles.mediaPlayer}
                volume={10}
              />
              <MediaControls
                duration={this.state.duration}
                isLoading={this.state.isLoading}
                mainColor="#333"
                onFullScreen={this.onFullScreen}
                onPaused={this.onPaused}
                onReplay={this.onReplay}
                onSeek={this.onSeek}
                onSeeking={this.onSeeking}
                playerState={this.state.playerState}
                progress={this.state.currentTime}
                toolbar={this.renderToolbar()}
              />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
  one:{
    backgroundColor:'#333',
    height: 60,

},
});


export default VideoPlayer;