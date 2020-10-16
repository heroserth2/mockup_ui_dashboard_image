import React, { Component } from 'react'

import '../StyleSheet/ViewScreen.scss'
import $ from 'jquery';
class ViewScreen extends Component {
    constructor(){
        super()
        this.state = {
            check_video : false
        }
    }
    componentDidMount(){
        $('.category li').on('click', function(){
            $('.category li').removeClass('active')
            $(this).toggleClass('active')
        })
        let slider = document.querySelector(".slider");
        if(slider.value === '50' && this.state.check_video === false){
            slider.value = 0
            this.setState({
                check_video : true
            })
        }
        let video
        video = document.querySelector(".video");
        video.ontimeupdate = function() {
            slider.value = (video.currentTime / video.duration) * 100
            if (this.currentTime == video.duration) {
                slider.value = 0;
                video.currentTime = 0;
                video.pause();
            }
        };
        $('.video').on('click', function(){
            let video = document.querySelector(".video")
            if (video.paused) {
                video.play()
              } else {
                video.pause()
            }
              $('.playPauseBtn').toggleClass('fa-play')
              $('.playPauseBtn').toggleClass('fa-pause')
        })
        $('.playPauseBtn').on('click', function(){
            let video = document.querySelector(".video");
            if (video.paused) {
                video.play();
              } else {
                video.pause();
            }
              $('.playPauseBtn').toggleClass('fa-play')
              $('.playPauseBtn').toggleClass('fa-pause')
        })
        $('.slider').on('input', function(){
            let slider = document.querySelector(".slider");
            let video = document.querySelector(".video")
            video.currentTime = (slider.value / 100) * video.duration
        })
        this.nextImage(1)
    }
    nextImage = (index) => {
        if(index === 1){
            $('.control-video').toggleClass('active')
        }else{
            $('.control-video').removeClass('active')
        }
        $('.control-b-image li').removeClass('active')
        document.getElementsByClassName('control-b-image')[0].children[index-1].classList.toggle('active')
        document.getElementById('carousel-slide-activator-'+index).checked = true
    }
    render() {
        return (
            <div className='view-screen'>
               <div className='status'> 
                   87%
               </div>
               <input className='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'  checked></input >
                        <input className='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'  ></input >
                        <input className='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'  ></input >
                        <input className='carousel__activator' id='carousel-slide-activator-4' name='carousel' type='radio'  ></input >
                        <input className='carousel__activator' id='carousel-slide-activator-5' name='carousel' type='radio'  ></input >
               <div className='body-screen'>
                    <div className='item'>
                        {/* controls */}
                    {/* <video  src='https://r5---sn-w5nuxa-c33lz.googlevideo.com/videoplayback?expire=1602691792&ei=cM6GX_qMH6miz7sP4N6roAM&ip=183.88.213.241&id=o-AMhJPUzdbFvXUDOlvpiril1CSGQW8ftO9TEmk6YxFG4y&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&mh=UW&mm=31%2C26&mn=sn-w5nuxa-c33lz%2Csn-npoeen7r&ms=au%2Conr&mv=m&mvi=5&pcm2cms=yes&pl=23&initcwndbps=867500&vprv=1&mime=video%2Fwebm&gir=yes&clen=186935847&dur=1574.573&lmt=1566530293521931&mt=1602670010&fvip=5&keepalive=yes&fexp=23915654&beids=9466585&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgSMDdRZxH0rVtPcYHI-6pmlq3KZBYLGOPBJM0jTlwKp4CIEzfzF1FoutxQwZAlqooCsBOJ5mZxbr7K4d8zAvpuCeO&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAMDlPDJLM69wXtJmPz167vlJQPnhu04_UbZijvk2zmW1AiASlyNDRCYysZcpcQZEVC3vuJ_E-2GL86REgurYMY4HgA%3D%3D&alr=yes&cpn=JudqLpS3Q-7ZNIGY&cver=2.20201013.02.02&rn=20&altitags=244%2C243' className='video'></video> */}
                    <video src='https://r3---sn-w5nuxa-c33le.googlevideo.com/videoplayback?expire=1602835715&ei=owCJX7XfH-aAjuMPv6e46Ag&ip=183.88.213.241&id=o-AKrC0YRu1Lk_As0_Bmmx7bvuYSN_CWGYMHXxT_XjDC0s&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&mh=4h&mm=31%2C26&mn=sn-w5nuxa-c33le%2Csn-npoeenek&ms=au%2Conr&mv=m&mvi=3&pcm2cms=yes&pl=23&initcwndbps=1348750&vprv=1&mime=video%2Fwebm&gir=yes&clen=89950932&dur=306.080&lmt=1578943564864855&mt=1602813988&fvip=3&keepalive=yes&fexp=23915654&beids=9466585&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALAM2QawKcySM-74xjDq81K7lBYp7RbHbPj5yIhdXbaGAiEAlYg5TC1CnJQC1R2NkvGHQnU17-dO9A6t2P_3vQgiDks%3D&alr=yes&sig=AOq0QJ8wRQIhANtgYvL-Ki9EAkn1YqQ1QPefY188yC1MuVy8BUo67ySGAiA0EKvJoK9PNOypS3hKHCtjkdw35aFXWtfB_KBW5Nw5Eg%3D%3D&cpn=7RHXjDNJjQArMjmC&cver=2.20201015.02.00&rn=1' className='video'/>
                    </div>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
                    <div className='item'>
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
                    <div className='item'>
                        
                        <img src='https://www.dualmonitorbackgrounds.com/albums/Sterling9192/mountain-wallpaper-oil-paint.png'></img>
                    </div>
               </div>
               <div className='control'>
                    <div className='control-video'> 
                        <i className='playPauseBtn fa fa-play '></i>   
                        <input type='range'  className='slider'  max='100'/>
                    </div>
                    <div>
                        <ul className='control-b-image'>
                            <li onClick={() => this.nextImage(1)} className='active'></li>
                            <li onClick={() => this.nextImage(2)}></li>
                            <li onClick={() => this.nextImage(3)}></li>
                            <li onClick={() => this.nextImage(4)}></li>
                            <li onClick={() => this.nextImage(5)} ></li>
                        </ul>
                    </div>
               </div>
            </div>
            
        )
    }
}
export default ViewScreen
