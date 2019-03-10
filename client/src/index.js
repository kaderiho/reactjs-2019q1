import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

// Pages
import MoviePage from './pages/movie/movie';
import MainPage from './pages/main/main';

/**
 * - React.createElement: button, input;
 * - functional components: main, movie pages;
 * - React.Component: header-filter;
 * - React.PureComponent: MoviesList;
 */

ReactDOM.render(<MainPage/>, document.querySelector('#app'));