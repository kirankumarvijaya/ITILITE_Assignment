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
import { width, height } from '../../constants';


class ReturnView extends React.Component{
    constructor(){
        super();
        this.state = {
            isDatePressed : false,
            dateSelected:null,
            timeSelected:null,
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
        this.props.action.storeReturnDate(dateString);
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
    * Button ====> To submit the values
    */
    render(){
        return(
            <View style={styles.mainView}> 
                <WeekStrip />
                <CalendarList callTimePicker={(data) => this.callTimePicker(data)} minDate = { this.props.minDate }/>
                <TouchableHighlight 
                    disabled = { !( this.state.dateSelected && this.state.timeSelected )}
                    onPress={ () => { alert('Submitted Successfully') }}
                    style={styles.buttonStyle}>
                    <Text style={{color:'white'}}>Submit</Text>
                </TouchableHighlight>
                { this.state.isDatePressed && 
                    // TimePicker Component
                    <TimePickerComponent getTimeRange={ value => this._getTimeRange( value )}/> 
                }
                { this.state.isDatePressed && 
                    // overlay view
                    <View style={styles.overlayStyle}/>
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
        this.props.action.storeReturnTime( time );
    }
};

const styles = StyleSheet.create({
    mainView:{
        position:'relative',
        zIndex:0
    },
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
        backgroundColor:'#FF8C00',
        paddingVertical:20,
        margin:10,
        borderRadius: 10,
    },  
    overlayStyle: {
        width:width,
        height:height,
        backgroundColor:'lightgrey',
        opacity:0.5,
        zIndex: 2,
        position:'absolute',
    },
});

const mapStateToProps = ({departureDate}) => ({
    minDate : departureDate,
});

const mapDispatchToProps = (dispatch) => ({
    action : bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReturnView);