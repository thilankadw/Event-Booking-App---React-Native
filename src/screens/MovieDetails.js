import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors';
import Avatar from '../assets/poster/avatar.png';
import Banner2 from '../assets/poster/sangchi.png';

const MovieDetails = ({navigation}) => {
  return (
    <>
        <ScrollView style={{backgroundColor: COLORS.background}}>
            <View style={styles.container}>

                <View style={styles.bannerContainer}>
                    <Image 
                        style={styles.filmBanner}
                        source={Banner2} 
                    />
                </View>

                <View style={styles.filmDataContainer}>
                    <View style={styles.filmDetails}>
                        <Text style={styles.filmName}>Shang-Chi</Text>
                        <Text style={styles.filmDate}>2 hours 29 minutes</Text>
                        <Text style={styles.filmDate}>Action Adventure Sci-fi</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('SeatSelection')}}
                        style={styles.continuebtn}>
                        <Text style={styles.continuebtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: COLORS.background,
        width: '100%',
        flex: 1,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerContainer: {
        width: '100%',
        height: 500,
        overflow: 'hidden'
    },
    filmBanner: {
        resizeMode: 'cover',
        width: '100%',
        height: 500,
        borderRadius: 20
    },
    filmDataContainer: {
        backgroundColor: COLORS.grey,
        width: 300,
        height: 'auto',
        borderRadius: 15
    },
    filmDetails: {
        padding: 15,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filmName: {
        color: COLORS.textWhite,
        fontSize: 30,
        fontWeight: '500'
    },
    filmDate: {
        color: COLORS.textWhite,
        opacity: 0.6
    },
    continuebtn: {
        backgroundColor: COLORS.primary,
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 30
    },
    continuebtnText: {
        color: COLORS.background,
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: '300'
    },
})
export default MovieDetails;