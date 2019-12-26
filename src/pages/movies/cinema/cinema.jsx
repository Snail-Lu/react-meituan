import React, { Component } from 'react'
import './cinema.scss';
import '../../../style/base.scss'

export default class Cinema extends Component {
    render() {
        const cinemaList = [
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
            {'name':'和平影都','minPrice':'13','address':'黄浦区西藏中路290号（近汉口路）','label':['退','改签','折扣卡','IMAX厅'],'activities':'开卡特惠，9.9元起开卡'},
        ];
        return (
            <div className="movie-cinema">
                <header className="header">
                    <span className="header-title">影院</span>
                    <div className="nav-bar flex-center">
                        <div className="search-box">
                            <span className="icon-search"></span>
                            <span className="txt-search">搜影院</span>
                        </div>
                    </div>
                    <div className="filter-bar flex-center">
                        <div className="bar-item flex-item-1">全城<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">品牌<span className="pull-icon">▼</span></div>
                        <div className="bar-item flex-item-1">特色<span className="pull-icon">▼</span></div>
                    </div>
                </header>
                <div className="content">
                    <div className="cinema-list">
                        {cinemaList.map((item,index)=>{
                            return (
                                <div className="cinema-item" key={`item-${index}`}>
                                    <div className="item-name">
                                        <span>{item.name}</span>
                                        <span className="item-price">{item.minPrice}</span>
                                        <span className="item-price-label">元起</span>
                                    </div>
                                    <div className="item-address">
                                        {item.address}
                                    </div>
                                    <div className="label-box">
                                        {item.label.map((itm,index)=>{
                                            return (
                                                <span className="label-item" key={`item-${index}`}>{itm}</span>
                                            )
                                        })}
                                    </div>
                                    <div className="item-activity">
                                        <span className="activity-label">卡</span>
                                        <span>{item.activities}</span>
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
