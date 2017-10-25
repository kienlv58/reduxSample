/**
 * Created by kien.lovan on 10/23/2017.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {connect} from 'react-redux'
class ViewDetails extends Component {

    render() {

        console.log("propdetail",this.props);


        return (
            <View style={styles.container}>
                <Text>{this.props.datadetail}</Text>
            </View>
        );
    }
}

export default connect(state=>{
    return {
        datadetail:state.reducerTinhToan.current
    }
})(ViewDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});