import React, { Component } from 'react';
import './scroll-tab.scss';

class ScrollTab extends Component {
    render() {
        const tabList = ['推荐','美食','丽人','旅行','电影','结婚','购物','教培','家装','亲子','运动健身','宠物','医美'];
        return (
            <div className="scroll-tab">
                <ul className="tab-box">
                    {
                        tabList.map((item,index)=>{
                            return <li className="tab-item" key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ScrollTab;