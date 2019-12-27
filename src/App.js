import React, { Component } from 'react';
import Home from './pages/home/home';
import Foods from './pages/foods/foods';
import Movie from './pages/movies/movies';
import My from './pages/movies/my/my';
import { BrowserRouter,Switch,Route,IndexRoute } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/foods" component={Foods} />
                <Route path="/movies" component={Movie} />
                <Route path="/my" component={My} />
            </BrowserRouter>
        )
    }
}
