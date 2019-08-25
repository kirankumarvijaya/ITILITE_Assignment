import React from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class TabbarHeader extends React.PureComponent {
    render() {
        const { focused, routeName } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.onSelect(routeName)}
            >
                <View style={[styles.container, focused ? styles.active : styles.inactive]}>
                    <View style={styles.paddingVertical}>
                        <Text style={styles.headerTextStyle}>{routeName}</Text>
                        <Text style={styles.dateTextStyle}>Date</Text>
                        <Text style={styles.timeTextStyle}>Time</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    onSelect = (routeName) => {
        this.props.onPress(routeName);
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginHorizontal: 10,
    },
    active: {
        borderBottomWidth: 3,
        borderColor: 'orange'
    },
    inactive: {
        borderBottomWidth: 3,
        borderColor: 'white'
    },
    headerTextStyle: {
        color: 'black',
        fontWeight: '500',
        fontSize: 15,
    },
    dateTextStyle:{
        fontSize: 13,
        fontWeight:'300',
    },
    timeTextStyle: {
        fontSize: 13,
        fontWeight:'200'
    },
    paddingVertical: {
        paddingVertical:20,
        flex:1,
        justifyContent:'space-between'
    }
});