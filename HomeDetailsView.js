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

export default class pushCompentHiddenTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.goBack}>
                    跳回去
                </Text>
            </View>
        );
    }
    goBack = () => {
        this.props.navigator.pop(
            {

            }
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('pushCompentHiddenTab', () => pushCompentHiddenTab);

