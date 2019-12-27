import React, { Component } from 'react'
import './hotel.scss'

export default class Hotel extends Component {
    render() {
        const footerNavList = ['首页','订单','客户端','电脑版','帮助'];
        const linksList = ['猫眼电影'];

        return (
            <div className="hotel">
                <header className="hotel-header">
                    <img src="https://p1.meituan.net/travelcube/94eaafe616c23950123fd020d73c83ee61021.png.webp" alt=""/>
                </header>
                <div className="search-box">
                    <div className="box-bar flex">
                        <span className="bar-item flex-item-1">全日房</span>
                        <span className="bar-item flex-item-1">钟点房</span>
                    </div>
                    <div className="search-item flex-between">
                        <span className="item-title">目的地</span>
                        <span className="item-content flex-item-1">上海</span>
                        <span className="icon-right"></span>
                    </div>
                    <div className="search-item flex-between">
                        <span className="item-title">时间</span>
                        <div className="item-content flex-item-1">
                            <div>12月27日 入住</div>
                            <div>12月28日 离店</div>
                        </div>
                        <span className="icon-right"></span>
                    </div>
                    <div className="search-item flex-between">
                        <span className="item-title">搜索</span>
                        <span className="item-content flex-item-1 search-txt">位置/酒店/关键词</span>
                        <span className="icon-right"></span>
                    </div>
                    <div className="search-btn">查找酒店</div>
                </div>
                <footer className="hotel-footer">
                    {/* 退出登录 */}
                    <div className="logout">
                        <span className="btn">退出登录</span>
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
