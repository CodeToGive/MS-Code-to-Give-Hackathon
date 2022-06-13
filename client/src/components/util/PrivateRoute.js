<<<<<<< HEAD
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={(props) => {
                return !isAuthenticated && !loading ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                );
            }}
        />
    );
};

export default PrivateRoute;
=======
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={(props) => {
                return !isAuthenticated && !loading ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                );
            }}
        />
    );
};

export default PrivateRoute;
>>>>>>> f40eff7415c9db2a174e29b6c4bc2f8641e200c2
