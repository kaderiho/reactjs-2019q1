import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../store/reducers/index';
import IndexTemplate from './template';
import App from '../app';

module.exports = req => {
    const store = createStore(rootReducer);
    let context = {};
    let markup = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    let preloadedState = store.getState();

    return IndexTemplate(markup, preloadedState);
};