import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import TabbarHeader from './TabbarHeader';


export default class CustomTabbar extends React.Component {
    render() {
        const { navigation } = this.props;
        const routes = navigation.state.routes; //get the routes value ie tabbar config
        return (
            <SafeAreaView style={{ backgroundColor: 'transparent' }}>
                <View style={styles.container}>
                    {routes.map((route, index) => {
                        return (
                            <View style={styles.tabBarItem} key={index}>
                                <TabbarHeader //passing props like routeName,focused param to highlight the selected tab
                                    key={ route.key }
                                    routeName={ route.routeName }
                                    onPress={( routeName ) => this.navigationHandler( routeName )}
                                    focused={ navigation.state.index === index }
                                    index={ index }
                                />
                            </View>
                        );
                    })}
                </View>
            </SafeAreaView>
        );
    }

    navigationHandler = ( routeName ) => {
        this.props.navigation.navigate( routeName );
      }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
    },
    tabBarItem: {
        flex: 1,
    }
});

