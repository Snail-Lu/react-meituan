import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './foods.scss';

export default class Foods extends Component {
    render() {
        const menuList = [
            {name:'火锅',icon: '',target:'/foods'},
            {name:'甜点饮品',icon: '',target:'/movies'},
            {name:'自助餐',icon: '',target: '/hotel'},
            {name:'小吃快餐',icon:'',target: '/play'},
            {name:'西餐',icon:'',target: '/takeout'},
            {name:'烧烤烤肉',icon:'',target: '/ktv'},
            {name:'香锅烤鱼',icon:'',target: 'tour'},
            {name:'海鲜',icon:'', target: 'beauty'},
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
            <div className="foods">
                {/* 搜索及下载导航栏 */}
                <header className="top-nav">
                    <img className="nav-bg" src="https://s1.meituan.net/bs/file?f=meis/meishi.mobile:img/app_download_banner.png@a208aa7" alt=""/>
                    <div className="box-search">
                        <a href="#">
                            <img className="icn_search" src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt=""/>
                            <span className="txt_search">请输入商家名，品类或商圈...</span>
                        </a>
                    </div>
                </header>
                {/* 菜单栏 */}
                <div className="menubar">
                    <ul>
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
                {/* 商家列表 */}
                <div className="list-box">
                    <div className="nav-bar flex">
                        <div className="bar-item flex-item-1">全部类目<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">附近商家<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">智能排序<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">筛选<span className="pull-icon">▼</span></div>
                    </div>
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
                {/* 加载提示 */}
                <div className="db flex-center">
                    <span className="db-txt">加载中...</span>
                </div>
                <footer className="footer">
                {/* 位置 */}
                <div className="location">
                    <span className="loc-title">城市：</span>
                    <span className="loc-icon"><img src="https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png" alt=""/></span>
                    <span className="loc-txt">上海</span>
                </div>
                {/* 尾部导航栏 */}
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
                {/* 友情链接 */}
                <div className="footer-linkbar">
                    <ul>
                        <li className="link-item link-title">友情链接：</li>
                        {linksList.map((item,index)=>{
                            return(
                                <li className="link-item" key={`item-${index}`}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                {/* 版权 */}
                <div className="footer-copyright">
                    <div className="copyright-txt">©️2019 美团网 京ICP证070791号</div>
                </div>
            </footer>
            </div>
        )
    }
}
