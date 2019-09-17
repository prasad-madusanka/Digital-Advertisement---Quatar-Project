import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';

import _styles from './main.style'
import _imgConfig from '../../configurations/image.config'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Views
import VehicleView from '../vehicle-view/vehicle.view'
import MobilesView from '../mobiles-view/mobiles.view'
import ElectronicsView from '../electronics-view/electronics.view'
import PropertyView from '../property-view/property.view'
import MatrimonyView from '../matrimony-view/matrimony.view'
import JobsView from '../jobs-view/jobs.view'

const CustomDrawerView = (props) =>
    (
        <ImageBackground source={_imgConfig.DRAWER_BACKGROUND} style={[{ width: '100%' }, _styles.container]} resizeMode={'cover'}>
            <View style={_styles.drawerBackdrop}>
                <SafeAreaView style={_styles.container}>
                    <View style={_styles.drawerHeader}>

                        <TouchableOpacity style={_styles.profileImageContainer} onPress={() => props.navigation.navigate('About')}>
                            <Image source={_imgConfig.APP_ICON}
                                style={_styles.profileImage} />
                        </TouchableOpacity>


                        <View style={_styles.container}>
                            <Text style={_styles.primaryText}>
                                <Text style={_styles.fName}>Welcome</Text>
                                {'\n'}
                                <Text style={_styles.lName}>to</Text>
                            </Text>
                            <Text style={_styles.secondaryText}>
                                Qatarmee
                </Text>
                        </View>
                    </View>


                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <DrawerNavigatorItems {...props} />
                    </ScrollView>

                </SafeAreaView>
            </View>
        </ImageBackground >
    )

const AppDrawerNavigator = createDrawerNavigator(
    {
        Vehicle: {
            screen: VehicleView,
            navigationOptions: getRouteSpecificIcon("ios-car", "md-car")
        },
        Mobile: {
            screen: MobilesView,
            navigationOptions: getRouteSpecificIcon("ios-phone-portrait", "md-phone-portrait")
        },
        Electronics: {
            screen: ElectronicsView,
            navigationOptions: getRouteSpecificIcon("ios-bulb", "md-bulb")
        },
        Property: {
            screen: PropertyView,
            navigationOptions: getRouteSpecificIcon("ios-business", "md-business")
        },
        Matrimony: {
            screen: MatrimonyView,
            navigationOptions: getRouteSpecificIcon("ios-heart", "md-heart")
        },
        'Jobs in Quatar': {
            screen: JobsView,
            navigationOptions: getRouteSpecificIcon("ios-phone-portrait", "md-phone-portrait")
        }
    },
    {
        initialRouteName: 'Vehicle',
        contentComponent: CustomDrawerView,
        backBehavior: 'initialRoute',
        contentOptions: {
            activeTintColor: 'black',
            activeBackgroundColor: '#d8d5d591',
            labelStyle: {
                fontWeight: '500',
                color: 'white',
                paddingRight: 5,

            }
        },
        drawerBackgroundColor: '#93C9FF'

    }
)

const AppContainer = createAppContainer(AppDrawerNavigator)

export default class MainView extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

function getRouteSpecificIcon(iosIcon, androidIcon) {
    return {
        drawerIcon: () => (
            <Ionicons
                name={Platform.OS === "ios" ? iosIcon : androidIcon}
                style={[_styles.drawerItemsVectorIcon]}
                color={'white'}
                onPress={() => navigation.openDrawer()}
                size={_styles.drawerItemsVectorIconSize}
            />
        )
    }
}