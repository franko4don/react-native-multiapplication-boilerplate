import React, { Component } from 'react';
import {View} from 'react-native';
import { Scene, Router, Stack} from 'react-native-router-flux';
import { connect } from 'react-redux';
import BoilerRouter from './routers/BoilerRouter';
import Login from './components/Containers/boiler/Auth/Login';

class RouterComponent extends Component {

    constructor(props) {
        super();
       
    }


    render() {
        return (
             
                <Router>     
                    <Scene key="root" hideNavBar>
                    <Scene key="home" component={Login} />
                        
                    </Scene>
                </Router>
                
           

        );
    }
}

const styles = {


}

const mapStateToProps = (state) => {
    return {}
};

export default RouterComponent;
