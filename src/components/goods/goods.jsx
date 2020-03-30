import React, { Component } from 'react';
import { ActivityLabel } from '../common/common-component.jsx';
import './goods.scss';

class Goods extends Component {
    render() {
        return (
            <div className="goods">
                <div className="goods-img">
                    <img src="/" alt=""/>
                    <span className="takeout-label">外卖 可无接触配送 · 37分钟</span>
                </div>
                <div className="goods-info">
                    <div className="goods-name">叫了个炸鸡（秀沿路店）</div>
                    <div className="goods-comment">
                        <span className="rating">4.7分</span>
                        <span className="comment">外脆里嫩,鸡胸肉很厚</span>
                    </div>
                    <div className="activitity-list">
                        <ActivityLabel content="30减12" />
                        <ActivityLabel content="55减22" />
                        <ActivityLabel content="88减33" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Goods;