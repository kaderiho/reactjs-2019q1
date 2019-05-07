import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { GET_MOVIES_SUCCESS } from '../store/actions/movies';
import { createStore } from 'redux';
import rootReducer from '../store/reducers/index';
import IndexTemplate from './template';
import Loadable from 'react-loadable';
import manifest from '../../../dist/manifest.json';
import routes from './routes';
import App from '../app';

module.exports = req => {
    const store = createStore(rootReducer);
    const requiredDataPromises = [];
    const context = {};
    let modules = [];

    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
            requiredDataPromises.push(route.fetchData(match.params));
        };
        return match;
    });

    const renderMarkup = () => {
        let markup = renderToString(
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                <Provider store={store}>
                    <StaticRouter context={context} location={req.url}>
                            <App/>
                    </StaticRouter>
                </Provider>
            </Loadable.Capture>
        );
        let preloadedState = store.getState();

        const extractAssets = (assets, chunks) => Object.keys(assets)
            .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
            .map(k => assets[k]);
        const chunks = extractAssets(manifest, modules).map(c => `<script type="text/javascript" src="${c}"></script>`);

        return IndexTemplate(markup, preloadedState, chunks)
    }

    return new Promise(resolve => {
        Promise.all(requiredDataPromises).then(requiredData => {
            let [ response ] = requiredData;

            if (response && response.data.data) {
                store.dispatch(GET_MOVIES_SUCCESS([...response.data.data]));
            } else {
                store.dispatch(GET_MOVIES_SUCCESS([response && response.data]));
            }

            resolve(renderMarkup());
        });
    });
};