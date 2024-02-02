import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import Avatar from '../assets/poster/avatar.png';
import Seat from '../assets/icons/seat.png';
import BarCode from '../assets/icons/barcode.png'
const TicketData = () => {

    const seats = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
    <>
        <View style={styles.container}>

            <View style={styles.pageTitle}>
                <Text style={styles.pageTitletext}>Tickets</Text>
            </View>

            <View style={styles.ticket}>

                <View style={styles.filmData}>
                    <Image
                        source={Avatar}
                        style={styles.filmBanner}
                    />
                    <View style={styles.filmDetails}>
                        <Text style={styles.filmName}>Avengers: Infinity War</Text>
                        <Text style={styles.filmDate}>2 hours 29 minutes</Text>
                        <Text style={styles.filmDate}>Action Adventure Sci-fi</Text>
                    </View>
                </View>

                <View style={styles.seatData}>
                    <Image
                        source={Seat}
                    />
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false} // Optional: hides horizontal scroll indicator
                        contentContainerStyle={styles.seatsContainer}
                    >
                        {seats.map((index) => (
                            <View key={index} style={styles.seat}>
                                <Text style={styles.seatNumber}>H2</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.timeDataset}>
                    <View style={styles.timeData}>
                        <View>
                            <Text style={styles.time}>1530h</Text>
                        </View>
                        <View>
                            <Text style={styles.time}>12.03.2024</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.barcodeContainer}>
                    <Image
                        style={styles.barcode}
                        source={BarCode}
                    />
                </View>


            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
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
    ticket: {
        backgroundColor: COLORS.textWhite,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    filmData: {
        flexDirection: 'row',
        paddingBottom: 15,
        borderBottomWidth:  0.9,
        borderBottomColor: COLORS.grey
    },
    filmBanner: {
        resizeMode: 'cover',
        width: 100,
        height: 150,
        borderRadius: 10
    },
    filmDetails: {
        marginTop: 20,
        marginLeft: 10,
        gap: 8
    },
    filmName: {
        fontSize: 20,
        color: COLORS.background,
        fontWeight: '500',
        width: 200
    },
    filmDate: {
        fontSize: 15,
        color: COLORS.background,
        opacity: 0.6,
        fontWeight: '600'
    },
    seatData: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        borderBottomWidth:  0.9,
        borderBottomColor: COLORS.grey,
        paddingBottom: 15
    },
    seatsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 15
    },
    seat: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    seatNumber: {
        color: COLORS.background
    },
    timeDataset: {
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth:  0.9,
        borderBottomColor: COLORS.grey,

    },
    timeData: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap:  60
    },
    time: {
        color: COLORS.background,
        fontSize: 23
    },
    barcode : {
        width: '100%',
    },
    barcodeContainer : {
        paddingTop: 30,
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default TicketData;