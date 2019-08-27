import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { height } from '../../constants';

export default class CalendarComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            markedDate : {}
        }
    }
    getOverrideStyle = () => ({
        'stylesheet.calendar.header':{
            header: {
                paddingLeft: 10,
                paddingRight: 10,
                marginTop:10,
                alignItems: 'flex-start',
              },
            monthText: {
                color:'black',
                fontWeight:'500',
                fontSize: 15,

              },
        },
        'stylesheet.calendar.main':{
            monthView: {
                paddingTop:10,
            }
        }
    });

    render() {
        return (
            <CalendarList
                theme={this.getOverrideStyle()}
                hideDayNames={true}
                markedDates={{[this.state.markedDate]: {selected: true, selectedColor: '#FF8C00'}}}
                hideExtraDays={false}
                style={{ width:'95%', height: height * 0.55 }}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                // format like '2019-08-22'
                current={ new Date().toISOString().substr(0,10) }

                // if mindate comes from returnView component then we need to show the mindate
                // mindate is received from departureview component selected date for logic reasons
                minDate={ this.props.minDate ? this.props.minDate : new Date().toISOString().substr(0,10) } 
                onDayPress={(day) => {
                    this.setState({
                        markedDate : day.dateString,
                    });
                    this.props.callTimePicker(day);
                }}
            />
        );
    };
};

// functional component 
export const WeekStrip = () => {
    return (
        <View style={styles.dayStrip}>
                    <Text style={styles.dayTextStyle}>S</Text>
                    <Text style={styles.dayTextStyle}>M</Text>
                    <Text style={styles.dayTextStyle}>T</Text>
                    <Text style={styles.dayTextStyle}>W</Text>
                    <Text style={styles.dayTextStyle}>T</Text>
                    <Text style={styles.dayTextStyle}>F</Text>
                    <Text style={styles.dayTextStyle}>S</Text>
                </View>
    )
};

const styles =StyleSheet.create({
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
});