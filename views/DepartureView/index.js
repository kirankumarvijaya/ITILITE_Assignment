import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import CalendarList from '../../components/Calendar/index';

const { width, height } = Dimensions.get('window');

export default class DepartureView extends React.Component{
    render(){
        return(
            <View> 
                <View style={styles.dayStrip}>
                    <Text style={styles.dayTextStyle}>S</Text>
                    <Text style={styles.dayTextStyle}>M</Text>
                    <Text style={styles.dayTextStyle}>T</Text>
                    <Text style={styles.dayTextStyle}>W</Text>
                    <Text style={styles.dayTextStyle}>T</Text>
                    <Text style={styles.dayTextStyle}>F</Text>
                    <Text style={styles.dayTextStyle}>S</Text>
                </View>
                <CalendarList/>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Text style={{color:'white'}}>Continue to Booking</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent:'space-around'
    },
    dayStrip: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
    },
    dayTextStyle:{
        fontSize:20,
        color:'lightgrey'
    },
    buttonStyle:{
        alignItems:'center',
        backgroundColor:'orange',
        paddingVertical:15,
        margin:10
    },  
});