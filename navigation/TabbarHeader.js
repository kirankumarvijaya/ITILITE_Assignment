import React from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { MONTH_NAMES } from '../constants';


class TabbarHeader extends React.PureComponent {
    render() {
        const { focused, routeName } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.onSelect(routeName)}
            >
                <View style={[styles.container, focused ? styles.active : styles.inactive]}>
                    <View style={styles.paddingVertical}>
                        <Text style={styles.headerTextStyle}>{routeName}</Text>
                        { routeName === 'Departure Date' ? this._renderDepartureHeader() : this._renderReturnHeader()}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    _renderDepartureHeader(){
        const { departureDate, departureTime} = this.props;
        let dateStringArray = departureDate && departureDate.split('-');
        let monthName = departureDate && MONTH_NAMES[Number(dateStringArray[1])-1];
        return (
            <>
            <Text style={styles.dateTextStyle}>{ departureDate === '' ? 'Date' : `${dateStringArray[2]} ${monthName} ${dateStringArray[0]}` }</Text>
            <Text style={styles.timeTextStyle}>{ departureTime === '' ? 'Time' : departureTime }</Text>
            </>
        )
    }

    _renderReturnHeader(){
        const { returnDate, returnTime } = this.props;
        let dateStringArray = returnDate && returnDate.split('-');
        let monthName = returnDate && MONTH_NAMES[Number(dateStringArray[1])-1];
        return (
            <>
            <Text style={styles.dateTextStyle}>{ returnDate === '' ? 'Date' : `${dateStringArray[2]} ${monthName} ${dateStringArray[0]}` }</Text>
            <Text style={styles.timeTextStyle}>{ returnTime === '' ? 'Time' : returnTime }</Text>
            </>
        )
    }

    onSelect = (routeName) => {
        // this will navigate to the specific tab
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
        borderColor: '#FF8C00'
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
        fontSize: 18,
        fontWeight:'bold',
    },
    timeTextStyle: {
        fontSize: 13,
        fontWeight:'200',
        color:'darkgrey'
    },
    paddingVertical: {
        paddingVertical:12,
        flex:1,
        justifyContent:'space-between'
    }
});

const mapStateToProps = ({departureTime, departureDate, returnDate, returnTime}) => {
    return{
        departureTime,
        departureDate,
        returnDate,
        returnTime,
    }
};

export default connect(mapStateToProps,null)(TabbarHeader);