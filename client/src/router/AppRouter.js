import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {Home} from '../components/home/Home';
import {ListFilms} from '../components/films/ListFilms';
import {LoginScreen} from '../components/auth/LoginScreen';
import {MainScreen} from '../components/mainScreen/MainScreen';
import {startChecking} from '../actions/auth';
import {getCards} from '../actions/films';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';



export const AppRouter = () => {


    const {checking,id} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
        dispatch(getCards());
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/home"
                        component={Home}
                        isAuthenticated={!!id}

                    />

                    <PublicRoute
                        exact
                        path="/category/:category"
                        component={ListFilms}
                        isAuthenticated={!!id}
                    />

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!id}
                    />

                    <PrivateRoute
                        exact
                        path="/main"
                        component={MainScreen}
                        isAuthenticated={!!id}
                    />


                    <Redirect to="/home"/>
                </Switch>
            </div>
        </Router>
    )
}
