import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    NavigatorIOS
} from 'react-native';

const onButtonPress= () => {
        
}

export class Home extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={onButtonPress}
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