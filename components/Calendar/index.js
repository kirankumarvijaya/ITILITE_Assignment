import React from 'react';
import {
    Dimensions,
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
                            alignItems: 'flex-start',
                          },
                        monthText: {
                            color:'black',
                            fontWeight:'500',
                          },
                    }
                }}
                hideDayNames={true}
                markedDates={{[this.state.markedDate]: {selected: true, selectedColor: 'orange'}}}
                hideExtraDays={false}
                style={{ width:'95%', height: height * 0.58 }}
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