import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class ReturnView extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> ReturnView </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});