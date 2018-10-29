import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Dimensions,
    View,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default class MyCalendar extends Component {
    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Text>{new Date().toString()}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});