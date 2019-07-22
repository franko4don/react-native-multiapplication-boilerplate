import React, { Component } from 'react';
import { Scene, Router} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { BoilerRouter } from './routers/BoilerRouter';

class RouterComponent extends Component {

    constructor(props) {
        super();
       
    }


    render() {
     
        return (
             
            <Router> 
                <Scene key="root">
                    <BoilerRouter/>
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

export default connect(mapStateToProps, {})(RouterComponent);
