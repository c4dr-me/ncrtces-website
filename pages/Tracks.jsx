import React, { useState } from 'react';
// import './Comingsoon.css';  // Import the CSS file
import './style.css'
const Tracks = () => {
  const[drop,setDrop] = useState(false);
  const[sec,setSec] = useState(false);
  // Function to toggle the dropdown menu
function toggleDropdown(id) {
  // const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll('.dropdown-menu');
  allDropdowns.forEach((item) => {
    if (item.id !== id) {
      setDrop(true);
    }
    setSec(sec=>!sec);
    // dropdown.classList.toggle('hidden');
  });
}
let toggleCheck = drop ?' hidden':null;
let toggleCheck2 = sec?' hidden':null;
// const track12 = document.getElementById('track1');
// track12.classList.remove('hidden');
  return (
    <section id="track" className="tracks-section section">
      <div className="w-full" >
    <div className=' bg-white pt-12 md:px-[10%]'>
      <div className='pt-16'>
        <h1 className='text-[#c00000] text-center text-3xl font-[600]'>TRACKS</h1>
        <div className='w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8'></div>
      </div>
      <div className="mx-auto md:ml-0 w-[90%] md:w-[300px]">
    <ul className="space-y-2">
        <li className="relative">
            <button type="button"
                className={`hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500${toggleCheck2}`}
                onClick={toggleDropdown('track1')}
                >
                Track I: Climate Change
            </button>
            <ul id="track1"
                className={`md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open${toggleCheck}`}>
                <li className="px-3 py-1">●	Climate Change and Health</li>
                <li className="px-3 py-1">●	Global Warming</li>
                <li className="px-3 py-1">●	Climate change: modelling, measurements, and predictions</li>
                <li className="px-3 py-1">●	Change economics, law and policy</li>
                <li className="px-3 py-1">●	Climate change, Green initiatives and products</li>
                <li className="px-3 py-1">●	Natural resources and Biodiversity in a warming world</li>
                <li className="px-3 py-1">●	Impacts, Hazards, risks, and effective adaptation to climate change</li>
            </ul>
        </li>

        <li className="relative">
            <button type="button"
                className={`hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500${toggleCheck2}`}
                onClick={toggleDropdown('track2')}
                >
                Track II: Energy
            </button>
            <ul id="track2"
                className={`md:absolute left-full top-0 mt-2 ml-2 w-[400px] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open${toggleCheck}`}>
                <li className="px-3 py-1">●	Energy Economics</li>
                <li className="px-3 py-1">●	Energy Efficiency</li>
                <li className="px-3 py-1">●	Energy Utilization</li>
                <li className="px-3 py-1">●	Smart Grids</li>
                <li className="px-3 py-1">●	Energy Data Analytics</li>
            </ul>
        </li>

        <li className="relative">
            <button type="button"
                className={`hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500${toggleCheck2}`}
                onClick={toggleDropdown('track3')}>
                Track III: Renewable Energy
            </button>
            <ul id="track3"
                className={`md:absolute left-full top-0 mt-2 ml-2 w-[400px] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open${toggleCheck}`}>
                <li className="px-3 py-1">●	IoT Design and Implementations</li>
                <li className="px-3 py-1">●	Big Data in IoT</li>
                <li className="px-3 py-1">●	Cloud & IoT</li>
                <li className="px-3 py-1">●	IoT Applications</li>
                <li className="px-3 py-1">●	IoT Enabled Innovation & Entrepreneurship</li>
                <li className="px-3 py-1">●	Security and Privacy</li>
                
            </ul>
        </li>

        <li className="relative">
            <button type="button"
                className={`hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500${toggleCheck2}`}
                onClick={toggleDropdown('track4')}>
                Track IV: Sustainability
            </button>
            <ul id="track4"
                className={`md:absolute left-full top-0 mt-2 ml-2 w-[400px] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open${toggleCheck}`}>
                <li className="px-3 py-1">●	Climate Change</li>
                <li className="px-3 py-1">●	Carbon Footprint</li>
                <li className="px-3 py-1">●	Sustainable Development</li>
                <li className="px-3 py-1">●	Sustainable Buildings</li>
                <li className="px-3 py-1">●	Waste Management and Recycling</li>
            </ul>
        </li>


        <li className="relative">
            <button type="button"
                className={`hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500${toggleCheck2}`}
                onClick={toggleDropdown('track5')}>
                Track V: Artificial Intelligence & Machine Learning
            </button>
            <ul id="track5"
                className={`md:absolute left-full top-0 mt-2 ml-2 w-[400px] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open${toggleCheck}`}>
                <li className="px-3 py-1">●	Web Intelligence Applications and Search</li>
                <li className="px-3 py-1">●	Semantic Web Techniques and Technologies</li>
                <li className="px-3 py-1">●	Information Retrieval</li>
                <li className="px-3 py-1">●	Connectivity and Networking</li>
                <li className="px-3 py-1">●	Ontology</li>
                <li className="px-3 py-1">●	Reasoning about Knowledge and Belief</li>
            </ul>
        </li>
    </ul>
</div>
    </div>
  </div>
      {/* <h1 classNameName="tracks-heading heading">Tracks</h1>
      <div classNameName="coming-soon">
        COMING SOON
      </div> */}
    </section>
  );
};

export default Tracks;
