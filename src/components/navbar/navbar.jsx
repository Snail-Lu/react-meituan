import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-container flex">
                {
                    ['首页','发现','订单','我的'].map((item,index)=>(
                        <li className="nav-item flex-item-1 flex-column flex-h-center flex-v-center" key={index}>
                            <span className="navbar-icon"></span>
                            <span className="navbar-name">{item}</span>
                        </li>
                    ))
                }
            </div>
        );
    }
}

export default Navbar;