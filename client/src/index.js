import React from 'react';
import ReactDOM from 'react-dom';

// State management
import { Provider } from 'react-redux';
import store from './store/store';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import App from './app';

const AppErrorComponent = () => <p className="error--application">Oops! Application currently is not available</p>;

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary render={AppErrorComponent}>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);