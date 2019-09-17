import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

const _styles = StyleSheet.create({
    adventureCategoriesCard: {
        flex: 1, minHeight: 90, marginTop: 2, backgroundColor: 'white',
        borderBottomWidth: 1.1,
        borderColor: '#dedede'
    },
    adventureCategoriesCardContent: { padding: 5, flex: 1, flexDirection: 'row' },
    cardImage: { height: 80, width: 80, borderRadius: 0, alignSelf: 'center' },
    cardText: { flex: 3, paddingLeft: 10 },
    cardTitle: { fontSize: 16, paddingTop: 2, fontWeight: '500' },
    cardDescription: { fontSize: 14, color: '#908f8f', paddingTop: 2 },
    rates: { fontSize: 14, fontWeight: '400', color: 'black', paddingTop: 2 },
    subData: { flex: 1, fontSize: 12, color: '#908f8f', paddingTop: 2 }
})

export default class VehicleList extends Component {
    render() {
        return (

            <TouchableOpacity onPress={this.props.onCardPress}>
                <View style={_styles.adventureCategoriesCard}>
                    <View style={_styles.adventureCategoriesCardContent}>

                        <Image source={this.props.imageUri} style={_styles.cardImage}></Image>
                        <View style={_styles.cardText}>
                            <Text style={_styles.cardTitle}>{this.props.title}</Text>
                            <Text style={_styles.cardDescription}>{this.props.location}</Text>
                            <Text style={_styles.rates}>{this.props.rate}</Text>
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <Text style={_styles.subData}>Condition: {this.props.condition}</Text>
                                <Text style={_styles.subData}>Added: {this.props.addedOn}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}