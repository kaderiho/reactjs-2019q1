import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import App from './app';

const AppErrorComponent = () => <p className="error--application">Oops! Application currently is not available</p>;

ReactDOM.render(
    <ErrorBoundary render={AppErrorComponent}>
        <App/>
    </ErrorBoundary>, 
    document.getElementById('app')
);