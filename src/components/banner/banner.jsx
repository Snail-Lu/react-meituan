import React, { Component } from 'react';
import './banner.scss';
const MIN_TOUCH_DISTANCE = 80;

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            bannersArr: [],
            currentIndex: 0,
            timer: null,
            pageWidth: '',
            left: ''
        }
    }
    async componentDidMount(){
        await this.getBanners();
        this.autoScroll();
    }
    getBanners = () => {
        return new Promise((resolve,reject)=>{
            //获取图片列表
            const requireContext = require.context("../../assets/images/banners/", true, /^\.\/.*\.jpg$/);
            const bannersArr = requireContext.keys().map(requireContext);
            if(bannersArr.length>0){
                this.setState({
                    bannersArr: [...bannersArr],
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
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            this.nextBanner();
        }, 2000)
    }

    nextBanner = () => {
        let { bannersArr,currentIndex,pageWidth } = this.state;
        let bannersLength = bannersArr.length;
        //当前图片已滚到最后一张图片（最后一张图片是第一张图片的克隆）
        if(currentIndex>=bannersLength){
            this.banner.style.transitionDuration = '0s';          //关闭过渡效果，因为第一张图片和最后一张图片是同一张图片，实现了无缝连接效果
            this.banner.style.left = -pageWidth+"px";             //位置回到首张图片位置
            setTimeout(()=>{
                this.banner.style.transitionDuration = '0.4s';    //重新打开过渡效果
                this.setState({                                   //滚动到第2张图片
                    currentIndex: 1,
                })
            },100);
            return;
        }
        this.setState({
            currentIndex: currentIndex + 1,
        })
    }

    prevBanner = () => {
        let { bannersArr,currentIndex,pageWidth } = this.state;
        let bannersLength = bannersArr.length;
        //当前图片已滚到最后一张图片（最后一张图片是第一张图片的克隆）
        if(currentIndex<0){
            console.log('-1')
            this.banner.style.transitionDuration = '0s';          //关闭过渡效果，因为第一张图片和最后一张图片是同一张图片，实现了无缝连接效果
            this.banner.style.left = -(bannersLength)*pageWidth + 'px';                           //位置回到首张图片位置
            setTimeout(()=>{
                this.banner.style.transitionDuration = '0.4s';    //重新打开过渡效果
                this.setState({                                   //滚动到第2张图片
                    currentIndex: bannersLength-2,
                })
            },100);
            return;
        }
        this.setState({
            currentIndex: currentIndex - 1,
        })
    }

    handleTouchStart = (e) =>{
        this.touchStartX = e.touches[0].clientX;
        clearInterval(this.timer);
    }

    handleTouchMove = (e) =>{
        this.touchEndX = e.touches[0].clientX;
        let { currentIndex,pageWidth } =  this.state;
        let bannerPositionX = -pageWidth*(currentIndex+1);
        let touchDistanceX = parseInt(this.touchEndX) - parseInt(this.touchStartX);
        this.banner.style.left = bannerPositionX + touchDistanceX + 'px';
    }

    handleTouchEnd = (e) =>{
        let { currentIndex,pageWidth } = this.state;
        let touchDistance = Math.abs(this.touchStartX-this.touchEndX);
        let direction = this.touchEndX > this.touchStartX?'prev':'next';

        console.log(this.touchStartX,'touchStartX');
        console.log(this.touchEndX,'touchEndX');
        console.log(touchDistance,'touchDistance');

        if(touchDistance>MIN_TOUCH_DISTANCE && direction=='next'){
            this.nextBanner();
        }else if(touchDistance>MIN_TOUCH_DISTANCE && direction=='prev'){
            this.prevBanner();
        }else{
            this.setState(function(state,props){
                return {
                    currentIndex: state.currentIndex
                }
            })
            this.banner.style.left = -(currentIndex+1)*pageWidth+'px';
        }
        
        setTimeout(()=>{
            this.autoScroll();
        },1000)
        
    }

    render() {
        let { bannersArr,pageWidth,currentIndex } = this.state;
        return (
            <div className="banner-container">
            <div id="banner" className="banner" 
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                draggable="true"
                ref={(banner)=>{this.banner=banner}}
                style={{
                    'width': (bannersArr.length+2)*pageWidth,
                    'left': -pageWidth*(currentIndex+1)
                }}>

                {/* 多加一张图片放到首部 */}
                <div className="banner-item" style={{
                    'width': pageWidth,
                }}>
                    <img src={bannersArr[bannersArr.length-1]?bannersArr[bannersArr.length-1].default:''} className="banner-img"/>    
                </div>
                {
                    bannersArr.map((item,index) => (
                        <div className="banner-item" key={index} style={{
                            'width': pageWidth,
                        }}>
                            <img src={item.default} className="banner-img"/>    
                        </div>
                    ))
                }

                {/* 多加一张图片放到尾部 */}
                <div className="banner-item" style={{
                    'width': pageWidth,
                }}>
                    <img src={bannersArr[0]?bannersArr[0].default:''} className="banner-img"/>    
                </div>
            </div>
            </div>
        );
    }
}

export default Banner;