import React from 'react';
import './Comingsoon.css'; // Import the shared CSS file

const Cfp = () => {
  return (
    <>
      {/* Placeholder Header for Smooth Scrolling */}
      <div id="cfp" className="h-16 bg-white w-full"></div>

      {/* Main Content */}
      <div className="w-full text-white min-h-screen">
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 px-[8%] md:px-[15%] py-16 shadow-lg">

          {/* Submission Header */}
          <header className="text-center">
            <h2 className="text-[#c00000] text-xl font-semibold uppercase tracking-wider mb-10">
              Call for Papers 
              <div className="w-32 h-[2px] mx-auto bg-[#c00000] rounded-full my-4"></div>
             <div className='text-yellow-200'> Submit by 15th September, 2024</div>
            </h2>
          </header>

          {/* Conference Invitation */}
          <section className="text-center mb-12">
            <h3 className="text-3xl pb-6 font-semibold text-[#FFD700]">
              You are cordially invited to participate in
            </h3>
            <p className="text-lg md:text-2xl font-bold mt-3">
              The National Conference on Recent Trends in Climate Change, Energy<br/>
              and Sustainability (NCRTCES) 2024
            </p>
            <p className="mt-1 text-lg md:text-xl font-bold italic py-2">
              to be held on <br/> <span className="font-bold text-yellow-200 underline pb-2">7-8 November, 2024</span><br/> at <br />
              <span className="font-bold md:text-xl text-yellow-200 underline pb-2">Maharaja Surajmal Institute of Technology, C-4, Janakpuri, New Delhi, India</span>
            </p>
          </section>

          {/* Conference Description */}
          <article className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
            <p className="text-justify text-md md:text-xl pt-3 pb-16 leading-relaxed">
              NCRTCES 2024 aims to identify unresolved research issues related to climate, energy, and sustainability and to provide fresh, creative concepts in this area. The conference also covers Artificial Intelligence trends that promote environmental sustainability and effective energy use. Researchers and application developers from these fields will gather to present their original research findings, discuss innovative ideas, and explore new possibilities in climate change, energy, and sustainability.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Cfp;
