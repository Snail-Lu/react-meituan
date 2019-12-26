import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Cinema from './cinema/cinema'
import Home from './home/home'
import My from './my/my'
import NavLink from './../../components/NavLink/nav-link';
import '../../style/base.scss'
import './movies.scss'

export default class Movies extends Component {
    render() {
        return (
            <div className="movies">
                <div className="navBar flex">
                    <div className="nav-bar-item flex-item-1">
                        <NavLink to='/movies'>
                            <span className="iconfont icon-dianying"></span>
                            <span className="bar-name">电影</span>
                        </NavLink>
                    </div>
                    <div className="nav-bar-item flex-item-1">
                        <NavLink to="/movies/cinema">
                            <span className="iconfont icon-yingyuan"></span>
                            <span className="bar-name">影院</span>
                        </NavLink>
                    </div>
                    <div className="nav-bar-item flex-item-1">
                        <NavLink to="/movies/my">
                            <span className="iconfont icon-wode"></span>
                            <span className="bar-name">我的</span>
                        </NavLink>
                    </div>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/movies">
                            <Home />
                        </Route>
                        <Route path="/movies/cinema">
                            <Cinema />
                        </Route>
                        <Route path="/movies/my">
                            <My />
                        </Route>
                    </Switch>
                </div>
            </div>
            
        )
    }
}
