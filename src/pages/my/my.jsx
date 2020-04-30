import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
import './my.scss';
import profileImg from '../../assets/images/common/profile.png';


class My extends Component {
    render() {
        const topMenuList = [{title:'收藏',icon:"icon-star"},{title:"评价",icon:'icon-pingjia'},
                            {title:'足迹',icon:'icon-lishi'},{title:'红包卡券',icon:'icon-hongbao'}];

        const orderMenuList = [{title:'待付款',icon:"icon-chongzhi1"},{title:"待使用",icon:'icon-chongzhi1'},
                            {title:'待评价',icon:'icon-chongzhi1'},{title:'退款/售后',icon:'icon-chongzhi1'}];
        
        const walletMenuList = [{title:'借钱',subTitle:"大约可借",amount:"4.84",unit:"万"},{title:'美团信用卡',subTitle:"平均额度",amount:"5.84",unit:"万"},
                            {title:'买单',subTitle:"剩余可用",amount:"500",unit:"元"},{title:'美团理财',subTitle:"存1千3个月赚",amount:"10",unit:"元"}];

        const signMenuList =  [{title:'袋鼠快跑',subTitle:'领大额外卖红包',icon:"icon-icon-test1",color:"#FF8888"},{title:"小美果园",subTitle:'0元领水果',icon:'icon-shu',color:"#00CC33"},
                            {title:'红包签到',subTitle:'连签7天兑红包',icon:'icon-ai-hongbao',color:'#FF0000'},{title:'邀请有礼',subTitle:'分享得20元优惠券',icon:'icon-ai-hongbao',color:"#FF0000"}];

        const toolsMenuList = [{title:'邀请有礼',icon:"icon-libao",color:"#FF8888"},{title:"充值中心",icon:'icon-chongzhi',color:"#FF3333"},
                            {title:'新个税计算',icon:'icon-shui',color:"#FF8888"},{title:'垃圾分类',icon:'icon-lajifenleishidian',color:"#00CC33"},
                            {title:'墨迹天气',icon:"icon-QX-mojitianqi",color:"#0099FF"},{title:"发票助手",icon:'icon-fapiao',color:"#00CCFF"},
                            {title:'美团大学',icon:'icon-hezuo',color:"#FFD328"},{title:'我要合作',icon:'icon-hezuo',color:"#FFD328"}];
        return (
            <div className="my">
                {/* 头部 包含个人信息及通用菜单 */}
                <header className="my-header">
                    <div className="header-top flex flex-h-between">
                        <div className="person-info flex flex-v-center">
                            <img className="profile-photo" src={profileImg}alt=""/>
                            <span className="user-name">一只可爱的萨摩耶</span>
                        </div>
                        <div className="setting-box flex flex-v-center">
                            <span className="setting-btn iconfont icon-shezhi"></span>
                            <span className="service-btn iconfont icon-kefu"></span>
                        </div>
                    </div>
                    <div className="common-menu-list flex flex-h-between">
                        {
                            topMenuList.map((menu,index)=>{
                                return (
                                    <div className="common-menu-item flex-item-1" key={index}>
                                        <span className={`menu-icon iconfont ${menu.icon}`}></span>
                                        <p className="menu-title">{menu.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </header>
                
                {/* 主体 包含各种菜单入口 */}
                <div className="my-content">

                    <div className="news-center-entrance flex flex-h-between">
                        <div className="">
                            <span className="iconfont">&#xe60f;</span>
                            <span>点击进入消息中心</span>
                        </div>
                        <span className="menu-header-more">></span>
                    </div>

                    {/* 我的订单 */}
                    <div className="order-menu-list">
                        <div className="menu-header flex flex-h-between">
                            <span className="menu-header-title">我的订单</span>
                            <span className="menu-header-more">查看全部订单 ></span>
                        </div>
                        <div className="menu-content flex flex-h-between">
                        {
                            orderMenuList.map((item,index)=>{
                                return (
                                    <div className="order-menu-item flex-item-1" key={index}>
                                        <span className={`menu-icon iconfont ${item.icon}`}></span>
                                        <p className="menu-title">{item.title}</p>
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
                            walletMenuList.map((item,index)=>{
                                return (
                                    <div className="wallet-menu-item flex-item-1" key={index}>
                                        <p className="menu-amount">{item.amount}<span>{item.unit}</span></p>
                                        <p className="menu-title">{item.title}</p>
                                        <p className={`menu-sub-title ${item.title=='美团理财'?'last-wallet-menu':''}`}>{item.subTitle}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    {/* 互动签到 */}
                    <div className="sign-menu-list">
                        <div className="menu-header-title">互动签到</div>
                        <div className="menu-content flex flex-wrap">
                            {
                                signMenuList.map((item,index)=>{
                                    return (
                                        <div className="sign-menu-item flex flex-h-between" key={index}>
                                            <div className="sign-menu-left flex-column flex-h-end">
                                                <p>{item.title}</p>
                                                <p className="menu-sub-title">{item.subTitle}></p>
                                            </div>
                                            <span className={`menu-icon iconfont ${item.icon}`} style={{color: item.color}}></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* 推荐工具 */}
                    <div className="tools-menu-list">
                        <div className="menu-header-title">推荐工具</div>
                        <div className="menu-content flex flex-wrap">
                            {
                                toolsMenuList.map((item,index)=>{
                                    return (
                                        <div className="tools-menu-item" key={index}>
                                            <span className={`menu-icon iconfont ${item.icon}`} style={{color: item.color}}></span>
                                            <p className="menu-title">{item.title}</p>
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