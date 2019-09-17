import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import _styles from './property.style'
import Ionicons from 'react-native-vector-icons/Ionicons'

class PropertyView extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> PropertyView </Text>
            </SafeAreaView>
        )
    }
}

const AppStackNavigator = createStackNavigator({
    Property: {
        screen: PropertyView,
        navigationOptions: {
            title: "Property",
            headerTransparent: false,
            headerTitleStyle: {
                color: 'black'
            }
        }
    }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Ionicons
                    name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                    style={{ paddingLeft: 10, paddingTop: 3 }}
                    color={'black'}
                    onPress={() => navigation.openDrawer()}
                    size={25}
                />
            )
        }
    }
})

export default createAppContainer(AppStackNavigator)
