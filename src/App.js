import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Foods from './pages/foods/foods';
import Movies from './pages/movies/movies';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/foods" component={Foods}></Route>
                    <Route path="/movies" component={Movies}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
