import React, { Component } from 'react'
import { Button, SafeAreaView, View, TextInput, ScrollView, FlatList, Modal, Text } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import VehicleList from './vehicle.list'
import VehicleFilter from './vehicle.filter'

import _styles from './vehicle.style'
import _appStyles from '../../../app.styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

import configs from '../../configurations/image.config'

export class VehicleView extends Component {

    constructor(props) {
        super(props)
        this.state = { isVisible: false }
    }

    render() {
        return (
            <View style={_styles.containerView}>
                <View style={_styles.filterSection}>
                    <TextInput style={_appStyles.textInput}
                        placeholder="What are you looking for ?"
                        placeholderTextColor={'#5f5f5f'} />
                </View>

                <View style={_styles.detailSection}>
                    <ScrollView style={{ flex: 1, paddingTop: 2 }}>

                        <FlatList data={configs.VehicleList}
                            renderItem={({ item }) =>
                                <VehicleList
                                    imageUri={item.imageUri}
                                    title={item.title}
                                    location={item.location}
                                    rate={item.rate}
                                    condition={item.condition}
                                    addedOn={item.addedOn}
                                />
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />


                    </ScrollView>
                </View>


                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>


                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#f4f2f2'
                        }}>
                            <View style={{ padding: 10, flexDirection: 'row' }}>
                                <Ionicons
                                    name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
                                    style={{ flex: 1, paddingLeft: 10 }}
                                    onPress={() => { this.setState({ isVisible: false }) }}
                                    size={20}
                                />
                                <Text style={{ flex: 4, textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Filter Options</Text>
                                <Ionicons
                                    name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                                    style={{ flex: 1, paddingRight: 10, textAlign: 'right' }}
                                    onPress={() => { alert('Hello im search') }}
                                    size={20}
                                />
                            </View>
                        </View>
                        <AppContainer />
                    </SafeAreaView>

                </Modal>


            </View>
        )
    }

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerRight: (
                <Ionicons
                    name={Platform.OS === "ios" ? "ios-options" : "md-options"}
                    style={{ paddingRight: 10, paddingTop: 3 }}
                    color={'black'}
                    onPress={params.showFilter}
                    size={25}
                />
            ),
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({ showFilter: () => { this.setState({ isVisible: true }) } });
    }

}

const AppStackNavigator = createStackNavigator({
    Vehicle: {
        screen: VehicleView,
        navigationOptions: {
            title: "Vehicle",
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
            ),
            // headerRight: (
            //     <Ionicons
            //         name={Platform.OS === "ios" ? "ios-options" : "md-options"}
            //         style={{ paddingRight: 10, paddingTop: 3 }}
            //         color={'black'}
            //         onPress={() => manageState()}
            //         size={25}
            //     />
            // )
        }
    }
})

export default createAppContainer(AppStackNavigator)
