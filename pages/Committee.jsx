import  { useState, useEffect, useRef } from 'react';
import './style.css';

const Committee = () => {
  const [activeCommittee, setActiveCommittee] = useState(null);
  const listRef = useRef(null);

  // Function to set the active committee (no toggling off on desktop)
  const handleCommitteeClick = (id) => {
    if (window.innerWidth < 768) {
      setActiveCommittee((prevActiveCommittee) => (prevActiveCommittee === id ? null : id));
    } else {
      setActiveCommittee(id);
    }
  };

  useEffect(() => {
    const updateActiveCommittee = () => {
      if (window.innerWidth >= 768) {
        setActiveCommittee('committee0');
      } else {
        setActiveCommittee(null); 
      }
    };

    updateActiveCommittee();
    window.addEventListener('resize', updateActiveCommittee);
    return () => {
      window.removeEventListener('resize', updateActiveCommittee);
    };
  }, []);

  useEffect(() => {
    if (activeCommittee && listRef.current && activeCommittee !== 'committee0') {
      const element = listRef.current;
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [activeCommittee]);

  const committees = [
    
    {
      id: 'committee0',
      name: 'Patrons',
      members: [
        { name: 'Sh. Kaptan Singh (President) SMES, New Delhi' },
        { name: 'Ms. Esha Jakhar, (Vice - President) SMES, New Delhi' },
        { name: 'Prof. Prem Vrat, (Pro - Chancellor) North Cap University, Gurgaon' },
        { name: 'Sh. Karnal Singh, (IPS) Former Director - Enforcement Directorate' },
        { name: 'Mr. Ajit Singh Chaudhary, (Secretary) SMES, New Delhi' },
        { name: 'Mr. Raj Pal Solanki, (Treasurer) SMES, New Delhi' },
        { name: 'Dr. Tejbir Singh Rana, (Chairman, Academic Committee) SMES, New Delhi' },
        { name: 'Sh. S.S. Solanki (Chairman Disciplinary (L)) SMES, New Delhi' },
      ],
    },
    {
      id: 'committee1',
      name: 'Organising Chair',
      members: [
        { name: 'Prof. Archana Balyan' },
      ],
    },
    {
      id: 'committee2',
      name: 'Convener',
      members: [
        { name: 'Prof. Koyel Datta Gupta'},
      ],
    },
    {
      id: 'committee3',
      name: 'Co-Conveners',
      members: [
        { name: 'Prof. Puneet Azad'},
        { name: 'Dr. Deepshikha Yadav'},
        { name: 'Dr. Anju Dhillon'},
      ],
    },
    {
      id: 'committee4',
      name: 'Program Committee',
      members: [
        { name: 'Prof. Puneet Azad' },
        { name: 'Mr. Manoj Malik' },
      ],
    },
    {
      id: 'committee5',
      name: 'Technical Review Committee',
      members: [
        { name: 'Dr. Ajay Gahlot'},
        { name: 'Dr. Anupama Kaushik'},
        { name: 'Dr. Deepti Deshwal'},
        { name: 'Dr. Tripti Rathee'},
      ],
    },
    {
      id: 'committee6',
      name: 'Sponsorship/Funding Committee',
      members: [
        { name: 'Dr. Anju Dhillon' },
        { name: 'Mr. Surender Bhanwala' },
        { name: 'Mr. Akshay Singh' },
      ],
    },
    {
      id: 'committee7',
      name: 'Website Committee',
      members: [
        {name: 'Dr. Vikrant Shokeen'},
      ],
    },
    {
      id: 'committee8',
      name: 'Finance Committee',
      members: [
        { name: 'Prof. Man Singh'},
      ],
    },
    {
      id: 'committee9',
      name: 'Publication Committee',
      members: [
        { name: 'Dr. Sakshi Rajput'},
        { name: 'Dr. Preeti Sehrawat'},
      ],
    },
    {
      id: 'committee10',
      name: 'Publicity, Design & Printing',
      members: [
        { name: 'Dr. Deepshikha Yadav'},
        { name: 'Dr. Kavita Sheoran'},
      ],
    },
    {
      id: 'committee11',
      name: 'Stage Committee',
      members: [
        { name: 'Dr. Shaily Malik'},
        { name: 'Ms. Neelam Nehra'},
      ],
    },
    {
      id: 'committee12',
      name: 'Hospitality Committee, MSIT',
      members: [
        { name: 'Dr. Rakhi Kamra'},
        { name: 'Dr. Vimal Gaur'},
        { name: 'Dr. Gitanjali'},
        { name: 'Ms. Annu Bhure'},
        { name: 'Ms. Gunjan'},
        { name: 'Ms. Vaani'},
      ],
    },
  ];

  return (
    <section id="committee" className="committee-section section hauto py-12">
      <div className="w-full">
        <div className="bg-white pt-12 md:px-[10%]">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600]">
              COMMITTEES
            </h1>
            <div className="w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 m-5">
            <div className="w-full md:w-[300px] relative">
              <ul className="space-y-2">
                {committees.map((committee) => (
                  <li key={committee.id} className="relative">
                    <button
                      className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 transition-all duration-200 ease-in-out  focus:outline-none focus:bg-gray-500 lg:w-full md:w-[190px] border border-borderColor ${
                        activeCommittee === committee.id ? 'bg-gray-500 text-white' : ''
                      }`}
                      onClick={() => handleCommitteeClick(committee.id)}
                    >
                      {committee.name}
                    </button>
                    <ul
                      id={committee.id}
                      className={`${
                        activeCommittee === committee.id ? 'block' : 'hidden'
                      } md:hidden bg-white mt-2 rounded-md shadow-lg text-left p-5 border borderColor`}
                    >
                      {committee.members.map((member, index) => (
                        <li
                          key={index}
                          className="py-1 text-black pl-4 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md"
                        >
                          <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2 shrink-0"></span>
                          <span className="font-semibold">{member.name}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div ref={listRef} className="hidden md:block mt-4 md:mt-0 w-full md:w-[800px] bg-white rounded-md shadow-lg p-6 border border-gray-300">
              {committees.map(
                (committee) =>
                  activeCommittee === committee.id && (
                    <ul key={committee.id} className="text-left">
                      {committee.members.map((member, index) => (
                        <li
                          key={index}
                          className="py-2 text-black pl-4 flex items-center transition-all duration-200 hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                          <span className="inline-block w-2 h-2 bg-[#365372] rounded-full mr-2"></span>
                          <span className="font-semibold">{member.name}</span>
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

export default Committee;
