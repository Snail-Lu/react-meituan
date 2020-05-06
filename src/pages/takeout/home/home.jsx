import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import '../../../assets/style/base.scss';

export default class Home extends Component {
    render() {
        const menuList = [
            {name:'美食',icon: '',target:'/foods'},
            {name:'美团超市',icon: '',target:'/movies'},
            {name:'生鲜果蔬',icon: '',target: '/hotel'},
            {name:'下午茶',icon:'',target: '/play'},
            {name:'汉堡披萨',icon:'',target: '/takeout'},
            {name:'小吃馆',icon:'',target: '/ktv'},
            {name:'家常菜',icon:'',target: 'tour'},
            {name:'鲜花蛋蔬',icon:'', target: 'beauty'},
            {name:'品牌连锁',icon:'', target: 'snack'},
            {name:'无辣不欢',icon:'', target: 'sorts'}
        ];
        const shopList = [
            {name:"熹贵妃自助酸奶水果捞",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"85度C",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"由心咖啡UNIBROWN",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"浓汤拉面馆·黄焖鸡米饭",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"胖子私房菜小份菜",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"老山东手工水饺",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"老犟烤肉拌饭",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"华莱士·全鸡汉堡",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
        ];
        const footerNavList = ['首页','我的','美团下载','电脑版','帮助'];
        const linksList = ['猫眼电影','大众点评','美团旅行','榛果民宿','大众点评下载','美团收银官网','美团点评餐饮学院','快驴进货商家合作'];

        return (
            <div className="tk-home">

                {/* 顶部导航栏 */}
                <header className="tk-header flex flex-h-between flex-v-center">
                    <div className="header-left">
                        <span className="app-icon">&lt;</span>
                        <span className="app-name">外卖</span>
                    </div>
                    <div className="header-right">
                        <span>上海 ></span>
                        <span className="iconfont">&#xe60f;</span>
                    </div>
                </header>
                <div className="tk-content">
                    <div className="box-search">
                        <a href="#">
                            <img className="icn_search" src="https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png" alt=""/>
                            <span className="txt_search">请输入商家或商品名称</span>
                        </a>
                    </div>

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
                        <div className="bar-title">
                            <span className="q-txt">附近商家</span>
                            <span className="bg-line"></span>
                        </div>
                    </div>

                    {/* 猜你喜欢 */}
                    <div className="list-box">
                        <div className="nav-bar flex">
                            <div className="bar-item flex-item-1">综合排序<span className="pull-icon">▼</span></div>
                            <div className="bar-item flex-item-1">销量最高<span className="pull-icon">▼</span></div>
                            <div className="bar-item flex-item-1">距离最近<span className="pull-icon">▼</span></div>
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
                                            <div className="item-info flex-between">
                                                <span>⭐️⭐️⭐️⭐️⭐️5.0</span>
                                                <span>月售1755</span>
                                                <span>35分钟 3.4km</span>
                                            </div>
                                            <div className="item-price">
                                                <span>起送¥15 配送¥4</span>
                                            </div>
                                            <div className="item-activity flex-center">
                                                <span className="activity-icon">
                                                    <img src="https://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png@80Q_0e_1l.webp?cimage=true" alt=""/>
                                                </span>
                                                <span>
                                                    满24减11;满35减18;满42减22;满65减35;满90减42
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
                
                
                
            </div>
        )
    }
}
