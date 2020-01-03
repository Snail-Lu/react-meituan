import React, { Component } from 'react';
import Home from './pages/home/home';
import Foods from './pages/foods/foods';
import Movie from './pages/movies/movies';
import Hotel from './pages/hotel/hotel';
import Play from './pages/entertainment/index';
import Takeout from './pages/takeout/index';
import { BrowserRouter,Switch,Route,IndexRoute } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/foods" component={Foods} />
                <Route path="/movies" component={Movie} />
                <Route path="/hotel" component={Hotel} />
                <Route path="/play" component={Play} />
                <Route path="/takeout" component={Takeout} />
            </BrowserRouter>
        )
    }
}
