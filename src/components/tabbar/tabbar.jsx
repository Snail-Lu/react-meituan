import React, { Component } from 'react';
import './tabbar.scss';

class Tabbar extends Component {
    render() {
        const tabList = ['全部','待付款','待使用','待评价','退款/售后'];
        return (
            <div className="tabbar">
                <ul className="tab-box flex flex-h-between">
                    {
                        tabList.map((tab,tabIndex)=>{
                            return <li className="tab-item" key={tabIndex}>{tab}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Tabbar;