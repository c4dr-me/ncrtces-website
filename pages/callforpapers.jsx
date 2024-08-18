import React from 'react';
import './Comingsoon.css';  // Import the shared CSS file

const cfp = () => {
  return (
    <>
      <div id="cfp" className="h-16 bg-white w-full">

      </div>

      <div className='w-full text-white'>
          <div className='bg-blue-400 px-[8%] md:px-[15%]'>
          <div>
              <h1 className='text-[#c00000] pt-16 text-center text-3xl font-[600]'>CALL FOR PAPERS</h1>
              <div className='w-32 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
            </div>
            <p className="text-justify text-md md:text-lg pt-8 ">  Call for papers |  Submit by 15th September, 2024
            You are cordially invited to participate in the National Conference on Recent Trends in Climate Change, Energy and Sustainability (NCRTCES) 2024  
            to be held on 7-8 November, 2024 at 
            Maharaja Surajmal Institute of Technology, C-4, Janakpuri, New Delhi, India.
            </p>
            <p className="text-justify text-md md:text-lg pt-3 pb-16">NCRTCES 2024 aims to identify unresolved research issues related to climate, energy and sustainability and to provide fresh, creative concepts in this area. It also covers Artificial Intelligence trends that promote environmental sustainability and effective energy use. The conference brings together researchers and application developers from the fields of climate change, energy, and sustainability to present their original research findings as well as discuss and disseminate creative ideas.</p>

          </div>
      </div>
    </>
  );
};

export default cfp;
