import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { persistor } from 'store/store';
import Loadable from 'react-loadable';
import { GET_MOVIES_REQUEST } from './store/actions/movies';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './app';

const AppErrorComponent = () => (
    <p className="error--application">
        Oops! Application currently is not available
    </p>
);

class Root extends Component {
    componentDidMount() {
        const { getMoviesList } = this.props;
        getMoviesList();
    }

    render() {
        return (
            <ErrorBoundary render={AppErrorComponent}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <App />
                    </Router>
                </PersistGate>
            </ErrorBoundary>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getMoviesList() {
        dispatch(GET_MOVIES_REQUEST());
    }
});

Root = connect(
    null,
    mapDispatchToProps
)(Root);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        hydrate(
            <Provider store={store}>
                <Root />
            </Provider>,
            document.getElementById('app')
        );
    });
};
