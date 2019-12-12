import React, { Component } from 'react';
import './home.scss';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                {/* 顶部导航栏 */}
                <header className="navbar">
                    <div className="nav-wrap-left">
                        <span>上海</span>
                        <img src="https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png" alt=""/>
                    </div>
                    <div className="box-search">
                        <a href="#">
                            <img className="icn_search" src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt=""/>
                            <span className="txt_search">请输入商家名，品类或商圈...</span>
                        </a>
                    </div>
                    <div className="nav-wrap-right">
                        <img className="icn_mine" src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt=""/>
                    </div>
                </header>
                {/* App下载导航栏 */}
                <div className="banner-download">
                    <div className="banner-item">
                        <img className="img-box" src="https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png" alt=""/>
                        <div className="logo-theme">
                            <p className="logo-tit">省钱利器 购物超划算</p>
                            <p className="logo-desc">吃喝玩乐尽在美团</p>
                        </div>
                    </div>
                    <div className="to-app-btn">去APP</div>
                </div>
                {/* 菜单栏 */}
                <div className="listbar">
                    {}
                </div>
            </div>
        )
    }
}
