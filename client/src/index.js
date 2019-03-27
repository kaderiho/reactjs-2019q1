import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import App from './app';

ReactDOM.render(
    <ErrorBoundary render={() => <p className="error--application">Oops! Application currently is not available</p>}>
        <App/>
    </ErrorBoundary>, 
    document.getElementById('app')
);