import React, { Component } from 'react';
import { SafeAreaView, View, Text, ScrollView, Platform, TouchableOpacity } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import SegmentedControlTab from "react-native-segmented-control-tab";
import RoundCheckbox from 'rn-round-checkbox';

class ConditionComponent extends Component {

    constructor(props) {
        super(props)

        this.state = { tabIndex: 0 }
    }

    handleIndexChange = index => {
        this.setState({
            tabIndex: index
        });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', textAlign: 'center', padding: 12 }}>Vehicle Condition</Text>

                    <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 10 }}>
                        <SegmentedControlTab
                            values={["All", "New", "Used"]}
                            selectedIndex={this.state.tabIndex}
                            onTabPress={this.handleIndexChange}

                        />
                    </View>

                </View>

            </View>
        )
    }
}

class BodyTypeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ANY: { bType: 'Any Type', checkbox: false },
            BT_Hatchback: { bType: 'Hatchback', checked: false },
            BT_Sedan: { bType: 'Sedan', checked: false },
            BT_MPV: { bType: 'MPV', checked: false },
            BT_SUV: { bType: 'MUV/SUV', checked: false },
            BT_Crossover: { bType: 'Crossover', checked: false },
            BT_Coupe: { bType: 'Coupe', checked: false },
            BT_Convertible: { bType: 'Convertible', checked: false },
            BT_Wagon: { bType: 'Wagon', checked: false },
            BT_Van: { bType: 'Van', checked: false },
            BT_Jeep: { bType: 'Jeep', checked: false }
        }
    }

    onSelectAnyBodyType(status) {

        this.setState({
            BT_Hatchback: { bType: 'Hatchback', checked: status },
            BT_Sedan: { bType: 'Sedan', checked: status },
            BT_MPV: { bType: 'MPV', checked: status },
            BT_SUV: { bType: 'MUV/SUV', checked: status },
            BT_Crossover: { bType: 'Crossover', checked: status },
            BT_Coupe: { bType: 'Coupe', checked: status },
            BT_Convertible: { bType: 'Convertible', checked: status },
            BT_Wagon: { bType: 'Wagon', checked: status },
            BT_Van: { bType: 'Van', checked: status },
            BT_Jeep: { bType: 'Jeep', checked: status }
        })
    }

    updateStatus(item) {
        let record = this.state[item]
        switch (item) {
            case 'ANY':
                this.setState({
                    ANY: {
                        bType: record.bType,
                        checked: !record.checked
                    }
                });
                this.onSelectAnyBodyType(!this.state.ANY.checked)
                break;

            case 'BT_Hatchback': this.setState({
                BT_Hatchback: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Sedan': this.setState({
                BT_Sedan: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_MPV': this.setState({
                BT_MPV: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_SUV': this.setState({
                BT_SUV: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Crossover': this.setState({
                BT_Crossover: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Coupe': this.setState({
                BT_Coupe: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Convertible': this.setState({
                BT_Convertible: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Wagon': this.setState({
                BT_Wagon: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Van': this.setState({
                BT_Van: {
                    bType: record.bType,
                    checked: !record.checked
                }
            }); break;

            case 'BT_Jeep': this.setState({
                BT_Jeep: {
                    BT_Jeep: record.bType,
                    checked: !record.checked
                }
            }); break;
        }
    }

    render() {


        if (Platform.OS === 'ios') {
            return (
                <ScrollView>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('ANY')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.ANY.checked}
                                    onValueChange={() => this.updateStatus('ANY')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '700', paddingLeft: 10, paddingTop: 1 }}>Any Type</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Hatchback')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Hatchback.checked}
                                    onValueChange={() => this.updateStatus('BT_Hatchback')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Hatchback</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Sedan')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Sedan.checked}
                                    onValueChange={() => this.updateStatus('BT_Sedan')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Sedan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_MPV')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_MPV.checked}
                                    onValueChange={() => this.updateStatus('BT_MPV')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>MPV</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_SUV')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_SUV.checked}
                                    onValueChange={() => this.updateStatus('BT_SUV')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>MUV/SUV</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Crossover')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Crossover.checked}
                                    onValueChange={() => this.updateStatus('BT_Crossover')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Crossover</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Coupe')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Coupe.checked}
                                    onValueChange={() => this.updateStatus('BT_Coupe')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Coupe</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Convertible')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Convertible.checked}
                                    onValueChange={() => this.updateStatus('BT_Convertible')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Convertible</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Wagon')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Wagon.checked}
                                    onValueChange={() => this.updateStatus('BT_Wagon')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Wagon</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Van')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Van.checked}
                                    onValueChange={() => this.updateStatus('BT_Van')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Van</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#f4f2f2' }}>
                        <TouchableOpacity onPress={() => this.updateStatus('BT_Jeep')}>
                            <View style={{ padding: 12, flexDirection: 'row' }}>
                                <RoundCheckbox
                                    size={20}
                                    checked={this.state.BT_Jeep.checked}
                                    onValueChange={() => this.updateStatus('BT_Jeep')}
                                />
                                <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, paddingTop: 1 }}>Jeep</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            )
        } else {
            return (
                <View>

                    <RoundCheckbox
                        size={24}
                        checked={this.state.isChecked}
                        onValueChange={() => { this.setState({ isChecked: !this.state.isChecked }) }}
                    />


                </View>
            )
        }


    }
}

class BrandComponent extends Component {
    render() {
        return (
            <View>
                <Text>Brand</Text>
            </View>
        )
    }
}

class RateComponent extends Component {
    render() {
        return (
            <View>
                <Text>Rate</Text>
            </View>
        )
    }
}

const tabNavigator = createMaterialTopTabNavigator({
    Condition: ConditionComponent,
    'Body Type': BodyTypeComponent,
    Brands: BrandComponent,
    Rate: RateComponent,
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: (Platform.OS === 'ios') ? '#238afe' : '#238afe',
        inactiveTintColor: (Platform.OS === 'ios') ? '#ababaf' : '#ababaf',
        upperCaseLabel: false,
        scrollEnabled: true,
        indicatorStyle: {
            height: 0
        },
        style: {
            backgroundColor: (Platform.OS === 'ios') ? 'white' : 'white',
            borderTopWidth: 1,
            borderTopColor: (Platform.OS === 'ios') ? '#f4f2f2' : '#f4f2f2'
        }
    }
})

export default AppContainer = createAppContainer(tabNavigator)
