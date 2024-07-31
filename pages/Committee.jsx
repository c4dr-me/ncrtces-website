import React from 'react';
// import './Comingsoon.css';  // Import the CSS file

const Committee = () => {

  return (
    <div className=" bg-white ">
      <div className="w-full" id="committee">
        <div className=' bg-white md:px-[10%]  pt-12'>
          <div className='pt-16'>
            <h1 className='text-[#c00000] text-center text-3xl font-[600]'>COMMITTEES</h1>
            <div className='w-48 h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
          </div>
          <div id="content1" className="content mt-8">
                  <div className="mx-auto md:ml-0 w-[90%] md:w-[300px]">

        <ul className="space-y-2">



        <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('patrons_dropdown')">
              Patrons
            </button>
            <ul id="patrons_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open">
              <li className="px-3 py-2">
              <li className="px-3 py-2"><strong> Sh. Kaptan Singh</strong>,  <strong> (President)</strong> SMES, New Delhi</li>
                      <li className="px-3 py-2"><strong>Ms. Esha Jakhar</strong>,<strong> (Vice - President)</strong> SMES, New Delhi</li>
                      <li className="px-3 py-2"><strong> Prof. Prem Vrat</strong>,<strong> (Pro - Chancellor)</strong> North Cap University, Gurgaon</li>
                      <li className="px-3 py-2"><strong> Sh. Karnal Singh</strong>,<strong> (IPS)</strong> Former Director - Enforcement Directorate </li>
                      <li className="px-3 py-2"><strong> Mr. Ajit Singh Chaudhary</strong>, <strong> (Secretary)</strong> SMES, New Delhi</li>
                      <li className="px-3 py-2"><strong> Mr. Raj Pal Solanki</strong>,<strong> (Treasurer)</strong> SMES, New Delhi </li>
                      <li className="px-3 py-2"><strong> Dr. Tejbir Singh Rana</strong>,<strong> (Chairman, Academic Committee)</strong> SMES, New Delhi </li>
                      <li className="px-3 py-2"><strong> Sh. S.S. Solanki</strong><strong>(Chairman Disciplinary(L))</strong> SMES, New Delhi</li>
              </li>
            </ul>
          </li>





          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full  bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('organising_chair_dropdown')">
              Organising Chair
            </button>
            <ul id="organising_chair_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu open">
              {/* <li className="px-3 py-2">
                <strong>General Chair(s)</strong>
              </li> */}
              <li className="px-3 py-2">
                {/* <strong>Conference Chair</strong> */}
                <li className="px-3 py-2">
                <h1><span className="font-semibold">Prof. Archana Balyan</span>, Director, MSIT</h1>
                </li>
              </li>
              {/* <li className="px-3 py-2">
                <strong>Conference Co-Chair</strong>
                <li className="px-3 py-2">
                <h1><span className="font-semibold">Durga Suresh-Menon</span>, Dean, School of computing and Data Science, WIT, USA</h1>
                </li>
              </li> */}
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('convener_dropdown')">
              Convener
            </button>
            <ul id="convener_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Prof. Koyel Datta Gupta</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('co_conveners_dropdown')">
              Co-Conveners
            </button>
            <ul id="co_conveners_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Prof. Puneet Azad</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Deepshikha Yadav</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Anju Dhillon</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('technical_review_dropdown')">
              Technical Review Committee
            </button>
            <ul id="technical_review_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Ajay Gahlot</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Anupama Kaushik</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Deepti Deshwal</strong>
              </li>
              {/* <li className="px-3 py-2">
                <span className="org_comm_headings">WIT:</span>
              </li> */}
              <li className="px-3 py-2">
                <strong>Dr. Tripti Rathee</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('program_committee_dropdown')">
              Program Committee
            </button>
            <ul id="program_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              {/* <li className="px-3 py-2">
                <span className="org_comm_headings">MSIT:</span>
              </li> */}
              <li className="px-3 py-2">
                <strong>Prof. Puneet Azad</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Mr. Manoj Malik</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('finance_committee_dropdown')">
              Finance Committee
            </button>
            <ul id="finance_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Prof. Man Singh</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('publication_committee_dropdown')">
              Publication Committee
            </button>
            <ul id="publication_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Sakshi Rajput</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Preeti Sehrawat</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('publicity_committee_dropdown')">
              Publicity Committee
            </button>
            <ul id="publicity_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Kavita Sheoran</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Deepshikha Yadav</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('website_committee_dropdown')">
              Website Committee
            </button>
            <ul id="website_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Vikrant Shokeen</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('registration_committee_dropdown')">
              Registration Committee, MSIT
            </button>
            <ul id="registration_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Shaily Malik</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Ms. Annu Dagar</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Ms. Swati Malik</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('sponsorship_committee_dropdown')">
              Sponsorship Committee, MSIT
            </button>
            <ul id="sponsorship_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Anju Dhillon</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Mr. Surender Bhanwala</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Mr. Akshay Singh</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('reception_committee_dropdown')">
              Stage Committee, MSIT
            </button>
            <ul id="reception_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Shaily Malik</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Ms. Neelam Nehra</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('hospitality_committee_dropdown')">
              Hospitality Committee, MSIT
            </button>
            <ul id="hospitality_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Dr. Vimal Gaur</strong>
              </li><li className="px-3 py-2">
                <strong>Dr. Rakhi Kamra</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Gitanjali</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Ms. Annu Bhure</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Ms. Gunjan</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Ms. Vaani</strong>
              </li>
            </ul>
          </li>
          <li className="relative">
            <button type="button" className="hover:text-white focus:text-white w-full bg-gray-200 text-left pl-3 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-500" onclick="toggleDropdown('local_committee_dropdown')">
              Local Organizing Committee, MSIT
            </button>
            <ul id="local_committee_dropdown" className="md:absolute left-full top-0 mt-2 mx-auto md:ml-2 w-[100%] md:w-[800px] bg-white rounded-md shadow-lg hidden text-left dropdown-menu">
              <li className="px-3 py-2">
                <strong>Mr. Manoj Malik</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Rakesh Kumar</strong>
              </li>
              <li className="px-3 py-2">
                <strong>Dr. Sitender Malik</strong>
              </li>
            </ul>
          </li>
        </ul>






            </div>
          </div>
        </div>
      </div>
  </div>

  );
};

export default Committee;