import React, { Component } from 'react';
import { View, Text, Button , StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Header from './headerVideoPlayer';


const VIMEO_ID = '179859217';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
      dataSource: ''
    };
  }

  componentDidMount() {
    global.fetch(`http://api.holydef.ir/api/v1/article/1/1`)
      .then(res => res.json())
      .then((responseJson) => {this.setState({

        dataSource: responseJson.data,
        videoUrl: responseJson.data.video,
        thumbnailUrl: responseJson.data.image,
      })
      console.log("fetch is data : "+ this.state.videoUrl); // TODO later delete it
    }
      )
     
     
  }

  render() {
    return (
      <View style={styles.container}>

       <View style={styles.one}>
            < Header />
       </View>
       <View style={styles.two}>
            <VideoPlayer
               endWithThumbnail
               thumbnail={{ uri: this.state.thumbnailUrl }}
                video={{ uri: this.state.videoUrl }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
            
                ref={r => this.player = r}
                />
       </View>
       
   

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        justifyContent: 'center', 
        backgroundColor: '#333'

    },
    one:{
        flex:2,
    },
    two:{flex:3,

    }
})









        {/* <Button
          onPress={() => this.player.stop()}
          title="Stop"
        />
        <Button
          onPress={() => this.player.pause()}
          title="Pause"
        />
        <Button
          onPress={() => this.player.resume()}
          title="Resume"
        /> */}