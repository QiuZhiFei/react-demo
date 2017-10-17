import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  NavigatorIOS,
  TabBarIOS,
  FlatList,
  Dimensions
} from "react-native";

import { HomeCell } from './homeCell'

let {height, width} = Dimensions.get('window');

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    console.log("init", props, context);
    this._onButtonPress = this._onButtonPress.bind(this);
    console.log(height);
  }

  _onButtonPress() {
    this.props.navigator.push({
      component: Home,
      title: "Push",
      passProps: { type: "push" }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={{width: width - 20}}
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => <HomeCell>{item.key}</HomeCell>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width,
    height: height,
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

export class MainHomeNav extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{ flex: 1 }}
        ref="nav"
        initialRoute={{
          title: "DBM",
          component: Home,
          rightButtonTitle: "Add",
          onRightButtonPress: () => this._handleNavigationRequest()
        }}
      />
    );
  }

  _handleNavigationRequest() {
    this.refs.nav.push({
      component: Home,
      title: "Add",
      passProps: { type: "add" }
    });
  }
}
