
// import "./Comingsoon.css"
//import New from './new.gif'
import { Campaign } from '@mui/icons-material';
const About = () => {
  return (
    <section id="about" className="w-full  text-white">
      <div className='bg-gradient-to-b from-blue-400 to-blue-600'>
        <div className='mt-4 pt-20'>
          <div className="relative w-full py-6">
          <h1 className='text-[#c00000] pb-4 text-center text-3xl font-[600]'>Important Dates</h1>
          <div className='w-52 h-[3px] mx-auto mb-5 bg-[#365372] rounded-xl'></div>
            <marquee className="text-xl" behavior="scroll" direction="left" scrollamount="8">
              <div className="flex w-[250%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p
                  className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md mr-2">
                  • <strong className='tracking-wider'>Paper Submission Deadline : </strong>October 20, 2024
                </p>
              </div>
              <div className="flex w-[500%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p
                  className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  • <strong className='tracking-wider'>Notification of acceptance : </strong>October 25, 2024
                </p>
              </div>
              <div className="flex w-[500%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p
                  className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  • <strong className='tracking-wider'>Camera-Ready Paper Submission : </strong>October 30, 2024
                </p>
              </div>
              <div className="flex w-[250%] items-center">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 mb-2 shadow-md mr-3">
                  <Campaign className="text-red-700" />
                  <span className="ml-2 text-red-600 font-semibold">News</span>
                </div>
                <p
                  className="ml-2 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-2 mb-2 rounded-md shadow-md">
                  • <strong className='tracking-wider'>Conference Dates : </strong>November 11-12, 2024
                </p>
              </div>
            </marquee>
          </div>
      <div className=" px-[8%] md:px-[15%]">
        <h1 className='text-[#c00000] pt-6 text-center text-3xl font-[600]'>CONFERENCE OVERVIEW</h1>
        <div className='w-72 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
      </div>
      <p className='text-md md:text-xl px-[15%] mt-8 pb-28 text-justify'>
      Climate change is crucial to both healthy living and the continuation of life on Earth. The continuous evolution in the history of civilization has caused significant negative impact on the climate. Substantial research towards climate change, sustainability and energy optimization can mitigate a number of issues, including abrupt climatic change, rising temperatures, carbon emissions, greenhouse gas emissions, and energy waste. <strong>NCRTCES 2024</strong> aims to identify unresolved research issues related to environment, energy and sustainability and to provide fresh, creative concepts in this area. AI trends for promoting environmental sustainability and efficient energy utilization is also included. 
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
