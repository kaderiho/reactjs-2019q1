import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MoviePage from './pages/Movie/Movie';
import MainPage from './pages/Main/Main';
import './app.scss';

const AppErrorComponent = () => (<p className="error--application">
    Oops! Application currently is not available
</p>);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading='Hi there' persistor={persistor}>
            <ErrorBoundary render={AppErrorComponent}>
                <MainPage />
            </ErrorBoundary>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);