import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    NavigatorIOS,
    TabBarIOS
} from 'react-native';

import { MainHomeNav } from './home'

export class App extends Component {
    render() {
        return (
            <RootVC />
        )
    }
}

class RootVC extends Component {
    render() {
        return (
            <MainTabVC />
        )
    }
}

class MainTabVC extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tab : 'home'
        }
    }

    render() {
        return (
             <TabBarIOS 
                barTintColor = 'white'
                tintColor = 'green'
            >
                <TabBarIOS.Item
                    title='home'
                    selected={this.state.tab === 'home'}
                    onPress={() => {
                       this._changeTab('home')
                    }}
                    >
                    <MainHomeNav />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='search'
                    selected={this.state.tab === 'search'}
                    onPress={() => {
                        this._changeTab('search')
                    }}
                    >
                    <View style={{flex: 1, backgroundColor: 'yellow'}}>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }

    _changeTab(_tab) {
        if (_tab) {
            this.setState({
                tab: _tab
            })
        }
    }
}