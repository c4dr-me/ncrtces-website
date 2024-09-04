import { useState, useEffect, useRef } from 'react';
import './style.css';

const Committee = () => {
  const [activeCommittee, setActiveCommittee] = useState(null); // Default to 'committee0'
  const [activeTab, setActiveTab] = useState(null); // Default to 'home'
  const listRef = useRef(null);

  const changeTab = (id) => {
    setActiveTab(id);
    // Set active committee based on tab
    if (window.innerWidth < 768) {
      setActiveCommittee(null); // Reset active committee on mobile
    } else {
      setActiveCommittee(id); // Set active committee on desktop
    }
  };

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
        setActiveCommittee(activeTab); // Sync active committee with active tab on desktop
      } else {
        setActiveCommittee(null); // Reset active committee on mobile
      }
    };

    updateActiveCommittee();
    window.addEventListener('resize', updateActiveCommittee);
    return () => {
      window.removeEventListener('resize', updateActiveCommittee);
    };
  }, [activeTab]);

  useEffect(() => {
    if (activeTab && listRef.current) {
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
  }, [activeTab]);

  const commiteeNew = [
    {
      id:'advisory',
      members:[
        {name: 'Dr. Arun Kumar Tripathi, Former DG National Institute Solar Energy, Ministry of New and Renewable Energy'},
        {name: 'Dr. R. Krishnan, Director IITM, Pune'},
        {name: 'Dr. Purnima Jalihal, Scientist G, NIOT Chennai'},
        {name: 'Dr. V.S. Prasad, Director, NCMRWF, Noida'},
        {name: 'Dr. Jagvir Singh, Scientist G, Ministry of Earth Sciences, New Delhi'},
        {name: 'Prof. Prem Vrat, Pro-Chancellor; Professor of Eminence and Chief Mentor, The NorthCap University'},
        {name: 'Prof. Ved Prakash Former Chairman University Grant Commission '},
        {name: 'Prof. Saroj Kaushik Department of computer science & Engineering IIT, Delhi'},
        {name: 'Prof. K.K. Aggarwal, Former VC, IP University, India'},
        {name: 'Prof. Amit Prakash, GGSIPU, New Delhi'},
        {name: 'Prof. Ashok De, DTU Delhi'},
        {name: 'Dr. Darshana Hooda, DCRUST, Haryana'},
        {name: 'Prof. Poonam Bansal, IGDTU, New Delhi'},
        {name: 'Prof. Rajendra Singh, IIT Delhi'},
        {name: 'Prof. Narender Kumar, DTU, Delhi'},
        {name: 'Prof. J.S Lather, NIT, Kurukshetra'},
        {name: 'Dr. Kiran Gulia, University of Wolverhampton, UK'},
        {name: 'Sumita Singh, Senior Vice President and General Manager, Health, U.S. News & World Report'},
        {name: 'Dr. Vijender Singh Professor, Department of instrumentation and Control Engineering, NSUT, Delhi '},
        {name: 'Dr. Tejbir Singh Rana Associate Professor Shivaji College, University of Delhi '},
        {name: 'Prof. Devi Singh Former Director, IIM Lucknow and MDI Gurgaon Founding Vice Chancellor, FLAME University, Pune'},
        {name: 'Dr. N.K. Gupta Member, National Executive Council ISTE, Delhi '},
        {name: 'Prof. S.D. Joshi Department of Electrical Engineering IIT, Delhi '},
        {name: 'Dr. Sushil Chandra Former Scientist ‘G’, DRDO'},
        {name: 'Dr. T.V. Vijay Kumar Professor, School of Computer &Systems JNU, Delhi'},
      ],
    },
  ];
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



  const renderMembers = () => {
    const committeeList = activeTab === 'committee0' ? committees : commiteeNew;
    return committeeList.map(
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
    );
  };

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
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 mx-auto">
            <button className={`mx-auto tab text-lg rounded-lg ${activeTab === 'committee0' ? 'text-white bg-[#365372]' : 'text-black bg-white'} w-[80%] py-1`} onClick={() => changeTab('committee0')}>Organising Committee</button>
            <button className={`mx-auto tab text-lg rounded-lg ${activeTab === 'advisory' ? 'text-white bg-[#365372]' : 'text-black bg-white'} w-[80%] py-1`} onClick={() => changeTab('advisory')}>Advisory Committee</button>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 m-5">
            <div className="w-full md:w-[300px] relative">
              <ul className="space-y-2">
                {activeTab === 'committee0' ? (
                  committees.map((committee) => (
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
                  ))
                ) : (
                  commiteeNew.map((committee) => (
                    <li key={committee.id} className="relative">
                      <button
                        className={`hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 transition-all duration-200 ease-in-out  focus:outline-none focus:bg-gray-500 lg:w-full md:w-[190px] border border-borderColor ${
                          activeCommittee === committee.id ? 'bg-gray-500 text-white' : ''
                        }`}
                        onClick={() => handleCommitteeClick(committee.id)}
                      >
                        {committee.id === 'advisory' ? 'Advisory Committee' : committee.name}
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
                  ))
                )}
              </ul>
            </div>
            <div className="md:w-[calc(100%-300px)] border-b md:border-0 border-gray-300 pb-5" ref={listRef}>
              {renderMembers()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;
