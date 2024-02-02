import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import Avatar from '../assets/poster/avatar.png';
import Banner2 from '../assets/poster/sangchi.png';

const Home = ({navigation}) => {

    const films = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <>
        <ScrollView style={{backgroundColor: COLORS.background}}>
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitletext}>Home</Text>
                </View>
                <View>
                    
                    <View style={styles.filmlist}>

                        <View style={styles.filmType}>
                            <Text style={styles.filmTypeText}>Now Playing</Text>
                        </View>
                        <ScrollView
                            horizontal
                            contentContainerStyle={styles.horizontalScroll}
                        >
                            {
                                films.map((index) => (
                                    <TouchableOpacity 
                                        onPress={() => navigation.navigate('MovieDetails')}
                                        key={index} 
                                        style={styles.filmContainer}>
                                        <Image 
                                            style={styles.filmBanner}
                                            source={Banner2} 
                                        />
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>

                        <View style={styles.filmType}>
                            <Text style={styles.filmTypeText}>coming soon</Text>
                        </View>
                        <ScrollView
                            horizontal
                            contentContainerStyle={styles.horizontalScroll}
                        >
                            {
                                films.map((index) => (
                                    <TouchableOpacity 
                                        onPress={() => navigation.navigate('MovieDetails')}
                                        key={index} 
                                        style={styles.filmContainer}>
                                        <Image 
                                            style={styles.filmBanner}
                                            source={Banner2} 
                                        />
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>

                </View>
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: COLORS.background,
        width: '100%',
        flex: 1,
        gap: 20,
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
    filmlist: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 80
    },
    filmTypeText: {
        color: COLORS.textWhite,
        fontSize: 25,
        fontWeight: '300',
        textTransform: 'lowercase'
    },
    horizontalScroll: {
        gap: 20,
        marginTop: 20
    },
    filmContainer: {
        width: 300,
        height: 370,
        overflow: 'hidden',
        borderRadius: 15
    },
    filmBanner: {
        width: 290,
        height: 370,
        resizeMode: 'cover'
    },
})
export default Home