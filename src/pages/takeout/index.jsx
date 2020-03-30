import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Order from './order/order'
import Home from './home/home'
import My from './my/my'
import NavLink from '../../components/nav-link/nav-link';
import '../../assets/style/base.scss';
import './index.scss'

export default class Movies extends Component {
    render() {
        return (
            <div className="takeout">
                <div className="navBar flex">
                    <div className="nav-bar-item flex-item-1">
                        <NavLink to='/takeout'>
                            <span className="iconfont icon-dianying"></span>
                            <span className="bar-name">首页</span>
                        </NavLink>
                    </div>
                    <div className="nav-bar-item flex-item-1">
                        <NavLink to="/takeout/order">
                            <span className="iconfont icon-yingyuan"></span>
                            <span className="bar-name">订单</span>
                        </NavLink>
                    </div>
                    <div className="nav-bar-item flex-item-1">
                        <NavLink to="/takeout/my">
                            <span className="iconfont icon-wode"></span>
                            <span className="bar-name">我的</span>
                        </NavLink>
                    </div>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path="/takeout">
                            <Home />
                        </Route>
                        <Route path="/takeout/order">
                            <Order />
                        </Route>
                        <Route path="/takeout/my">
                            <My />
                        </Route>
                    </Switch>
                </div>
            </div>
            
        )
    }
}
