import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Logo from '../assets/logo/logo.png';
import { COLORS } from '../constants/colors';
import Poster from '../assets/poster/mainscreenposter.png';

const Main = ({ navigation }) => {
  return (
    <>
        <View style={styles.container}>

                <View><Image source={Logo} /></View>

                <View style={styles.posterContainer}>
                    <View style={styles.poster}>
                        <Image 
                            style={styles.posterimage}
                            source={Poster} 
                        />
                    </View>
                </View> 

                <View>
                    <View style={styles.welcomeTextContainer}>
                        <Text style={styles.welcomeText}>BOOK YOUR</Text>
                        <Text style={styles.welcomeText}>FAVOURITE MOVIES</Text>
                    </View>
                </View>

                <View style={styles.authBtnsConttainer}>
                    <View>
                        <TouchableOpacity 
                            onPress={() => {navigation.navigate('SignIn')}}
                            style={[styles.authBtn, styles.authBtnText, { backgroundColor: COLORS.primary }]}
                        >
                            <Text style={[styles.authBtnText, {color: COLORS.background}]}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                            onPress={() => {navigation.navigate('SignUp')}}
                            style={[styles.authBtn, { backgroundColor: COLORS.background, borderColor: COLORS.textWhite, borderWidth: 2,}]}
                        >
                            <Text style={[styles.authBtnText, {color: COLORS.textWhite}]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>          
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.background
    },
    posterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    poster: {
        backgroundColor: COLORS.primary,
        width: 300,
        height: 300,
        borderRadius: 20,
        overflow: 'hidden',
    },
    posterimage: {
        width: '100%',
        resizeMode: 'center',
        bottom: 933
    },
    welcomeTextContainer: {
        marginTop: 30
    },
    welcomeText: {
        color: COLORS.textWhite,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '800',
        fontFamily: "Poppins-Black"
    },
    authBtn: {
        padding: 13,
        borderRadius: 35,
        width: 300
    },
    authBtnText: {
        fontSize: 19,
        fontWeight: '800',
        textAlign: 'center'
    },
    authBtnsConttainer: {
        marginTop: 40,
        gap: 25,
        marginBottom: 30
    }

})

export default Main