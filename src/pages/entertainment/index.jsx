import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import '../../assets/style/iconfont/iconfont.css';
import FilterTab from '../../components/fitler/filter-tab';

export default class Home extends Component {
    render() {
        const shopList = [
            {name:"本一日式SPA·MASSAGE（花木兰店）",location:"新国际博览中心",distance:"7.3km",rating:'5.0',productList:[
                {productName:"全身SPA90分钟",salePrice:"880",marketPrice:"1280",salesNum:"25",imgUrl:""},
                {productName:"香気ホルモン",salePrice:"1088",marketPrice:"1588",salesNum:"9",imgUrl:""},
                {productName:"【日式热门】日式髋围温经SPA",salePrice:"988",marketPrice:"1388",salesNum:"16",imgUrl:""},
                {productName:"【新店特惠】日式一休の简SPA",salePrice:"468",marketPrice:"688",salesNum:"34",imgUrl:""},
                {productName:"【日式热卖】日式矿石SPA套餐",salePrice:"1998",marketPrice:"2588",salesNum:"11",imgUrl:""}
            ]},
            {name:"派墅度假·别墅派对轰趴馆（迪士尼店）",location:"迪士尼",distance:"9.8km",rating:'5.0',productList:[
                {productName:"【圣诞派对 跨年狂欢】",salePrice:"880",marketPrice:"1280",salesNum:"25",imgUrl:""},
                {productName:"【生日派对 求婚示爱】",salePrice:"1088",marketPrice:"1588",salesNum:"9",imgUrl:""},
                {productName:"【婚礼策划 私人订制】",salePrice:"988",marketPrice:"1388",salesNum:"16",imgUrl:""},
                {productName:"【闺蜜聚会 朋友聚会】",salePrice:"468",marketPrice:"688",salesNum:"34",imgUrl:""},
                {productName:"【班级聚会 社团活动】",salePrice:"1998",marketPrice:"2588",salesNum:"11",imgUrl:""}
            ]},
            {name:"本一日式SPA·MASSAGE（花木兰店）",location:"新国际博览中心",distance:"7.3km",rating:'5.0',productList:[
                {productName:"全身SPA90分钟",salePrice:"880",marketPrice:"1280",salesNum:"25",imgUrl:""},
                {productName:"香気ホルモン",salePrice:"1088",marketPrice:"1588",salesNum:"9",imgUrl:""},
                {productName:"【日式热门】日式髋围温经SPA",salePrice:"988",marketPrice:"1388",salesNum:"16",imgUrl:""},
                {productName:"【新店特惠】日式一休の简SPA",salePrice:"468",marketPrice:"688",salesNum:"34",imgUrl:""},
                {productName:"【日式热卖】日式矿石SPA套餐",salePrice:"1998",marketPrice:"2588",salesNum:"11",imgUrl:""}
            ]},
            {name:"派墅度假·别墅派对轰趴馆（迪士尼店）",location:"迪士尼",distance:"9.8km",rating:'5.0',productList:[
                {productName:"【圣诞派对 跨年狂欢】",salePrice:"880",marketPrice:"1280",salesNum:"25",imgUrl:""},
                {productName:"【生日派对 求婚示爱】",salePrice:"1088",marketPrice:"1588",salesNum:"9",imgUrl:""},
                {productName:"【婚礼策划 私人订制】",salePrice:"988",marketPrice:"1388",salesNum:"16",imgUrl:""},
                {productName:"【闺蜜聚会 朋友聚会】",salePrice:"468",marketPrice:"688",salesNum:"34",imgUrl:""},
                {productName:"【班级聚会 社团活动】",salePrice:"1998",marketPrice:"2588",salesNum:"11",imgUrl:""}
            ]},
        ];
        const footerNavList = ['首页','我的','美团下载','电脑版','帮助'];
        const linksList = ['猫眼电影','大众点评','美团旅行','榛果民宿','大众点评下载','美团收银官网','美团点评餐饮学院','快驴进货商家合作'];

        return (
            <div className="entertainment">
                {/* 顶部导航栏 */}
                <header className="navbar">
                    <div className="nav-wrap-left">
                        <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" alt=""/>
                    </div>
                    <div className="box-search">
                        <span className="txt_search">分类</span>
                    </div>
                    <div className="nav-wrap-right">
                        <img className="icn_mine" src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png" alt=""/>
                        <img className="icn_mine" src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png" alt=""/>
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
                {/* 商品列表 */}
                <div className="list-box">
                    <FilterTab />
                    {/* <div className="nav-bar flex">
                        <div className="bar-item flex-item-1">休闲娱乐<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">全城<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">默认排序<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">筛选<span className="pull-icon">▼</span></div>
                    </div> */}
                    <div className="list-content">
                        {shopList.map((item,index)=>{
                            return (
                                <div className="list-item" key={`list-${index}`}>
                                    <div className="item-header">
                                        <div className="shop-name">{item.name}</div>
                                        <div className="shop-info flex-between">
                                            <div className="shop-rating">评分：{item.rating}</div>
                                            <div className="shop-address">
                                                <span>{item.distance}</span>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        item.productList.slice(0,2).map((itm,idx)=>{
                                            return (
                                                <div className="item-content flex" key={`list-${idx}`}>
                                                    <div className="item-left">
                                                    </div>
                                                    <div className="item-right flex-item-1">
                                                        <div className="item-name">{itm.productName}</div>
                                                        <div className="item-price">
                                                            <span className="sale-price">
                                                                {itm.salePrice}
                                                                <span className="price-unit">元</span>
                                                            </span>
                                                            <span className="market-price">门市价:{itm.marketPrice}</span>
                                                        </div>
                                                        <div className="item-sale-num">已售{itm.salesNum}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="item-footer">
                                        查看其它{item.productList.length-2}条团购 ☟
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* 查看全部团购 */}
                <div className="db flex-between">
                    <span className="db-icon">上一页</span>
                    <span>1</span>
                    <span className="db-icon">下一页</span>
                </div>
                <footer className="footer">
                    {/* 定位 */}
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
