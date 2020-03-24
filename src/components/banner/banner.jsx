import React, { Component } from 'react';
import './banner.scss';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            bannersArr: [],
            currentIndex: 0,
            timer: null,
            pageWidth: '',
        }
    }
    async componentDidMount(){
        await this.getBanners();
        this.autoScroll();
    }
    getBanners = () => {
        return new Promise((resolve,reject)=>{
            const requireContext = require.context("../../assets/images/banners/", true, /^\.\/.*\.jpg$/);
            const bannersArr = requireContext.keys().map(requireContext);
            if(bannersArr.length>0){
                this.setState({
                    bannersArr: [...bannersArr,bannersArr[0]],
                    pageWidth: document.body.clientWidth
                })
                resolve(bannersArr);
            }else{
                reject('没有可以播放的图片')
            }
        })
        
    }
    /**
     * 自动切换滚动效果
     */
    autoScroll = () => {
        let { bannersArr } = this.state;
        let imgArrLength = bannersArr.length;
        let _this = this;
        let timer = setInterval(function(){
            _this.setState(function(state,props){
                return {
                    currentIndex: state.currentIndex<imgArrLength-1?state.currentIndex+1:0
                }
            })
        }, 1000)
    }

    scrollBanner = (e)=>{
        // console.log(e)
    }

    render() {
        let { bannersArr,pageWidth,currentIndex } = this.state;
        return (
            <div className="banner-container">
            <div className="banner" onTouchMove={this.scrollBanner} style={{
                    'width': 5*pageWidth,
                    'left': -currentIndex*pageWidth
                }}>
                {
                    bannersArr.map((item,index) => (
                        <div className="banner-item" key={index} >
                            <img src={item.default} className="banner-img"/>    
                        </div>
                    ))
                }
            </div>
            </div>
        );
    }
}

export default Banner;