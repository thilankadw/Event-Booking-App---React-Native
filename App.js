import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,

} from 'react-native';
import RootNavigation from './src/navigations';
import { COLORS } from './src/constants/colors';

function App() {

  return (
    <SafeAreaView style={styles.container}>
        <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20
  }
})

export default App;
