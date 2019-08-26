import React from 'react';
import {
    Dimensions,
    Animated,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const { height, width } = Dimensions.get('window');
const arrayValue = ['01','02','03','04','05','06','07','08','09','10','11','12'];

export default class TimePicker extends React.Component {
    constructor() {
        super();
        this.state = {
            bounceValue: new Animated.Value(270),
            date: new Date(),
        };
        this.isHidden = true;
    }

    componentDidMount() {
        this._toggleView();
    }

    _toggleView() {
        let toValue = 270;
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
                    <View style={{ alignSelf:'flex-start', paddingLeft:10}}>
                        <Text> Select Time Slot</Text>
                    </View>
                    {/* <DatePicker
                        mode={'time'}
                        date={this.state.date}
                        onDateChange={date => this.setState({ date })}
                    /> */}
                    <View style={styles.hourListStyle}>
                        <View style={{flex:1}}>
                        <ScrollView 
                            contentContainerStyle={styles.hourList}
                            showsVerticalScrollIndicator={false}  
                            onScroll={this._handleScroll}
                            onScrollAnimationEnd={this._getValue}
                            >
                            {arrayValue.map( (item,key) => {
                                return <Text key={key} style={{padding:5}}>{item}</Text>
                            })}
                        </ScrollView>
                        </View>
                        <Text> = </Text>
                        <Text> 12:00 </Text>
                    </View>
                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => {
                            this._toggleView()
                        }}
                    >
                        <Text style={{textAlign:'center'}}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </Animated.View>
        )
    }

    _handleScroll(event){
        console.log(event.nativeEvent);
    }

    _getValue(event){
        console.log("came here",event);
    }
}

const styles = StyleSheet.create({
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 270,
    },
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    },
    hourListStyle:{
        paddingHorizontal:20,
        paddingVertical:10,
        height: height * 0.2,
        width: width * 0.4,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    hourList:{
        flexDirection:'column',
    },
    buttonStyle: {
        width: width * 0.9,
        padding: 10,
        backgroundColor: 'orange',
    },
})
