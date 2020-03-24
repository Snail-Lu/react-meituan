import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }
    /**
     * 自动切换滚动效果
     */
    autoScroll = () => {
        
    }

    scrollBanner = (e)=>{
        console.log(e)
    }

    render() {
        return (
            <div className="banner-container" onTouchMove={this.scrollBanner}>
                <ul className="banner">
                    {
                        ['1','2','3','4','5'].map((item,index) => (
                            <li className="banner-item" key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Banner;