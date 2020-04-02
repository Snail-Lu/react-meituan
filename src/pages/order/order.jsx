import React, { Component } from 'react';
import Tabbar from '../../components/tabbar/tabbar';
import Banner from '../../components/banner/banner';
import Navbar from '../../components/navbar/navbar';
import './order.scss';

class Order extends Component {
    render() {
        const orderList = [
            { orderType: 'trip', icon: 'icon-huoche', orderSn: '201912010001', status: '退款完成',
              orderInfo: { 
                title: '上海站→苏州站(抢票)', 
                date: '2019-01-01 12:04', 
                qty: 1, 
                imgUrl: 'icon-huoche',
                price: 59
              } 
            },
            { orderType: 'trip', icon: 'icon-huoche', orderSn: '201912010001', status: '退款完成',
              orderInfo: { 
                title: '上海站→苏州站(抢票)', 
                date: '2019-01-01 12:04', 
                qty: 1, 
                imgUrl: 'icon-huoche',
                price: 59
              } 
            },
            { orderType: 'trip', icon: 'icon-huoche', orderSn: '201912010001', status: '退款完成',
              orderInfo: { 
                title: '上海站→苏州站(抢票)', 
                date: '2019-01-01 12:04', 
                qty: 1, 
                imgUrl: 'icon-huoche',
                price: 59
              } 
            },
            { orderType: 'trip', icon: 'icon-huoche', orderSn: '201912010001', status: '退款完成',
              orderInfo: { 
                title: '上海站→苏州站(抢票)', 
                date: '2019-01-01 12:04', 
                qty: 1, 
                imgUrl: 'icon-huoche',
                price: 59
              } 
            }
        ];
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
                            orderList.map((item,index)=>{
                                return (
                                    <div className="order-item">
                                        <div className="order-header flex flex-h-between">
                                            <div className="order-title">
                                                <span className={`order-icon iconfont ${item.icon}`}></span>
                                                <span>{item.orderInfo.title}</span>
                                            </div>
                                            <div className="order-status">退款完成</div>
                                        </div>
                                        <div className="order-content flex">
                                            <span className={`order-img iconfont ${item.orderInfo.imgUrl}`}></span>
                                            <div className="order-info">
                                                <p>下单时间：{item.orderInfo.date}</p>
                                                <p>数量：{item.orderInfo.qty}</p>
                                                <p>总价：¥{item.price}</p>
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