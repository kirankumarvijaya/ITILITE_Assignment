import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import CalendarList from '../../components/Calendar/index';
import TimePickerComponent from '../../components/TimePicker/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../../actionCreators';

class DepartureView extends React.Component{
    constructor(){
        super();
        this.state = {
            isDatePressed : false,
            timeSelected : null,
            dateSelected:null,
        }
    }

    callTimePicker = ({ dateString }) => {
        this.setState({
            isDatePressed: !this.state.isDatePressed,
            dateSelected: dateString,
        });
        this.props.action.storeDepartureDate(dateString);
    };

    toggleTimePicker = () => {
        this.setState({
            isDatePressed: ! this.state.isDatePressed,
        });
    };



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
                <CalendarList callTimePicker={(data) => this.callTimePicker(data)}/>
                <TouchableHighlight 
                    disabled = { !( this.state.dateSelected && this.state.timeSelected )}
                    onPress={() => {
                        this.props.navigation.navigate('Return Date');
                    }}
                    style={styles.buttonStyle}>
                    <Text style={{color:'white'}}>Continue to Booking</Text>
                </TouchableHighlight>
                { this.state.isDatePressed && <TimePickerComponent getTimeRange={ value => this._getTimeRange( value )}/> }
            </View>
        );
    }

    _getTimeRange( time ) {
        this.toggleTimePicker();
        this.setState({
            timeSelected: time,
        })
        this.props.action.storeDeparturnTime( time );
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

const mapDispatchToProps = (dispatch) => ({
    action : bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DepartureView);