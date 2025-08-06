import React from 'react';
import lostManImg from '../assets/image/png/lostman.png';
import errorNumberImg from '../assets/image/png/error-number.png';
import CommonBtn from './common/CommonBtn';

const PageNotFound = () => {

  return (
    <div className="min-h-screen flex items-center justify-center error_bg py-12 px-4">
      <div className="max-w-4xl w-full mx-auto">
        <section className="text-center space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white">
              Oops! Page Not Found, something went wrong
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="relative">
            <div className="w-30 sm:w-60 absolute left-1/2 -translate-x-1/2">
              <img src={lostManImg} alt="Lost Man" className="w-full h-auto animate-float" />
            </div>
              <img src={errorNumberImg} alt="404 Error" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex justify-center mt-8">
                            <CommonBtn
                                btnName='back to home'
                                btnStyling="!uppercase"
                               path={'/'}
                            />
                        </div>
        </section>
      </div>
    </div>
  );
};


export default PageNotFound
