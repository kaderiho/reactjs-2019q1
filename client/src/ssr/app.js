import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { GET_MOVIES_SUCCESS } from '../store/actions/movies';
import { createStore } from 'redux';
import rootReducer from '../store/reducers/index';
import IndexTemplate from './template';
import routes from './routes';
import App from '../app';

module.exports = req => {
    const store = createStore(rootReducer);
    const requiredDataPromises = [];
    let context = {};

    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
            console.log(match);
            requiredDataPromises.push(route.fetchData(match));
        };
        return match;
    });

    return new Promise(resolve => {
        Promise.all(requiredDataPromises).then(requredData => {
            let [ moviesList ] = requredData;
            store.dispatch(GET_MOVIES_SUCCESS(moviesList.data.data));

            let markup = renderToString(
                <Provider store={store}>
                    <StaticRouter context={context} location={req.url}>
                        <App/>
                    </StaticRouter>
                </Provider>
            );
            let preloadedState = store.getState();
        
            resolve(IndexTemplate(markup, preloadedState));
        });
    });
};