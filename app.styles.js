import { StyleSheet, Platform } from 'react-native'
export default StyleSheet.create({
    container: { flex: 1 },
    textWhite: { color: 'white' },
    textBlack: { color: 'black' },
    hr: { borderBottomColor: '#dedede', borderBottomWidth: 1, paddingTop: 5 },
    source: { textAlign: 'center', paddingTop: 10, color: '#bdbdbd', fontSize: 11, fontWeight: '500' },
    textRight: { textAlign: 'right' },
    textLeft: { textAlign: 'left' },
    textCenter: { textAlign: 'center' },
    cardContainer: {
        margin: 10, backgroundColor: 'white', borderRadius: 5,
        ...Platform.select({
            ios: { shadowColor: '#000000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65 },
            android: { elevation: 8 }
        })
    },
    splashScreenContainer: {flex: 1, justifyContent: "center" },
    splashImage: { width: 100, height: 100, alignSelf: "center", resizeMode: "contain", borderRadius: 10 },
    appName: {
        paddingTop: 10,
        textShadowColor: '#ffffff6e',
        textShadowOffset: { width: -1, height: 0 },
        textShadowRadius: 10, textAlign: "center", fontSize: 32, color: "#ffffff", fontWeight: "bold"
    },
    appPoweredByAgency: { fontSize: 13.6, fontWeight: '500', textAlign: 'center', color: 'white', paddingTop: 5 },
    powerdBy: { textAlign: 'center', color: 'white', paddingTop: 10 },

    textInput:{
        height: 35,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: (Platform.OS == 'ios') ? 1 : 0,
        borderBottomWidth: 1,
        borderColor: "#f4f2f2",
        borderRadius: (Platform.OS == 'ios') ? 10 : 0,
        padding: 8,
        marginBottom: 6,
        marginTop: 8
    }
})