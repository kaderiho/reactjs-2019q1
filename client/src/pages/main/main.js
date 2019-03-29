import React from 'react';

import PagePlaceholder from 'components/PagePlaceholder/PagePlaceholder';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import HeaderFilter from 'components/HeaderFilter/HeaderFilter';
import SortControls from 'components/SortControls/SortControls';
import MoviesList from 'components/MoviesList/MoviesList';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import './Main.scss';

// Mock data, will be removed;
const mock = [{"data":[{"id":412302,"title":"Gemini","tagline":"","vote_average":10,"vote_count":3,"release_date":"2018-03-30","poster_path":"https://image.tmdb.org/t/p/w500/oIltQs7MPk7VQFG3DJfgC63mShU.jpg","overview":"A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.","budget":0,"revenue":0,"genres":["Mystery","Thriller"],"runtime":92},{"id":19404,"title":"Dilwale Dulhania Le Jayenge","tagline":"Come... Fall in Love","vote_average":9.2,"vote_count":1297,"release_date":"1995-10-20","poster_path":"https://image.tmdb.org/t/p/w500/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg","overview":"Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.","budget":13200000,"revenue":100000000,"genres":["Comedy","Drama","Romance"],"runtime":190},{"id":425895,"title":"Tisay","tagline":"","vote_average":9,"vote_count":1,"release_date":"2016-11-14","poster_path":"https://image.tmdb.org/t/p/w500/lt03HzS8tfDg5ipUQcLqIRNs0sC.jpg","overview":"In the world of semi-pro basketball, a beautiful bookie recruits a naïve but promising player to the underworld of game-fixing.","budget":0,"revenue":0,"genres":["Drama","Romance"],"runtime":100},{"id":511679,"title":"Héctor El Father: Conocerás la verdad","tagline":"","vote_average":8.8,"vote_count":5,"release_date":"2018-03-22","poster_path":"https://image.tmdb.org/t/p/w500/jwJoURyfm4XxtnYRtIOS2pYR9Np.jpg","overview":"","budget":0,"revenue":0,"genres":["Drama"],"runtime":90},{"id":278,"title":"The Shawshank Redemption","tagline":"Fear can hold you prisoner. Hope can set you free.","vote_average":8.6,"vote_count":9868,"release_date":"1994-09-23","poster_path":"https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg","overview":"Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.","budget":25000000,"revenue":28341469,"genres":["Drama","Crime"],"runtime":142},{"id":418827,"title":"Sister's Younger Husband","tagline":"A sexy brother-in-law approached her? And he’s a younger man?","vote_average":8.5,"vote_count":2,"release_date":"2016-10-11","poster_path":"https://image.tmdb.org/t/p/w500/wKCkyb7dyDTbZn7qy6zh8oqtFrT.jpg","overview":"A sexy brother-in-law approached her? And he’s a younger man?  Mi-yeon, who was adopted into her family when she was little, is living with her older sister, Si-yeon and Si-yeon’s husband. Mi-yeon’s desire towards her brother-in-law grows more and more every night when she gets to watch the affectionate interaction between her older sister and the brother-in-law. One day, Mi-yeon seduces her brother-in-law and the two end up crossing the line when they should not have. As the situation goes on, Mi-yeon finds out her older sister is also having affairs outside the marriage. Mi-yeon tries to clear up the relationship with her brother-in-law out of guilty feeling. However, she hears something shocking from the brother-in-law.","budget":0,"revenue":0,"genres":["Comedy","Drama","Romance"],"runtime":75},{"id":238,"title":"The Godfather","tagline":"An offer you can't refuse.","vote_average":8.5,"vote_count":7437,"release_date":"1972-03-14","poster_path":"https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg","overview":"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.","budget":6000000,"revenue":245066411,"genres":["Drama","Crime"],"runtime":175},{"id":372058,"title":"Your Name.","tagline":"","vote_average":8.5,"vote_count":2129,"release_date":"2016-08-26","poster_path":"https://image.tmdb.org/t/p/w500/xq1Ugd62d23K2knRUx6xxuALTZB.jpg","overview":"High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.","budget":0,"revenue":355398372,"genres":["Romance","Animation","Drama"],"runtime":106},{"id":449176,"title":"Love, Simon","tagline":"He's done keeping his story straight.","vote_average":8.4,"vote_count":82,"release_date":"2018-03-16","poster_path":"https://image.tmdb.org/t/p/w500/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg","overview":"Everyone deserves a great love story. But for seventeen-year old Simon Spier it’s a little more complicated: he’s yet to tell his family or friends he’s gay and he doesn’t actually know the identity of the anonymous classmate he’s fallen for online.","budget":17000000,"revenue":11800000,"genres":["Comedy","Drama","Romance"],"runtime":110},{"id":424,"title":"Schindler's List","tagline":"Whoever saves one life, saves the world entire.","vote_average":8.4,"vote_count":5574,"release_date":"1993-11-29","poster_path":"https://image.tmdb.org/t/p/w500/yPisjyLweCl1tbgwgtzBCNCBle.jpg","overview":"The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.","budget":22000000,"revenue":321365567,"genres":["Drama","History","War"],"runtime":195}],"total":3000,"offset":0,"limit":10}];
const FilterErrorComponent = () => <p className="error--application">Oops! Filter currently is not available</p>;

const MainPage = () => {
    const movies = mock[0].data;
    
    return (
        <div className="page">
            <div className="headerWrapper">
                <div className="headerInner">
                    <Header/>
                    <ErrorBoundary render={FilterErrorComponent}>
                        <HeaderFilter/>
                    </ErrorBoundary>
                </div>
            </div>
            <main>
                <div className="subHeader">
                    <span className="filterResults">1 movies found</span>
                    <SortControls />
                </div>
                {movies.length ? 
                    <MoviesList movies={movies} /> :
                    <PagePlaceholder placeholderMessage="Not films found" />
                }
            </main>
            <Footer/>
        </div>
    );
}

export default MainPage;