import React, { Component } from 'react'
import './my.scss';
import '../../../style/base.scss'

export default class My extends Component {
    render() {
        return (
            <div className="movie-my">
                <header className="header">
                    <span className="header-title">我的</span>
                    <div className="header-profile">
                        <div className="profile-box"></div>
                    </div>
                </header>
                <div className="content">
                    <div className="order-box">
                        <div className="box-top">
                            <div className="box-top-inner">
                                <span className="title">我的订单</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="box-content flex-center">
                            <div className="content-item flex-item-1">
                                {/* <div className="icon-box">

                                </div> */}
                                <span className="iconfont icon-dianying"></span>
                                <span className="item-txt">电影</span>
                            </div>
                            <div className="content-item flex-item-1">
                                <span className="iconfont icon-dianying"></span>
                                <span className="item-txt">商城</span>
                            </div>
                        </div>
                    </div>
                    <div className="assets-box">
                        <div className="coupon-item">
                            <span>优惠券</span>
                            <span className="icon-right"></span>
                        </div>
                        <div className="membercard-item">
                            <span>折扣卡</span>
                            <span className="icon-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

