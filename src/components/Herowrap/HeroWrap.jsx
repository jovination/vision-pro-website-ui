import React from 'react'
import './HeroWrap.css'
import Fashion_bg from '../../../public/fashion_bg.png';
import Logo from '../../../public/logo.png';
function HeroWrap() {
  return (
    <div>
        <div className="wrapper">
            <div className="upper_wrap">
                <div className="left_up">
                    <img className='logo logo-bg' src={Logo} alt="" />
                </div>
                <div className="right_up">
                    <div className="number_icon">
                        <span>01</span>
                    </div>
                    
                </div>
            </div>
            <div className="lower_wrap">
                <div className="left_seg">
                    <div className="ui_card"></div>
                </div>
                <div className="right_seg">
                   <img className='fashionbg' src={Fashion_bg} alt=""  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroWrap