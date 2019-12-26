import React, { Component } from 'react'
import './home.scss';
import '../../../style/base.scss'

export default class Home extends Component {
    render() {
        const movieList = [
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
            {'coverUrl':'','name':'叶问4：完结篇','rating':'9.5','actor':'甄子丹,吴樾,吴建豪','cinemaAmount':'331','roundAmount':'3785'},
        ];
        return (
            <div className="movie-home">
                <header className="header">
                    <span className="header-title">猫眼电影</span>
                    <div className="nav-bar flex-center">
                        <div className="bar-box">
                            <span className="bar-item">正在热映</span>
                            <span className="bar-item">即将上映</span>
                        </div>
                        <div className="search-box">
                            <span className="icon-search"></span>
                        </div>
                    </div>
                </header>
                <div className="content">
                    
                    <div className="movie-list">
                        {movieList.map((item,index)=>{
                            return (
                                <div className="movie-item flex" key={`item-${index}`}>
                                    <div className="movie-cover">
                                    </div>
                                    <div className="movie-info flex-item-1">
                                        <div className="info-title">{item.name}</div>
                                        <div className="info-rating">观众评<span>{item.rating}</span></div>
                                        <div className="info-actor">主演：{item.actor}</div>
                                        <div className="info-play">今天{item.cinemaAmount}家影院放映{item.roundAmount}场</div>
                                        <div className="info-btn">购票</div>
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
