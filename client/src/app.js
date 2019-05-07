import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviePage from './pages/Movie/Movie';
import NotFoundPage from './pages/NotFound/NotFound';
import MainPage from './pages/Main/Main';
import './app.scss';

export default () => (
    <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/search/:searchFilter" component={MainPage} />
        <Route path="/search/" component={MainPage} />
        <Route path="/film/:id" component={MoviePage} />
        <Route component={NotFoundPage} />
    </Switch>
);
