import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Foods from './pages/foods/foods';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/foods" component={Foods}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
