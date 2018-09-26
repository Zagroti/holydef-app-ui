import React, { Component } from 'react';
import { View, Text, Button , StyleSheet, ActivityIndicator } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Header from './headerVideoPlayer';

import colors from '../styles/colors';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined, autoplay: false, 
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const {navigation} = this.props;
     let catId = navigation.getParam('categoryId', 'Its Null');
     let articleId = navigation.getParam('articleId', 'Its Null');

     global.fetch('http://api.holydef.ir/api/v1/article/' + catId +"/"+ articleId)
      .then(res => res.json())
      .then((responseJson) => {this.setState({

        videoUrl: responseJson.data.video,
        thumbnailUrl: responseJson.data.image,
        autoplay: true,
      })
      console.log("fetch is data : "+ this.state.videoUrl); // TODO later delete it
      this.setState({ isLoading: false })
    }
      )
      .catch((error) => {
        console.log(error);
  })
     
     
  }

  stopPlaybackPing= () => {
    this.props.navigation.goBack();
  }

  render() {

    const { errors, isLoading } = this.state
    return (
      <View style={styles.container}>

       <View style={styles.one}>
            < Header navigation={this.props.navigation} />
       </View>
       <View style={styles.two}>

            {isLoading ? (

                    <View style={styles.loadingBox}>
                        <Text style={{paddingHorizontal:10}}>درحال بارگذاری</Text>
                        <ActivityIndicator color="white" />
                    </View>

                    ) : (
                        <VideoPlayer
                        endWithThumbnail
                        thumbnail={{ uri: this.state.thumbnailUrl }}
                        video={{ uri: this.state.videoUrl }}
                        videoWidth={this.state.video.width}
                        videoHeight={this.state.video.height}  
                        duration={this.state.video.duration}
                        disableFullscreen={true}
                        autoplay= {true} // its importent after complate fetch will be wroking
                        onEnd={this.stopPlaybackPing}

                        ref={r => this.player = r}
                        />

                )}
   
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
    },
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