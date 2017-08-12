import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    NavigatorIOS
} from 'react-native';

export class Home extends Component {

    constructor(props, context) {
        super(props, context)
        console.log("init", props, context);
        console.log("props == ", this.props);
    }

    onButtonPress() {
        console.log("hehe", this.props);
        this.props.navigator.push({
            component: Home,
            title: 'Genius'
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onButtonPress.bind(this)}
                    title="Press Me"
                    accessibilityLabel="See an informative alert"
                />
            </View>

            //   <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //       Welcome to React Native!
            //     </Text>
            //     <Text style={styles.instructions}>
            //       To get started, edit index.ios.js
            //     </Text>
            //     <Text style={styles.instructions}>
            //       Press Cmd+R to reload,{'\n'}
            //       Cmd+D or shake for dev menu
            //     </Text>
            //   </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});