import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'

const SeatSelection = () => {

    const dates = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
    <>
        <View style={styles.container}>

            <View style={styles.numTicketContainer}>
                <Text style={styles.numTicketsText}>Number of Tickets</Text>
                <TextInput
                    value='33' 
                    style={styles.numTicketInput}/>
            </View>

            <View>
                <Text>Date & Time</Text>
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false} // Optional: hides horizontal scroll indicator
                        contentContainerStyle={styles.datesContainer}
                    >
                        {dates.map((index) => (
                            <View key={index} style={styles.day}>
                                <Text style={styles.month}>12</Text>
                                <Text style={styles.date}>13</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>

        </View>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: COLORS.background,
        width: 'auto',
        flex: 1,
        gap: 60,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    numTicketContainer: {
        gap: 20,
        alignItems: 'center'
    },
    numTicketsText: {
        color: COLORS.textWhite,
        fontSize: 30
    },
    numTicketInput: {
        borderColor: COLORS.primary,
        borderWidth: 2,
        fontSize: 30,
        color: COLORS.primary,
        borderRadius: 40,
        paddingLeft: 30,
        width: 100,
    },
    datesContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 15
    },
    month: {
        color: COLORS.textWhite
    },
    date: {
        color: COLORS.textWhite
    },
})

export default SeatSelection