import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    drawerBackdrop: { backgroundColor: '#00000087', flex: 1 },
    container: { flex: 1 },
    drawerHeader: { flexDirection: 'row', paddingTop: 10, paddingBottom: 20, alignItems: 'center', justifyContent: 'center' },
    profileImageContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    profileImage: { height: 100, width: 100, borderRadius: 50, borderColor: 'white', borderWidth: 1 },
    primaryText: { color: 'white', paddingRight: 10 },
    //fName: { fontSize: 17, fontWeight: '600' },
    fName: { fontSize: 22, fontWeight: '600' },
    //lName: { fontSize: 16, fontWeight: '600' },
    lName: { fontSize: 12, fontWeight: '600' },
    //secondaryText: { color: 'white', fontWeight: '600', fontSize: 12, paddingRight: 10, paddingTop: 10 },
    secondaryText: { color: 'white', fontWeight: '600', fontSize: 14, paddingRight: 10, paddingTop:3 },
    drawerItemsVectorIcon: { paddingLeft: 2 },
    drawerItemsVectorIconSize: 25

})