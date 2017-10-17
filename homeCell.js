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
  Image
} from "react-native";

export class HomeCell extends Component {
  constructor(props, context) {
    super(props, context);
    console.log("props ==");
    console.log(props);
  }

  _didSelect = () => {
    console.log('did select');
  }

  render() {
    return (
      <View onPress={this._didSelect}>
        <View style={{flexDirection: 'row'}} onPress={this._didSelect}>
          <View>
            <Image
              style={{ width: 44, height: 44 }}
              source={{
                uri:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3158585383,2942077611&fm=27&gp=0.jpg"
              }}
            />
          </View>
          <View>
            <Text style={{ flex: 1 }}> 网络原生态美女最大聚集地网络原集地网络原生态美女最大聚集地 </Text>
            <Text style={{ flex: 1 }}> des </Text>
          </View>
        </View>
      </View>
    );
  }
}
