import React from 'react';

const Hero = () => {
  return (
    <div className='banner-area' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../images/workbench.jpeg)'}}>
      <div className='content-area'>
        <div className="content">
          <h1>Find the next part of your journey</h1>
          <button>Browse all parts</button>
        </div>
      </div>
    </div>
  );
};


export default Hero;