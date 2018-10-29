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
import {createStackNavigator} from 'react-navigation';
import MyCalendarScreen from './MyCalendar/MyCalendarScreen';

class HomeScreen extends Component {
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
                        this.props.navigation.navigate("MyCalendarScreen")
                    }}
                >
                    <Text>{new Date().toString()}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    MyCalendarScreen: {
        screen: MyCalendarScreen,
    },
}, {
    initialRoute: 'Home'
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});