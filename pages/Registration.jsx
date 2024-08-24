import React from 'react';
import './Comingsoon.css';  // Import the shared CSS file

const Registration = () => {
  return (
    <div id="reg">

      <div className="h-8 bg-white w-full">
      </div>
      <div className='w-full min-h-80'>
      <div className='bg-white px-[5%] md:px-[15%]'>
      <div>
        <h1 className='text-[#c00000] pt-16 text-center text-3xl font-[600]'>REGISTRATIONS</h1>
        <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
        <div className="h-12 bg-white w-full"></div>
      </div>
        <br/>
        <h2 className="pb-6 text-md md:text-xl mt-20"><strong>Author/Co-Author Registration Fee Includes:</strong><br/>
            1.	Access to Keynote talks <br/>
            2.	Access to paper presentation sessions <br/>
            3.	Conference lunch and refreshment* <br/>
            4.	Conference kit <br/>
            5.	Publication in Proceeding <br/>
            6.	Participation Certificate <br/>
        </h2>
        <p className=" text-md md:text-xl ">Every accepted paper MUST have at least one author registered to the conference by the time the camera-ready paper is submitted for the paper to appear in the proceedings and be included in the Technical Program.</p>
      </div>
    </div>
    </div>
  );
};

export default Registration;
