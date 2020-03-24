import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
import './home.scss';
import '../../style/iconfont/iconfont.css';

export default class Home extends Component {
    render() {
        const menuList = [
            {name:'外卖',icon:'',target: '/takeout'},
            {name:'美食',icon: '',target:'/foods'},
            {name:'酒店',icon: '',target: '/hotel'},
            {name:'休闲/玩乐',icon:'',target: '/play'},
            {name:'电影/演出',icon: '',target:'/movies'},

            {name:'打车',icon:'',target: '/taxi'},
            {name:'结婚/摄影',icon: '',target:'/marry'},
            {name:'超市/药店',icon: '',target: '/shop'},
            {name:'借钱/信用卡',icon:'',target: '/creditCard'},
            {name:'火车票/机票',icon: '',target:'/ticket'},

            {name:'免费领水果',icon:'',target: '/fruit'},
            {name:'袋鼠快跑',icon:'',target: '/game'},
            {name:'红包签到',icon:'', target: '/signIn'},
            {name:'免费领福利',icon:'', target: '/welfare'},
            {name:'更多',icon:'', target: '/more'}
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
        const linksList = ['猫眼电影','大众点评','美团旅行','榛果民宿','大众点评下载','美团收银官网','美团点评餐饮学院','快驴进货商家合作'];

        return (
            <div className="home">
                {/* 顶部header */}
                <header className="header flex flex-h-between flex-v-center">
                    <div className="header-left flex flex-h-center flex-v-center">
                        <div className="profile-picture"></div>
                        <div className="location-weather flex-column flex-h-center flex-v-center">
                            <div>
                                <span className="location-info">上海</span>
                                <img src="https://p0.meituan.net/travelcube/45c79a92755b54adc9dc1c4682b123b3201.png" alt=""/>
                            </div>
                            <div className="weather-info">
                                阴 17°C
                            </div>
                        </div>
                    </div>
                    <div className="search-input flex flex-h-center flex-item-1">
                        <a href="#">
                            <img className="icn_search" src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt=""/>
                            <span className="txt_search">请输入商家名，品类或商圈...</span>
                        </a>
                    </div>
                    <div className="header-right">
                        ＋
                    </div>
                </header>

                {/* 菜单栏 */}
                <div className="menu">
                    <ul className="topmenu flex flex-h-center">
                        {
                            ['扫一扫','付款码','红包/卡券','骑车'].map((item, index) => (
                                <li className="topmenu-item flex-item-1" key={index}>
                                    <img className="topmenu-icon" src="/" alt="" />
                                    <span className="topmenu-name">{item}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="mainmenu flex flex-wrap">
                        {menuList.map((item,index)=>{
                        return <li 
                                className="menu-item"
                                key={`item-${index}`}
                                >
                                    <Link to={item.target}>
                                        <span className="menu-icon iconfont icon-meishi"></span>
                                        <span className="menu-name">{item.name}</span>
                                    </Link>
                                </li>
                        })}
                    </ul>
                </div>

                <Banner />

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
                
                {/* 底部导航栏 */}
                <Navbar />
            </div>
        )
    }
}
