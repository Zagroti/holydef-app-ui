// import React, { Component } from 'react';
// import { 
//   View, 
//   Text, 
//   Button , 
//   StyleSheet, 
//   ActivityIndicator

// } from 'react-native';
// import VideoPlayer from 'react-native-video-player';
// import Header from './headerVideoPlayer';

// import colors from '../styles/colors';


// export default class SoundPlayer extends Component {
//   constructor() {
//     super();

//     this.state = {
//       video: { width: undefined, height: undefined, duration: undefined },
//       thumbnailUrl: undefined,
//       soundurl: undefined, autoplay: false, 
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true })
//     const {navigation} = this.props;
//     // -------- get parametr from navigation in other component
//      let catId = navigation.getParam('articleId', 'Its Null'); 
//      let articleId = navigation.getParam('categoryId', 'Its Null');
//      let Token = navigation.getParam('Token', 'Token is Null');

//      const data={
//        method: 'GET',
//        headers:{
//                 "Authorization": Token,
//                 "Accept":"application/json", 
//        }
//      }
//      global.fetch('http://api.holydef.ir/api/v1/article/' + catId +"/"+ articleId, data)
//       .then(res => res.json())
//       .then((responseJson) => {this.setState({
//           soundurl: responseJson.data.audio,
//           thumbnailUrl: responseJson.data.image,
//           autoplay: true,
//       })
//       console.log("fetch is data : "+ this.state.soundurl); // TODO later delete it
//       this.setState({ isLoading: false })
//     }
//       )
//       .catch((error) => {
//         console.log(error);
//   })
    
     
//   }

//   stopPlaybackPing= () => {
//     this.props.navigation.goBack();
//   }

//   render() {

//     const { errors, isLoading } = this.state
//     return (
//       <View style={styles.container}>

//           <View style={styles.one}>
//                 < Header navigation={this.props.navigation} />
//           </View>
//           <View style={styles.two}>

//                 {isLoading ? (

//                         <View style={styles.loadingBox}>
//                             <Text style={{paddingHorizontal:10,fontFamily:'IRANSans'}}>درحال بارگذاری</Text>
//                             <ActivityIndicator color="white" />
//                         </View>

//                         ) : (
//                             <VideoPlayer
//                             endWithThumbnail
//                             thumbnail={{ uri: this.state.thumbnailUrl }}
//                             video={{ uri: this.state.soundurl }}
//                             videoWidth={this.state.video.width}
//                             videoHeight={this.state.video.height}  
//                             duration={this.state.video.duration}
//                             disableFullscreen={true}
//                             autoplay= {true} // its importent after complate fetch will be wroking
//                             onEnd={this.stopPlaybackPing}

//                             ref={r => this.player = r}
//                             />
//                     )}
      
//           </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         width:'100%',
//         height:'100%',
//         justifyContent: 'center', 
//         backgroundColor: '#333'

//     },
//     one:{
//         flex:2,
//     },
//     two:{
//         flex:3,

//     },

//     loadingBox:{
//         flexDirection: 'row',
//         width:200,
//         height:60,
//         backgroundColor : colors.silver,
//         borderRadius:100,
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'center',
//         paddingHorizontal: 20,
//     },
// })





   

        import React,{ Component} from 'react';
        import {View, Text, StyleSheet, Button, Image, BackgroundImage, TouchableOpacity , AppState} from 'react-native';
        // import Video from 'react-native-video';
        import Video from 'react-native-af-video-player';
        import Header from './headerVideoPlayer';

        import colors from '../styles/colors';
        
// const url = 'http://media.mtvpersian.net/mp3/Reza%20Pishro/Reza-Pishro-Kalafegi.mp3';


class SoundPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      appState: AppState.currentState,
      currentTime: null,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      screenType:'content'
    }; 
  }



  componentWillMount(){
    const {navigation} = this.props;
    let geturl = navigation.getParam('soundURL', 'It is Null');
    this.setState({soundSource: geturl});

    console.log(geturl)
   // console.log(GetVideoURL);

  }


  render() { 

    const url = this.state.soundSource;
    const logo = 'http://holydef.ir/logo.pn';
    const theme = {
      title: '#FFF',
      more: '#446984',
      center: '#ffffff',
      fullscreen: 'transparent',
      volume: '#ffffff',
      scrubberThumb: '#234458',
      scrubberBar: '#DBD5C7',
      seconds: '#DBD5C7',
      duration: '#DBD5C7',
      progress: '#446984',
      loading: '#DBD5C7'
    }
    const video = (

      
                    <Video  style={styles.hh}
                    autoPlay
                    url={url} 
                    theme={theme}
                    logo={logo}
                    />

                  );





    return ( 
  
      <View  style={styles.container}>  
            <Image style={styles.bg} source={require('../assets/img/music.jpg')} >
            </Image>
          <View style={styles.one}>
                < Header navigation={this.props.navigation} />
           </View>
  
      {video}
  
    </View>


     );
  }
}
 


const styles = StyleSheet.create({
  container:{ 
  flex: 1,
  flexDirection:'column',
  backgroundColor: 'transparent',
  alignItems:'center',

  },
  one:{
    position:'absolute',
    left:0,
    width:'100%',   
    zIndex:99
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
  imgContainer:{
    backgroundColor:'#666',
    flex:2,


  },
  bContainer:{
    alignItems:'center'
  },

  btnContainer:{ 
    padding: 10,
    margin: 10,
    width:100,
    height:100,
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center', 
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  progressContainer:{
    width:'100%',
    height: 2,
    backgroundColor:'#fff'
  },
  timeDurationContainer:{ 
    flexDirection: 'row',
    backgroundColor: '#999999',
    justifyContent:'space-between',
    padding:10,

  },
  trackStyle:{
    backgroundColor:'#666',
  },
  thumbStyle:{
    backgroundColor:'#d63031',

  },
  hh:{
    flex:1,
    backgroundColor:'transparent',
    width:'100%', 
    height:400,
    justifyContent:'center',
    alignItems:'center', 

  },
  bg:{
    flex:1,
    position:'absolute',
    width:'100%'
  }


});


export default SoundPlayer;