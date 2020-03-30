import React, { Component } from 'react'
import './my.scss';
import '../../../assets/style/base.scss';

export default class My extends Component {
    render() {
        return (
            <div className="takeout-my">
                <header className="header">
                    <div className="header-profile">
                        <div className="profile-box"></div>
                        <div className="user-name">不会飞的咸鱼</div>
                    </div>
                </header>
                <div className="content">
                   <div className="assets-box">
                        <div className="coupon-item flex-between">
                            <span className="item-name">美团红包</span>
                            <span className="icon-right"></span>
                        </div>
                        <div className="coupon-item flex-between">
                            <span className="item-name">收货地址</span>
                            <span className="icon-right"></span>
                        </div>
                        <div className="coupon-item flex-between">
                            <span className="item-name">常见问题</span>
                            <span className="icon-right"></span>
                        </div>
                        <div className="coupon-item flex-between">
                            <span className="item-name">美团协议与说明</span>
                            <span className="icon-right"></span>
                        </div>
                    </div>
                    <div className="assets-box">
                        <div className="membercard-item flex-between">
                            <span className="item-name">退出账户</span>
                            <span className="icon-right"></span>
                        </div>
                    </div>
                    <div className="service-number">
                        客服电话：10109777
                    </div>
                    <div className="service-time">
                        服务时间：9:00-23:00
                    </div>
                </div>
            </div>
        )
    }
}

