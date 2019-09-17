import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import _styles from './matrimony.style'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MatrimonyView extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text> MatrimonyView </Text>
            </SafeAreaView>
        )
    }
}

const AppStackNavigator = createStackNavigator({
    Matrimony: {
        screen: MatrimonyView,
        navigationOptions: {
            title: "Matrimony",
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
