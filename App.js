import React, { useEffect, Fragment } from 'react';
import { View, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

const App: () => React$Node = () => {
  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
