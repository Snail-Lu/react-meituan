import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const menuList = [
            {name:'首页',icon:'icon-shouye',target: '/'},
            {name:'发现',icon: 'icon-faxian',target:'/discovery'},
            {name:'订单',icon: 'icon-dingdan',target: '/order'},
            {name:'我的',icon: 'icon-wode',target: '/my'}
        ];

        return (
            <div className="nav-container flex">
                {
                    menuList.map((item,index)=>(
                        <li 
                            className="nav-item flex-item-1 flex-column flex-h-center flex-v-center" 
                            key={index}
                        >
                            <Link to={item.target}>
                                <span className={`navbar-icon iconfont ${item.icon}`}></span>
                                <span className="navbar-name">{item.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </div>
        );
    }
}

export default Navbar;