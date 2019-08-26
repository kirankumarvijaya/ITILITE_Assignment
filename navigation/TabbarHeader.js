import React from 'react';
import {
    TouchableWithoutFeedback,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class TabbarHeader extends React.PureComponent {
    render() {
        const { focused, routeName, departureDate, departureTime, returnDate, returnTime } = this.props;
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
        return (
            <>
            <Text style={styles.dateTextStyle}>{ departureDate === '' ? 'Date' : departureDate }</Text>
            <Text style={styles.timeTextStyle}>{ departureTime === '' ? 'Time' : departureTime }</Text>
            </>
        )
    }

    _renderReturnHeader(){
        const { returnDate, returnTime } = this.props;
        return (
            <>
            <Text style={styles.dateTextStyle}>{ returnDate === '' ? 'Date' : returnDate }</Text>
            <Text style={styles.timeTextStyle}>{ returnTime === '' ? 'Time' : returnTime }</Text>
            </>
        )
    }

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
        fontSize: 18,
        fontWeight:'500',
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

const mapStateToProps = ({departureTime, departureDate, returnDate, returnTime}) => {
    console.log("came here===>",departureTime);
    return{
        departureTime,
        departureDate,
        returnDate,
        returnTime,
    }
};

export default connect(mapStateToProps,null)(TabbarHeader);