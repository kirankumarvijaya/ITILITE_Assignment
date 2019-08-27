import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { CalendarList } from 'react-native-calendars';

const { height } = Dimensions.get('window');

export default class CalendarComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            markedDate : {}
        }
    }
    render() {
        return (
            <CalendarList
                theme={{
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
                }}
                hideDayNames={true}
                markedDates={{[this.state.markedDate]: {selected: true, selectedColor: '#FF8C00'}}}
                hideExtraDays={false}
                style={{ width:'95%', height: height * 0.55 }}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                current={'2019-08-25'}
                minDate={'2019-08-01'}
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
}

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
})