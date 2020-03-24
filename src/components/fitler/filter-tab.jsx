import React, { Component } from 'react';
import "./filter-tab.scss";

class FilterTab extends Component {
    render() {
        return (
            <div className="filter-box flex">
                <div className="bar-item flex-item-1">休闲娱乐<span className="pull-icon">▼</span></div>
                <div className="bar-item flex-item-1">全城<span className="pull-icon">▼</span></div>
                <div className="bar-item flex-item-1">默认排序<span className="pull-icon">▼</span></div>
                <div className="bar-item flex-item-1">筛选<span className="pull-icon">▼</span></div>
            </div>
        );
    }
}

export default FilterTab;