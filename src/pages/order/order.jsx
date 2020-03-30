import React, { Component } from 'react';
import Tabbar from '../../components/tabbar/tabbar';
import Banner from '../../components/banner/banner';
import Navbar from '../../components/navbar/navbar';
import './order.scss';

class Order extends Component {
    render() {
        return (
            <div className="order-container">
                <header className="header">
                    <div className="header-top">
                        <input type="text" placeholder="搜索我的订单" />
                    </div>
                    <Tabbar />
                </header>
                <div className="content">
                    <Banner />
                    <div className="order-list">
                        {
                            ['1','2','3','4','5'].map((item,index)=>{
                                return (
                                    <div className="order-item">
                                        <div className="order-header flex flex-h-between">
                                            <div className="order-title">
                                                <img className="icon" src="/" alt=""/>
                                                <span>上海站→苏州站(抢票)</span>
                                            </div>
                                            <div className="order-status">退款完成</div>
                                        </div>
                                        <div className="order-content flex">
                                            <img className="order-img" src="/" alt=""/>
                                            <div className="order-info">
                                                <p>下单时间：2019-01-01 12:04</p>
                                                <p>数量：1</p>
                                                <p>总价：¥59</p>
                                            </div>
                                        </div>
                                        <div className="order-footer flex flex-h-end">
                                            <button>再次预定</button>
                                            <button>退款进度</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <footer className="footer">
                    <Navbar />
                </footer>
            </div>
        );
    }
}

export default Order;