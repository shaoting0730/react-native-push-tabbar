import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import STTabbar from './STTabbar';
 class RootView extends Component {
     constructor(props) {
         super(props);
         this.renderScene = this.renderScene.bind(this);
     }

     goBack() {
         return NaviGoBack(_navigator);
     }

     renderScene(route, navigator) {
         let Component = route.component;
         _navigator = navigator;
         return (
             <Component navigator={navigator} route={route} />
         );
     }

     configureScene(route, routeStack) {
         return Navigator.SceneConfigs.PushFromRight;
     }
    render() {
        return (
            <View style={{flex: 1}}>

                <Navigator
                    ref='navigator'
                    style={styles.navigator}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
            component:STTabbar,
            name: 'RootView'
          }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default RootView;
