import React from 'react'
// import "./Comingsoon.css"
import New from './new.gif'
const About = () => {
  return (
    <section id="about" className="w-full  text-white">
    <div className='bg-blue-400' >
    <div className='mt-4'>
    <div className="w-full py-6">
        <marquee className="text-xl">
          <div className="flex w-[250%]">
            <div><img src={New} alt="123"/></div><a href="#submissionsText"
              className="ml-2 text-[#FF0000 ] text-white text-lg mr-2">•<strong>Paper Submission Deadline: </strong>September 15,2024</a>
          </div>
          <div className="flex w-[500%]">
            <div><img src={New} alt="123"/></div><a href="#submissionsText"
              className="ml-2 text-[#FF0000 ] text-white text-lg ">•<strong>Notification of acceptance: </strong>September 30,2024</a>
          </div>
          <div className="flex w-[500%]">
            <div><img src={New} alt="123"/></div><a href="#"
              className="ml-2 text-[#FF0000 ] text-white text-lg ">•<strong>Camera-Ready Paper Submission: </strong>October 15,2024</a>
          </div>
          <div className="flex w-[250%]">
            <div><img src={New} alt="123"/></div><a href="#"
              className="ml-2 text-[#FF0000 ] text-white text-lg ">•<strong>Conference Dates: </strong>November 07-08,2024</a>
          </div>
        </marquee>
      </div>
      <div className=" px-[8%] md:px-[15%]">
        <h1 className='text-[#c00000] pt-6 text-center text-3xl font-[600]'>CONFERENCE OVERVIEW</h1>
        <div className='w-72 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
      </div>
      <p className='text-md md:text-xl px-[15%] mt-8 pb-28 text-justify'>
        Climate change is crucial to both healthy living and the continuation of life on
        Earth. The continuous evolution in the history of civilization has caused significant
        negative impact on the climate. Substantial research towards climate change,
        sustainability and energy optimization can mitigate a number of issues, including
        abrupt climatic change, rising temperatures, carbon emissions, greenhouse gas
        emissions, and energy waste. NCRTCES 2024 aims to identify unresolved research
        issues related to climate, energy and sustainability and to provide fresh, creative
        concepts in this area. AI trends for promoting environmental sustainability and
        efficient energy utilization is also included.
        <br />
        MSIT is an AICTE approved Institute under GGSIP University, ideally located in
        the Institutional area of Janakpuri, New Delhi. Established in 2001, MSIT has a
        campus spread over eight acres of land with beautiful eco-friendly surroundings.
        The institute provides Bachelor of Technology in CSE, IT, ECE and EEE streams.
        The institute is NAAC accredited (‘A’ grade) and all the branches are NBA
        accredited. MSIT is actively involved in research and aims to contribute towards a
        healthy sustenance of all inhabitants of the earth.
      </p>
    </div>
  </div>

    </section>
  )
}
export default About
