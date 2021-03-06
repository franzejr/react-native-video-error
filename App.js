/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Video from "react-native-video";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {
  play = () => {
    this.video.seek(0);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Video
          ref={(ref: Video) => {
            this.video = ref;
          }}
          style={{ height: 150, width: 250 }}
          source={{
            uri: "http://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_30mb.mp4",
            mainVer: 1,
            patchVer: 0
          }}
          paused={false}
          volume={1.0}
          muted={false}
          onError={e => {
            debugger;
          }}
          playWhenInactive={false}
          playInBackground={false}
        />
        <Button onPress={() => this.play()} title="Play" />
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
