import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import CalendarList, { WeekStrip } from '../../components/Calendar/index';
import TimePickerComponent from '../../components/TimePicker/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../../actionCreators';
import { height, width } from '../../constants';


class DepartureView extends React.Component{
    constructor(){
        super();
        this.state = {
            isDatePressed : false,
            timeSelected : null,
            dateSelected:null,
        }
    }

    /* 
    callTimePicker function
    Input: dateString - String
    Functions: 
    * toggle the timepicker based on the state value isDatePressed
    * store the datestring in state value to show in the calendar component
    * calling the actionCreator to store the date in the rootReducer
    */
    callTimePicker = ({ dateString }) => {
        this.setState({
            isDatePressed: !this.state.isDatePressed,
            dateSelected: dateString,
        });
        this.props.action.storeDepartureDate(dateString);
    };

    /* 
    toggleTimePicker function
    Input - none
    Functions:
    * toggle the timepicker based on the state value isDatePressed
    */
    toggleTimePicker = () => {
        this.setState({
            isDatePressed: ! this.state.isDatePressed,
        });
    };

    /* 
    render Method
    Components: 
    * WeekStrip ==> Shows the Week names
    * CalendarList ===> show the list of dates (Third party library used Name:'react-native-calendars')
    * Button ====> To switch over to the ReturnView tab
    * 
    */
    render(){
        return(
            <View style={{position:'relative',zIndex:0}}> 
                <WeekStrip />
                <CalendarList callTimePicker={(data) => this.callTimePicker(data)}/>
                <TouchableHighlight 
                    disabled = { !( this.state.dateSelected && this.state.timeSelected )}
                    onPress={() => {
                        this.props.navigation.navigate('Return Date');
                    }}
                    style={styles.buttonStyle}>
                    <Text style={{color:'white',fontSize: 15}}>Continue to Booking</Text>
                </TouchableHighlight>
                { this.state.isDatePressed && <TimePickerComponent getTimeRange={ value => this._getTimeRange( value )}/> }
                { this.state.isDatePressed && 
                    // overlay view
                    <View style={{ 
                                    width:width,
                                    height:height,
                                    backgroundColor:'lightgrey',
                                    opacity:0.5,
                                    zIndex: 2,
                                    position:'absolute',
                                }}/>
                }
            </View>
        );
    }

    /* 
    _getTimeRange function
    Input - time (String)
    function:
    * toggle the time picker
    * store the selected time range string to state value of the component
    * dispatch action to store the time in rootReducer
     */
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
    buttonStyle:{
        alignItems:'center',
        backgroundColor:'#FF8C00',
        paddingVertical:20,
        margin:10,
        borderRadius: 10,
    },  
});

const mapDispatchToProps = (dispatch) => ({
    action : bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DepartureView);