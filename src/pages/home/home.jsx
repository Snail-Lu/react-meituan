import React, { Component } from 'react';
import './home.scss';

export default class Home extends Component {
    render() {
        const menuList = [
            {name:'美食',icon: ''},
            {name:'猫眼电影',icon: ''},
            {name:'酒店',icon: ''},
            {name:'休闲娱乐',icon:''},
            {name:'外卖',icon:''},
            {name:'KTV',icon:''},
            {name:'周边游',icon:''},
            {name:'丽人',icon:''},
            {name:'小吃快餐',icon:''},
            {name:'全部分类',icon:''}
        ];
        const shopList = [
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
        ];
        const footerNavList = ['首页','我的','美团下载','电脑版','帮助'];
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
                <div className="menubar">
                    <ul>
                        {menuList.map((item,index)=>{
                        return <li 
                                className="menu-item"
                                key={`item-${index}`}
                                >
                                    <span className="menu-icon"></span>
                                    <span className="menu-name">{item.name}</span>
                                </li>
                        })}
                    </ul>
                </div>
                {/* 猜你喜欢 */}
                <div className="list-box">
                    <div className="list-header">猜你喜欢</div>
                    <div className="list-content">
                        {shopList.map((item,index)=>{
                            return (
                                <div className="list-item flex" key={`list-${index}`}>
                                    <div className="item-left">
                                    </div>
                                    <div className="item-right flex-item-1">
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-desc">[{item.location}]{item.desc}</div>
                                        <div className="item-price">
                                            <span className="sale-price">
                                                {item.salePrice}
                                                <span className="price-unit">元</span>
                                            </span>
                                            <span className="market-price">门市价:{item.marketPrice}</span>
                                        </div>
                                        <div className="item-sale-num">已售{item.salesNum}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* 查看全部团购 */}
                <div className="db flex-between">
                    <span className="db-txt">查看全部团购</span>
                    <span className="db-icon">></span>
                </div>
                <footer className="footer">
                    <div className="location">
                        <span className="loc-title">城市：</span>
                        <span className="loc-icon"><img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt=""/></span>
                        <span className="loc-txt">上海</span>
                    </div>
                    <div className="footer-navbar">
                        <ul className="flex">
                            {
                                footerNavList.map((item,index)=>{
                                    return(
                                    <li className="nav-item flex-item-1" key={`item-${index}`}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="footer-linkbar"></div>
                </footer>
            </div>
        )
    }
}
