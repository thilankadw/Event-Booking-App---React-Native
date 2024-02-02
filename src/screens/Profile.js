import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { Auth } from '../services'

const Profile = ({navigation}) => {

    const SignOut = () => {
        Auth.SignOut()
        .then(
            () => {console.log('signed out'); navigation.navigate('Main')}
        ).catch(
            () => {console.log(error)}
        )
    }

    return (
        <>
            <View style={styles.container}>            
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitletext}>Profile</Text>
                </View>
                <View style={styles.profileLinks}>
                    <View style={styles.profileLink}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('Ticket')}}
                        >
                            <Text style={styles.profileLinkText}>My Tickets</Text>
                        </TouchableOpacity>                   
                    </View>
                    <View style={styles.profileLink}>
                        <TouchableOpacity
                            onPress={SignOut}
                        >
                            <Text style={styles.profileLinkText}>Sign Out</Text>
                        </TouchableOpacity>                   
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: COLORS.background,
        width: 'auto',
        flex: 1,
        gap: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
        
    },
    pageTitle: {
        marginTop: 20
    },
    pageTitletext: {
        color: COLORS.textWhite,
        fontSize: 40,
        fontWeight: '300',
        textTransform: 'uppercase'
    },
    profileLinks: {
        gap: 40
    },
    profileLinkText: {
        color: COLORS.textWhite,
        fontSize: 25
    },
    profileLink: {
        padding: 1,
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor:  COLORS.textWhite,
        width: 300
    },

})

export default Profile