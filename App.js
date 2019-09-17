import React, { Component } from 'react';
import { Text, View, LayoutAnimation, NativeModules, Image, StatusBar, AsyncStorage } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

//Views
import MainView from './app/views/main-view/main.view'
import LocalizationView from './app/views/select-language-view/localization.view'

import _styles from './app.styles'
import _imgConfig from './app/configurations/image.config'

import Ionicons from 'react-native-vector-icons/Ionicons'
Ionicons.loadFont()

const _gradientStyles = {
  gradientColors: ['#fbf601', '#8b2b3d'],
  angleCentre: { x: 0.5, y: 0.5 },
  angle: 135,
  useAngle: true
}

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {

  poweringAgencyP1 = 'Qatarmee.com'

  constructor() {
    super()
    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {

    var CustomLayoutSpring = {
      duration: 350,
      create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
      },
    };

    setTimeout(() => {
      LayoutAnimation.configureNext(CustomLayoutSpring);
      this.setState({ isLoading: false })
    }, 2000)
  }

  render() {

    // if (this.state.isLoading) {
    //   return (
    //     <LinearGradient useAngle={_gradientStyles.useAngle} angle={_gradientStyles.angle} angleCenter={_gradientStyles.angleCentre} colors={_gradientStyles.gradientColors} style={_styles.container}>

    //       <View style={_styles.splashScreenContainer}>

    //         <Image
    //           style={_styles.splashImage}
    //           source={_imgConfig.APP_ICON}
    //         />


    //         {/* <Text style={_styles.appName}>CP Tourism</Text> */}

    //         <Text style={_styles.powerdBy}>
    //           Powerd by
    //         </Text>

    //         <Text style={_styles.appPoweredByAgency}>
    //           {this.poweringAgencyP1}
    //         </Text>

    //         <StatusBar hidden />
    //       </View >

    //     </LinearGradient>



    //   )
    // }

    return (
      <MainView />
    )
  }
}


