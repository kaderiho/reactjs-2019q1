import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

// Pages;
import MoviePage from './pages/movie/movie';
import MainPage from './pages/main/main';

/**
 * - React.createElement
 * - React.Component
 * - React.PureComponent
 * - functional components
 */

ReactDOM.render(<MainPage/>, document.querySelector('#app'));