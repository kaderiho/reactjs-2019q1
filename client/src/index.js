import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store/store';
import { Provider } from 'react-redux';

import { GET_MOVIES_REQUEST } from 'store/actions/movies';
import { connect } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MoviePage from './pages/Movie/Movie';
import NotFoundPage from './pages/NotFound/NotFound';
import MainPage from './pages/Main/Main';
import './app.scss';

const AppErrorComponent = () => (<p className="error--application">
    Oops! Application currently is not available
</p>);

class App extends Component {
    componentDidMount() {
        this.props.getMoviesList();
    }
    
    render() {
        return (
            <ErrorBoundary render={AppErrorComponent}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/search/:searchFilter" component={MainPage} />
                        <Route path="/search/" component={MainPage} />
                        <Route path="/film/:id" component={MoviePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </ErrorBoundary>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMoviesList() {
        dispatch(GET_MOVIES_REQUEST());
    }
});

App = connect(null, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('app'));
