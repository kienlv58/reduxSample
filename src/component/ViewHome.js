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
 class ViewHome extends Component {

    render() {

        console.log("prop",this.props);
        console.log("data1",this.props.data1);
        console.log("state",this.state);
        return (
            <View style={styles.container}>
                <Button title="cong" onPress={()=>{this.props.dispatch({type:"TANG"})}}/>
                <Text>{this.props.data1}</Text>
                <Button title="tru" onPress={()=>{this.props.dispatch({type:"GIAM"})}}/>
            </View>
        );
    }
}

export default connect(state=>{
    console.log("aaaaa",state.reducerTinhToan);
    return {
        data1:state.reducerTinhToan.current
    }
})(ViewHome);

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