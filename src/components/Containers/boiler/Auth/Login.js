import React, { Component } from 'react';
import {Text, ScrollView} from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {

    render() {
     
        return (
             
            <ScrollView>
                <Text>Hello</Text>
            </ScrollView>

        );
    }
}

const styles = {


}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {})(Login);
