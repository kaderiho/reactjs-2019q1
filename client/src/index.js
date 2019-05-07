import React, { Component } from 'react';
import { hydrate } from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Provider, connect } from 'react-redux';
import { GET_MOVIES_REQUEST } from './store/actions/movies';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { persistor } from 'store/store';
import App from './app';

const AppErrorComponent = () => (<p className="error--application">
    Oops! Application currently is not available
</p>);

class Root extends Component {
    componentDidMount() {
        this.props.getMoviesList();
    }

    render() {
        return (
            <ErrorBoundary render={AppErrorComponent}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <App/>
                    </Router>
                </PersistGate>
            </ErrorBoundary>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMoviesList() {
        dispatch(GET_MOVIES_REQUEST());
    }
});

Root = connect(null, mapDispatchToProps)(Root);

hydrate(
    <Provider store={store}>
        <Root />
    </Provider>
, document.getElementById('app'));
