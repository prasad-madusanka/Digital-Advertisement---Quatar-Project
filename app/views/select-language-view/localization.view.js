import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, AsyncStorage } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainView from '../main-view/main.view'

import _styles from './localization.style'

class LocalizationView extends Component {

    list = [
        {
            lang: "English",
            langCode: 'en',
            country: "U.K."
        },
        {
            lang: "عربى",
            langCode: 'arb',
            country: "اساسي"
        }
    ]

    saveLanguage = async (item) => {
        if (AsyncStorage.getItem("lang") !== 'en' || AsyncStorage.getItem("lang") !== 'arb') {
            await AsyncStorage.setItem("lang", item.langCode)
        }

        let value = await AsyncStorage.getItem("lang")
        if (value === 'en' || value === 'arb') {
            this.props.navigation.navigate('Main')
        }

    }

    render() {

        return (
            <SafeAreaView>
                <View style={_styles.listContainer}>
                    <FlatList
                        data={this.list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.saveLanguage(item)}>
                                <View style={_styles.row}>
                                    <Text style={_styles.lang}>{item.lang}</Text>
                                    <Text style={_styles.country}>{item.country}</Text>
                                    <View style={_styles.hr}></View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const StackNavigator = createStackNavigator(
    {
        'Select Language': {
            screen: LocalizationView,
            navigationOptions: {
                title: "Select Language",
                headerTransparent: false,
                headerTitleStyle: {
                    color: 'black'
                }
            }
        }
    }
)

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer

