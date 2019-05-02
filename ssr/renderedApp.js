import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../client/src/store/reducers/index';
import { renderToString } from 'react-dom/server';
import App from '../client/src/index';
import IndexTemplate from './indexTemplate';
// import { StaticRouter } from 'react-router-dom';

const renderedApp = (initialState) => {
    const store = createStore(rootReducer, initialState);

    const markup = renderToString(
        <Provider store={store}>
            <div>Hi there!</div>
        </Provider>
    );

    const preloadedState = store.getState();

    return IndexTemplate(markup, preloadedState);
}

export default renderedApp;