// SlidingLoader.js
import React from 'react';
import './SlidingLoader.css';
import Namelogo from '../assests/motion_mode_FILL0_wght400_GRAD0_opsz48.svg?react';


const SlidingLoader = () => {
  return (
    <div className="sliding-loader-container">
        <div className='loader-holder'>
            <div className='namelogo'>
                <Namelogo fill='#E64D33' style={{ height: 50, width: 50 }} id="namelogo"/>
                <p className='namehead' style={{color:"white"}}>PRATHMESH INGOLE</p>
            </div>
            <div className="loader"></div>
          <p style={{fontFamily:"Fredericka the Great",fontSize:"0px"}}>.</p>
        </div>
    </div>
  );
};

export default SlidingLoader;
