import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import Avatar from '../assets/poster/avatar.png';
import Banner2 from '../assets/poster/sangchi.png';

const Movies = ({navigation}) => {

  const films = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      <ScrollView style={{backgroundColor: COLORS.background}}>
        <View style={styles.container}>
            <View style={styles.pageTitle}>
                <Text style={styles.pageTitletext}>Movies</Text>
            </View>

            <View style={styles.filmList}>

            {films.map((index) => (
              <TouchableOpacity key={index}>
                <View style={styles.film}>
                  <Image 
                    style={styles.filmBanner}
                    source={Banner2} 
                  />
                  <View style={styles.filmData}>
                    <Text style={styles.filmName}>Shang-Chi</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
              
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 60
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
  filmList: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  film: {
    width: 155,
    height: 'auto',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 30 
  },
  filmBanner: {
    resizeMode: 'cover',
    width: 160,
    height: 250
  },
  filmData: {
    
  },
  filmName: {
    color: COLORS.primary,
    fontSize: 20
  },
})

export default Movies