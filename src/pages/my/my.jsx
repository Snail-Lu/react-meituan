import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
import './my.scss';

class My extends Component {
    render() {
        const toolsMenuList = ['邀请有礼','充值功能','火车票/机票','袋鼠快跑',
                            '新个税计算','推荐办卡','垃圾分类','墨迹天气',
                            '免费领水果','会员中心','美团公益','闪付',
                            '免流用美团','发票助手','美团大学','我要合作'];
        return (
            <div className="my">
                {/* 头部 包含个人信息及通用菜单 */}
                <header className="my-header">
                    <div className="header-top flex flex-h-between">
                        <div className="person-info flex flex-v-center">
                            <img className="profile-photo" src="/" alt=""/>
                            <span className="user-name">用户名</span>
                        </div>
                        <div className="setting-box flex flex-v-center">
                            <span className="setting-btn">设置</span>
                            <span className="service-btn">客服</span>
                        </div>
                    </div>
                    <div className="common-menu-list flex flex-h-between">
                        {
                            ['收藏','评价','红包/卡券','消息'].map((menu,index)=>{
                                return (
                                    <div className="common-menu-item flex-item-1" key={index}>
                                        <img className="menu-icon" src="/" alt=""/>
                                        <p className="menu-title">{menu}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </header>
                
                {/* 主体 包含各种菜单入口 */}
                <div className="my-content">

                    {/* 我的订单 */}
                    <div className="order-menu-list">
                        <div className="menu-header flex flex-h-between">
                            <span className="menu-header-title">我的订单</span>
                            <span className="menu-header-more">查看全部订单 ></span>
                        </div>
                        <div className="menu-content flex flex-h-between">
                        {
                            ['待付款','待使用','待评价','退款/售后'].map((item,index)=>{
                                return (
                                    <div className="order-menu-item flex-item-1" key={index}>
                                        <img className="menu-icon" src="/" alt=""/>
                                        <p className="menu-title">{item}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    {/* 我的钱包 */}
                    <div className="wallet-menu-list">
                        <div className="menu-header flex flex-h-between">
                            <span className="menu-header-title">我的钱包</span>
                            <span className="menu-header-more">进入钱包 ></span>
                        </div>
                        <div className="menu-content flex flex-h-between">
                        {
                            ['借钱','美团信用卡','买单','美团理财'].map((item,index)=>{
                                return (
                                    <div className="wallet-menu-item flex-item-1" key={index}>
                                        <img className="menu-icon" src="/" alt=""/>
                                        <p className="menu-title">{item}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    
                    {/* 轮播图 */}
                    <Banner />

                    {/* 推荐工具 */}
                    <div className="tools-menu-list">
                        <div className="menu-header-title">推荐工具</div>
                        <div className="menu-content flex flex-wrap">
                            {
                                toolsMenuList.map((item,index)=>{
                                    return (
                                        <div className="tools-menu-item" key={index}>
                                            <img className="menu-icon" src="/" alt=""/>
                                            <p className="menu-title">{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                {/* 底部 导航栏 */}
                <footer className="my-footer">
                    <Navbar />
                </footer>
            </div>
        );
    }
}

export default My;