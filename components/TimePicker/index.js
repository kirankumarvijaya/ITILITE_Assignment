import React from 'react';
import {
    Dimensions,
    Animated,
    StyleSheet,
    Platform,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';

const { height, width } = Dimensions.get('window');
const arrayValue = ['0:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

export default class TimePicker extends React.Component {
    constructor() {
        super();
        this.state = {
            bounceValue: new Animated.Value(280),
            index: 0,
            toDuration: '2:00 AM',
        };
        this.isHidden = true;
    }

    componentDidMount() {
        this._toggleView();
    }

    _toggleView() {
        let toValue = 280;
        if (this.isHidden) {
            toValue = 0;
        }
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: toValue,
                velocity: 3,
                tension: 2,
                friction: 8,
            }
        ).start();
        this.isHidden = !this.isHidden;

    }

    render() {
        return (
            <Animated.View
                style={[styles.subView,
                { transform: [{ translateY: this.state.bounceValue }] }]}
            >
                <View style={styles.container}>
                    <View style={{ alignSelf: 'flex-start', paddingLeft: 10, marginTop:10 }}>
                        <Text> Select Time Slot</Text>
                    </View>
                    <View style={styles.hourListStyle}>
                        {this._renderWheelPicker()}
                        <Text style={{fontSize:20}}>&#9664;</Text>
                        <Text>{this.state.toDuration}</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => {
                            this._toggleView();
                            this.props.getTimeRange(`${arrayValue[this.state.index]} to ${this.state.toDuration}`);
                        }}
                    >
                        <Text style={{ textAlign: 'center', color:'white' }}>Confirm Time</Text>
                    </TouchableHighlight>
                </View>
            </Animated.View>
        )
    }

    _renderWheelPicker() {
        return (
            <WheelPicker
                style={{ width: width * 0.3, height: height * 0.2, alignSelf: Platform.OS === 'ios' ? 'flex-start' : 'center' }} // dont specify height in ios
                selectedItem={this.state.index}
                data={arrayValue}
                selectedItemTextColor={'#FF8C00'}
                itemTextSize={16}
                selectedItemTextSize={20}
                onItemSelected={(item) => {
                    if (item == 21) { this.setState({ index: item, toDuration: '11:00 PM' }) }
                    else if (item == 22) { this.setState({ index: item, toDuration: '12:00AM' }) }
                    else {
                        this.setState({
                            index: item,
                            toDuration: arrayValue[(item + 2)]
                        })
                    }
                }}
                hideIndicator={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:5,
        backgroundColor: "#FFFFFF",
        height: 280,
    },
    container: {
        flex: 1,
       justifyContent:'space-around'
    },
    hourListStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    hourList: {
        flexDirection: 'column',
    },
    buttonStyle: {
        width: width,
        padding: 15,
        alignSelf:'center',
        backgroundColor: '#FF8C00',
    },
    rowStyle: {
        height: height * 0.1,
        alignItems: 'center',
    },
})
