import React, { Component } from 'react'
import './order.scss';
import '../../../assets/style/base.scss';

export default class Cinema extends Component {
    render() {
        const cinemaList = [
            {'name':'华莱士·全鸡汉堡','orderDate':'2019-12-08 11:09','pay':'57.5','orderStatus':'finished','list':[
                {'name':'烤肠','amount':'3'},
                {'name':'可乐','amount':'1'},
                {'name':'汉堡','amount':'3'}
            ]},
            {'name':'华莱士·全鸡汉堡','orderDate':'2019-11-30 19:00','pay':'57.5','orderStatus':'deliver','list':[
                {'name':'烤肠','amount':'3'},
                {'name':'可乐','amount':'1'},
                {'name':'汉堡','amount':'3'}
            ]},
            {'name':'华莱士·全鸡汉堡','orderDate':'2019-11-25 20:39','pay':'57.5','orderStatus':'finished','list':[
                {'name':'烤肠','amount':'3'},
                {'name':'可乐','amount':'1'},
                {'name':'汉堡','amount':'3'}
            ]},
            {'name':'华莱士·全鸡汉堡','orderDate':'2019-11-25 20:39','pay':'57.5','orderStatus':'finished','list':[
                {'name':'烤肠','amount':'3'},
                {'name':'可乐','amount':'1'},
                {'name':'汉堡','amount':'3'}
            ]},
            {'name':'华莱士·全鸡汉堡','orderDate':'2019-11-25 20:39','pay':'57.5','orderStatus':'finished','list':[
                {'name':'烤肠','amount':'3'},
                {'name':'可乐','amount':'1'},
                {'name':'汉堡','amount':'3'}
            ]},
            {'name':'华莱士·全鸡汉堡','orderDate':'2019-11-25 20:39','pay':'57.5','orderStatus':'finished','list':[
                {'name':'烤肠','amount':'3'},
                {'name':'可乐','amount':'1'},
                {'name':'汉堡','amount':'3'}
            ]},
            
        ];
        return (
            <div className="tk-order">
                <div className="tk-tabs">
                    {
                        ['全部订单', '待评价', '退款'].map((item,index)=>{
                            return (
                                <div className="tk-tab-item">{item}</div>
                            )
                        })
                    }
                </div>
                <div className="content">
                    <div className="order-list">
                        {cinemaList.map((item,index)=>{
                            return (
                                <div className="order-item" key={`item-${index}`}>
                                    <div className="item-top flex-center">
                                        <span className="top-avatar"></span>
                                        <span className="shop-name flex-item-1">{item.name}</span>
                                        <span className="icon-right"></span>
                                    </div>
                                    <div className="item-content">
                                        {item.list.map((itm,idx)=>{
                                            return (
                                                <div className="foods-item flex-between">
                                                    <span className="foods-name">{itm.name}</span>
                                                    <span className="foods-amount">x{itm.amount}</span>
                                                </div>
                                            )
                                        })}
                                        <div className="content-footer flex-between">
                                            <span className="order-date">{item.orderDate}</span>
                                            <span className="order-price">实付¥{item.pay}</span>
                                        </div>
                                    </div>
                                    <div className="item-bottom flex-between">
                                        <div className="order-status">{item.orderStatus=='finished'?'订单已完成':'订单配送中'}</div>
                                        <div className="order-action">
                                            <span className="primary-btn">删除</span>
                                            <span className="active-btn">再来一单</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
