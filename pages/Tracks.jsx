import React, { useState, useEffect } from 'react';
import './style.css';

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  // Function to toggle the dropdown menu
  const toggleDropdown = (id) => {
    setActiveTrack((prevActiveTrack) => (prevActiveTrack === id ? null : id));
  };

  useEffect(() => {
    const updateActiveTrack = () => {
      if (window.innerWidth >= 768) {
        setActiveTrack('track1');
      } else {
        setActiveTrack(null);
      }
    };

    updateActiveTrack();
    window.addEventListener('resize', updateActiveTrack);
    return () => {
      window.removeEventListener('resize', updateActiveTrack);
    };
  }, []);

  const tracks = [
    {
      id: 'track1',
      title: 'Track I: Climate Change',
      items: [
        'Climate Change and Health',
        'Global Warming',
        'Climate change, modelling, measurements, and predictions',
        'Change economics, law and policy',
        'Climate change, Green initiatives and products',
        'Natural resources and Biodiversity in a warming world',
        'Impacts, Hazards, risks, and effective adaptation to climate change',
      ],
    },
    {
      id: 'track2',
      title: 'Track II: Energy',
      items: [
        'Energy Economics',
        'Energy Efficiency',
        'Energy Utilization',
        'Smart Grids',
        'Energy Data Analytics',
      ],
    },
    {
      id: 'track3',
      title: 'Track III: Renewable Energy',
      items: [
        'Energy Efficient and Conversation',
        'Green Energy and Applications',
        'Hybrid Energy System',
        'Clean Energy',
        'Energy Harvesting Sensors',
      ],
    },
    {
      id: 'track4',
      title: 'Track IV: Sustainability',
      items: [
        'Climate Change',
        'Carbon Footprint',
        'Sustainable Development',
        'Sustainable Buildings',
        'Waste Management and Recycling',
      ],
    },
    {
      id: 'track5',
      title: 'Track V: Artificial Intelligence & Machine Learning',
      items: [
        'Green and Sustainable AI',
        'Smart City',
        'Predictive Models for Climate Monitoring',
        'ML & DL for Energy optimization',
        'Intelligent Smart Technology for Sustainability',
      ],
    },
  ];

  return (
    <section id="track" className="tracks-section section">
      <div className="w-full">
        <div className="bg-white pt-12 md:px-[10%]">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600]">TRACKS</h1>
            <div className="w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-[300px]">
              <ul className="space-y-2">
                {tracks.map((track) => (
                  <li key={track.id} className="relative">
                    <button
                      className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500 border border-borderColor ${
                        activeTrack === track.id ? 'bg-gray-500 text-white' : ''
                      }`}
                      onClick={() => toggleDropdown(track.id)}
                    >
                      {track.title}
                    </button>
                    <ul
                      id={track.id}
                      className={`${
                        activeTrack === track.id ? 'block' : 'hidden'
                      } md:hidden bg-white mt-2 rounded-md shadow-lg text-left`}
                    >
                      {track.items.map((item, index) => (
                        <li key={index} className="px-3 py-1 text-black">
                          ● {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block mt-4 md:mt-0 w-full md:w-[800px] bg-white rounded-md shadow-lg p-5 border borderColor">
              {tracks.map(
                (track) =>
                  activeTrack === track.id && (
                    <ul key={track.id} className="text-left">
                      {track.items.map((item, index) => (
                        <li key={index} className="px-3 py-1 text-black">
                          ● {item}
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
