import { hot } from 'react-hot-loader/root';

import './app.scss';

// Pages
import MoviePage from './pages/Movie/Movie';
import MainPage from './pages/Main/Main';

export default process.env.NODE_ENV === 'production' ? MainPage : hot(MainPage);