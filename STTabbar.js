/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeView from './HomeView';

class STTabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'HomeView'
        };
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    selected={this.state.selectedTab === 'HomeView'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'HomeView' })}>
                    <HomeView {...this.props}/>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#999',
    },
    selectedTextStyle:{
        color:'black',
    }
});
export default STTabbar;