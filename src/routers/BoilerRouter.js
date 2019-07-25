import React, { Component } from 'react';
import { Scene, Router, Stack} from 'react-native-router-flux';
import Login from '../components/Containers/boiler/Auth/Login';
import { connect } from 'react-redux';

class BoilerRouter extends Component {
    
    render(){
        return (
            
                <Scene key="home" component={Login} />
            
        );
    }
}

export default BoilerRouter;
