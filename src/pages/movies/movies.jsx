import React, { Component } from 'react'
import './movies.scss';
import '../../style/base.scss'

export default class Movies extends Component {
    render() {
        return (
            <div className="movies">
                <header className="header">
                    <span>猫眼电影</span>
                </header>
                <div className="content">
                    <div className="nav-bar flex-center">
                        <div className="bar-box">
                            <span className="bar-item">正在热映</span>
                            <span className="bar-item">即将上映</span>
                        </div>
                        <div className="search-box">
                            <span className="icon-search"></span>
                        </div>
                    </div>
                    <div className="movie-list">
                        <div className="movie-item">
                            <div className="movie-cover"></div>
                            <div className="movie-info"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
