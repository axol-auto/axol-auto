import React from 'react';

const Hero = () => {
  return (
    <div className='banner-area' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../images/piston-head.jpeg)'}}>
      <div className='content-area'>
        <div className="content">
          <h1 className='text-4xl mb-8 font-bold'>Find the next part of your journey</h1>
          <button className='browse-all hover:bg-sky-500 bg-sky-600 rounded-full text-lg border-solid border border-sky-500'>Browse all parts</button>
        </div>
      </div>
    </div>
  );
};


export default Hero;