import React from 'react';
import './Comingsoon.css';  // Import the shared CSS file

const cfp = () => {
  return (
    <section id="schedule" className="section">
      <div className='bg-white px-[5%] md:px-[15%]'>
        <div>
            <h1 className='text-[#c00000] pt-10 text-center text-3xl font-[600]'>SCHEDULE</h1>
            <h2 className='text-[#000000] pt-12 text-center text-3xl font-[450]'>IMPORTANT DATES</h2>
            <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
            <div className="h-12 bg-white w-full"></div>
        </div>
        <div className="flex text-md md:text-lg md:text-xl text-white bg-blue-400 font-[500] py-3">
            <div className="w-1/2 text-center">EVENT</div>
            <div className="w-1/2 text-center">DATE</div>
        </div>
        <div className="flex   text-md md:text-lg md:text-xl py-3 bg-[#e9e9e9]">
            <div className="w-1/2 text-center">Paper submission Deadline</div>
            <div className="w-1/2 text-center">September 15, 2024</div>
        </div>
        <div className="flex   text-md md:text-lg md:text-xl py-3 ">
            <div className="w-1/2 text-center">Notification of acceptance</div>
            <div className="w-1/2 text-center">September 30, 2024</div>
        </div>
        <div className="flex   text-md md:text-lg md:text-xl py-3 bg-[#e9e9e9]">
            <div className="w-1/2 text-center">Camera-Ready Paper Submission</div>
            <div className="w-1/2 text-center">October 15, 2024</div>
        </div>
        <div className="flex   text-md md:text-lg md:text-xl py-3">
            <div className="w-1/2 text-center">Conference</div>
            <div className="w-1/2 text-center">November 07-08, 2024</div>
        </div>
    </div>
    </section>
  );
};

export default cfp;
