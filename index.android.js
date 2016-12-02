/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import STNav from './STNavigation'
export default class pushCompentHiddenTab extends Component {
    render() {
        return (
            <STNav />
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('pushCompentHiddenTab', () => pushCompentHiddenTab);
