import { useState, useEffect } from "react";
import "./style.css";

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to toggle the dropdown menu for mobile view
  const toggleDropdown = (id) => {
    if (isMobileView) {
      setActiveTrack((prevActiveTrack) => (prevActiveTrack === id ? null : id));
    } else {
      setActiveTrack(id);
    }
  };
  useEffect(() => {
    const updateActiveTrack = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);

      if (!isMobile) {
        setActiveTrack("track1");
      } else {
        setActiveTrack(null);
      }
    };

    updateActiveTrack();
    window.addEventListener("resize", updateActiveTrack);
    return () => {
      window.removeEventListener("resize", updateActiveTrack);
    };
  }, []);

  const tracks = [
    {
      id: "track1",
      title: "Track I: Climate Change and Extreme Weather",
      items: [
        "Climate Management",
        "Global Issues and Risk Assessment",
        "Health And Environment",
        "Pollution",
        "Global Warming",
      ],
    },
    {
      id: "track2",
      title: "Track II: Energy",
      items: [
        "Energy Economics",
        "Energy Efficiency",
        "Energy Utilization",
        "Smart Grids",
        "Energy Data Analytics",
      ],
    },
    {
      id: "track3",
      title: "Track III: Weather Forecasting & Information Management",
      items: [
        "Generalisation of Ensemble Forecasts",
        "History of weather forecasting",
        "Modern methods of weather forecasting",
        "Numerical Prediction of Weather",
        "Use of forecast models",
      ],
    },
    {
      id: "track4",
      title: "Track IV: Sustainability",
      items: [
        "Climate Change",
        "Carbon Footprint",
        "Sustainable Development",
        "Sustainable Buildings",
        "Waste Management and Recycling",
      ],
    },
    {
      id: "track5",
      title: "Track V: Artificial Intelligence & Machine Learning",
      items: [
        "Green and Sustainable AI",
        "Smart City",
        "Predictive Models for Climate Monitoring",
        "ML & DL for Energy optimization",
        "Intelligent Smart Technology for Sustainability",
      ],
    },
    {
      id: "track6",
      title: "Special Session Proposal",
      items: [
        `1.  Special Session On Holistic Climate Resilience for Agriculture and Health Systems `, 
        'SESSION ORGANIZERS:',
        'Dr. Varuna Gupta, CHRIST University, Delhi-NCR, India, varunagupta.cs@gmail.com',
        'Dr. Aakansha Garg, ABES Institute of Technology, Ghaziabad, India, aakansha1986@gmail.com ',
        '2.  Special Session On AI for Global Sustainable Development',
        'SESSION ORGANIZERS:',
        ' Dr. Megha Rathi, Department of CSE & IT, Jaypee Institute of Information Technology, Noida, INDIA , drmegharathi.25@gmail.com',
        ' Dr. Adwitiya Sinha, Department of Natural and Applied Sciences, TERI School of Advanced Studies, New Delhi, INDIA, mailtoadwitiya@gmail.com ',
        `3. Click here : https://docs.google.com/document/d/1bQWRXwvZHXI2W7n2puQyfSy84YMTAQl3/edit?usp=drivesdk&ouid=107939780468160870267&rtpof=true&sd=true`,
      ],
    },
  ];

  return (
    <section id="track" className="tracks-section section hauto">
      <div className="w-full">
        <div className="bg-white pt-12 md:px-[10%]">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600]">
              TRACKS
            </h1>
            <div className="w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 m-5">
            <div className="w-full md:w-[300px] relative flex">
              <ul className="space-y-2 flex flex-col justify-around">
                {tracks.map((track) => (
                  <li key={track.id} className="relative">
                    <button
                      className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500 md:w-[190px] lg:w-full border border-borderColor ${
                        activeTrack === track.id ? "bg-gray-500 text-white" : ""
                      }`}
                      onClick={() => toggleDropdown(track.id)}
                    >
                      {track.title}
                    </button>

                    <ul
                      id={track.id}
                      className={`${
                        activeTrack === track.id ? "block" : "hidden"
                      } md:hidden bg-white mt-2 rounded-md shadow-lg text-left p-5 border borderColor`}
                    >
                      {track.items.map((item, index) => (
                        <li
                          key={index}
                          className="py-2 text-black pl-2 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                          <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2 shrink-0"></span>
                          <span className="font-semibold" style={{whiteSpace:'pre-wrap'}}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                {/* Special Session Button with href */}
                
                  {/* <a
                    href="https://docs.google.com/document/d/1bQWRXwvZHXI2W7n2puQyfSy84YMTAQl3/edit?usp=drivesdk&ouid=107939780468160870267&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  > */}
                    {/* <button className="w-full bg-gradient-to-r from-blue-300 to-blue-400 p-1 rounded-md">
                      <div className="bg-blue-500 text-white rounded-md py-2 font-medium hover:bg-blue-600 focus:outline-none">
                        Special Session
                      </div>
                    </button> */}
                  {/* </a> */}
              </ul>
            </div>
            <div className="hidden md:block mt-4 md:mt-0 w-full md:w-[800px] bg-white rounded-md shadow-lg p-5 border border-gray-300">
              {tracks.map(
                (track) =>
                  activeTrack === track.id && (
                    <ul key={track.id} className="text-left">
                      {track.items.map((item, index) => (
                        <li
                          key={index}
                          className="py-2 text-black pl-2 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                          <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2"></span>
                          <span className="font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
