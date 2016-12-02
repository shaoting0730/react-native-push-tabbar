
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

import HomeDetails from './HomeDetailsView'


 class HomeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    <Text onPress={this.btnOnclick}>点击跳转二级界面</Text>
                </Text>
            </View>
        );
    }
     btnOnclick = () =>{
         this.props.navigator.push(
             {
                 component: HomeDetails,
                 passProps: {

                 }
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

export default HomeView;
