import React, {Component} from 'react';
import {
    FlatList,
    Dimensions,
    View,
    Text,
    TouchableOpacity, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import MyCalendar from './MyCalendar'

export default class MyCalendarScreen extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    render() {
        let {startDate,endDate} = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 10, backgroundColor: '#EAEAEA'}}>
                    <View style={styles.dateView}>
                        <View>
                            <TouchableOpacity style={styles.dateButton}
                                              onPress={() => {

                                              }}>
                                <Text style={{fontSize: 16}}>
                                    {startDate.getFullYear().toString() + "年" +
                                    (startDate.getMonth() + 1).toString() + "月" +
                                    startDate.getDate().toString() + "日"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 10}}>
                                —
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.dateButton}
                                              onPress={() => {

                                              }}>
                                <Text style={{fontSize: 16}}>
                                    {endDate.getFullYear().toString() + "年" +
                                    (endDate.getMonth() + 1).toString() + "月" +
                                    endDate.getDate().toString() + "日"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 6, backgroundColor: '#FFFFFF'}}>
                        <MyCalendar/>
                    </View>
                    <View style={{flex: 3}}>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={styles.bottomClearButton}
                            onPress={() => {

                            }}
                        >
                            <Text style={{color: '#199ED8', fontSize: 16}}>清除所选</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            style={styles.bottomOkButton}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                        >
                            <Text style={{color: '#FFFFFF', fontSize: 16}}>确认</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dateView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF'
    },
    dateButton: {
        width: 160,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAEA'
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    bottomClearButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    bottomOkButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#199ED8'
    }
});