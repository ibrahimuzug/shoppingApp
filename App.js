import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { BottomNavigation, Text } from 'react-native-paper';
import 'react-native-vector-icons';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const App: () => React$Node = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  state = {
    index: 1,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });


  return (
    <View>
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  bottom: {
    bottom: 0,
  }

});

export default App;
