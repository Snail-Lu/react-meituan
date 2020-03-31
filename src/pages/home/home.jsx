import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
import Goods from '../../components/goods/goods';
import './home.scss';
import '../../assets/style/iconfont/iconfont.css';

export default class Discovery extends Component {
    render() {
        const topMenuList = [
            { name: '扫一扫', icon: 'icon-saoyisao', target: '/takeout' },
            { name: '付款码', icon: 'icon-fukuanma', target:'/foods' },
            { name: '红包/卡券', icon: 'icon-qiaquan', target: '/hotel' },
            { name: '骑车', icon: 'icon-zihangche', target: '/play' }
        ];
        const menuList = [
            { name:'外卖', icon: 'icon-waimai-', bg:'#FFC004', color: '#FFFFFF', target: '/takeout' },
            { name:'美食', icon: 'icon-fenzu', bg: '#FE8100', color: '#FFFFFF', target:'/foods' },
            { name:'酒店', icon: 'icon-hotel-fill', bg: '#A25834', color: '#FFFFFF', target: '/hotel' },
            { name:'休闲/玩乐', icon: 'icon-jiweijiubei', bg:'#00BE8F', color: '#FFFFFF', target: '/play' },
            { name:'电影/演出', icon: 'icon-mao', bg:'#FF3C00', color: '#FFFFFF', target: '/movies' },

            { name:'打车', icon: 'icon-taxi', color: '#0AB0F4', target: '/taxi' },
            { name:'结婚/摄影', icon: 'icon-85', color: '#FE4C8A', target:'/marry' },
            { name:'超市/药店', icon: 'icon-lanzi', color: '#00CB15', target: '/shop' },
            { name:'借钱/信用卡', icon:'icon-hongbao1', color: '#FF860B', target: '/creditCard' },
            { name:'火车票/机票', icon: 'icon-huoche', color: '#0AABF3',target:'/ticket' },
 
            { name:'免费领水果', icon: 'icon-shu', color: '#14C6A2', target: '/fruit' },
            { name:'袋鼠快跑', icon: 'icon-icon-test', color: '#F93C31', target: '/game' },
            { name:'红包签到', icon: 'icon-qiandai', color: '#FF4103', target: '/signIn' },
            { name:'免费领福利', icon: 'icon-libao', color: '#FE3D80', target: '/welfare' },
            { name:'更多', icon: 'icon-gengduo', color: '#C0C2D0', target: '/more' }
        ];
    
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

                <div className="content">
                    {/* 菜单栏 */}
                    <div className="menu">
                        <ul className="topmenu flex flex-h-center">
                            {
                                topMenuList.map((item, index) => (
                                    <li className="topmenu-item flex-item-1" key={index}>
                                        <span className={`topmenu-icon iconfont ${item.icon}`}></span>
                                        <span className="topmenu-name">{item.name}</span>
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
                                            <span style={{background: item.bg, color: item.color}} className={['menu-icon','iconfont',item.icon].join(" ")}></span>
                                            <span className="menu-name">{item.name}</span>
                                        </Link>
                                    </li>
                            })}
                        </ul>
                    </div>

                    {/* 轮播图 */}
                    <div className="banner-box">
                        <Banner />  
                    </div>

                    {/* 商品列表 */}
                    <div className="goods-list flex flex-h-between flex-wrap">
                        {
                            ['1','2','3','4','5','6','7'].map((item,index)=>{
                                return (
                                    <div className="goods-item" key={index}>
                                        <Goods />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                {/* 底部导航栏 */}
                <footer className="footer">
                    <Navbar />
                </footer>
            </div>
        )
    }
}
