
import React from 'react';

const PreLoader = () => {
  return (
    <div
      id="preloader"
      className="fixed top-0 left-0 w-full h-full z-[999999] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)' }}
    >
      <div
        className="rounded-full p-1 flex items-center justify-center animate-spin"
        style={{
          width: '150px',
          height: '150px',
          background: 'linear-gradient(313deg, rgba(127, 35, 233, 0.1) 0%, #3f169a 100%)',
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </div>
    </div>
  );
};

export default PreLoader
