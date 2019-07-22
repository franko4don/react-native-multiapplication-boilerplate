import React, { Component } from 'react';
import { Scene, Router, Stack} from 'react-native-router-flux';
import Login from '../components/Containers/boiler/Auth/Login';
import { connect } from 'react-redux';

const BoilerRouter = () => (
        
            <Stack key="boilerRoot" hideNavBar>
                
                <Scene
                    key="login"
                    title={'Login'}
                    component={Login}

                />

            </Stack>
         
);

export {BoilerRouter};
