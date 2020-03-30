import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import ScrollTab from '../../components/scroll-tab/scroll-tab';
import './discovery.scss';

export default class Discovery extends Component {
    render() {
        const menuList = [
            {name:'外卖',icon:'',target: '/takeout'},
            {name:'美食',icon: '',target:'/foods'},
            {name:'酒店',icon: '',target: '/hotel'},
            {name:'休闲/玩乐',icon:'',target: '/play'},
            {name:'电影/演出',icon: '',target:'/movies'},

            {name:'打车',icon:'',target: '/taxi'},
            {name:'结婚/摄影',icon: '',target:'/marry'},
            {name:'超市/药店',icon: '',target: '/shop'},
            {name:'借钱/信用卡',icon:'',target: '/creditCard'},
            {name:'火车票/机票',icon: '',target:'/ticket'},

            {name:'免费领水果',icon:'',target: '/fruit'},
            {name:'袋鼠快跑',icon:'',target: '/game'},
            {name:'红包签到',icon:'', target: '/signIn'},
            {name:'免费领福利',icon:'', target: '/welfare'},
            {name:'更多',icon:'', target: '/more'}
        ];
        const shopList = [
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
            {name:"東盛自助料理",location:"人民广场/南京路",desc:"晚市自助餐",salePrice:"117.9",marketPrice:"158",salesNum:"8328",imgUrl:""},
            {name:"五颗星海鲜烤肉自助餐厅",location:"八佰伴",desc:"海鲜自助晚餐",salePrice:"129",marketPrice:"189",salesNum:"36332",imgUrl:""},
        ];
        const footerNavList = ['首页','我的','美团下载','电脑版','帮助'];
        const linksList = ['猫眼电影','大众点评','美团旅行','榛果民宿','大众点评下载','美团收银官网','美团点评餐饮学院','快驴进货商家合作'];

        return (
            <div className="discovery">
                {/* 顶部header */}
                <header className="header">
                    <div className="header-top">发现</div>
                    <ScrollTab />
                </header>

                <div className="content">

                    {/* discovery列表 */}
                    <div className="discovery-list flex flex-h-between flex-wrap">
                        {
                            ['1','2','3','4','5','6','7'].map((item,index)=>{
                                return (
                                    <div className="discovery-item">
                                        <div className="discovery-img">
                                            <img src="/" alt=""/>
                                            <span className="takeout-label">外卖 可无接触配送 · 37分钟</span>
                                        </div>
                                        <div className="discovery-info">
                                            <div className="discovery-name">叫了个炸鸡（秀沿路店）</div>
                                            <div className="discovery-comment">
                                                <span className="rating">4.7分</span>
                                                <span className="comment">外脆里嫩,鸡胸肉很厚</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                {/* 底部导航栏 */}
                <footer className="footer">
                    <Navbar />
                </footer>
            </div>
        )
    }
}
