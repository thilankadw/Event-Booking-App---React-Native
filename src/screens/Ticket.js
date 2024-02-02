import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/colors';
import Banner from '../assets/poster/nowplaying.png';
import Avatar from '../assets/poster/avatar.png';
import Banner2 from '../assets/poster/sangchi.png';

const Ticket = ({navigation}) => {

    const tickets = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <>
            <ScrollView style={{backgroundColor: COLORS.background}}>
            <View style={styles.container}>
                <View style={styles.pageTitle}>
                    <Text style={styles.pageTitletext}>Tickets</Text>
                </View>
                <View style={styles.ticketList}>

                {

                    tickets.map((index) => (
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('TicketData')}}
                        >
                            <View style={styles.ticket}>
                                <Image
                                    source={Avatar}
                                    style={styles.ticketBanner}
                                />
                                <View style={styles.movieDetails}>
                                    <Text style={styles.movieName}>Avengers: Infinity War</Text>
                                    <Text style={styles.movieData}>14h 15</Text>
                                    <Text style={styles.movieData}>16.13.2024</Text>
                                </View>
                            </View> 
                        </TouchableOpacity>
                        
                    ))

                }
                    <View style={styles.ticket}>
                        <Image
                            source={Avatar}
                            style={styles.ticketBanner}
                        />
                        <View style={styles.movieDetails}>
                            <Text style={styles.movieName}>Avengers: Infinity War</Text>
                            <Text style={styles.movieData}>14h 15</Text>
                            <Text style={styles.movieData}>16.13.2024</Text>
                        </View>
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
    ticketList: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    ticket: {
        backgroundColor: COLORS.grey,
        width: 360,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    ticketBanner: {
        resizeMode: 'cover',
        width: 100,
        height: 150
    },
    movieDetails: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 15,
        gap: 10
    },
    movieName: {
        color: COLORS.textWhite,
        fontSize: 20
    },
    movieData: {
        color: COLORS.textWhite,
        fontSize: 17,
        opacity: 0.5
    },
})
export default Ticket