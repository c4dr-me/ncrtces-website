import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="w-full" id="contact">
        <div className=" bg-white pt-16">
          <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600] ">
              CONTACT US
            </h1>
            <div className="w-48 h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>
          </div>
          <div className="md:flex  justify-center">
            <div className="bg-[#f0f0f0] md:w-[25%] m-[5%] pb-[2%] rounded-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg">
            <i className="fa-solid fa-location-dot ml-[48%] text-[30px] mt-6 mb-4 text-[#c00000]"></i>
              <div className="text-center text-[24px] font-[600] ">
                CONFERENCE VENUE
              </div>
              <div className="text-center">
                <h1 className="text-gray-400 text-[22px] font-[500] mt-2">
                  Maharaja Surajmal
                </h1>
                <h1 className="text-gray-400 text-[22px] font-[500]">
                  Institute of Technology
                </h1>
                <h1 className="text-gray-600 font-[500] mt-2">C-4 Janakpuri</h1>
                <h1 className="text-gray-600 font-[500]">
                  New Delhi-110058, India
                </h1>
              </div>
            </div>
            <div className="bg-[#f0f0f0] md:w-[25%] m-[5%] pb-[2%] rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg">
            <i className="fa-solid fa-phone ml-[48%] text-[30px] mt-6 mb-4 text-[#c00000]"></i>
              <div className="text-center text-[24px] font-[600] ">
                PHONE NUMBER
              </div>
              <div className="text-center">
                <h1 className="text-gray-400 text-[22px] font-[500] mt-4">
                  9999061790
                </h1>
                 {/* <h1 className="text-gray-400 text-[22px] font-[500]">
                  25528117
                </h1>  */}
              </div>
            </div>
            <div className="bg-[#f0f0f0] md:w-[25%] m-[5%] pb-[2%] rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg">
            <i className="fa-solid fa-envelope ml-[48%] text-[30px] mt-6 mb-4 text-[#c00000]"></i>
              <div className="text-center text-[24px] font-[600] ">
                EMAIL ADDRESS
              </div>
              <div className="text-center">
                <h1 className="text-gray-400 text-[22px] font-[500] mt-6">
                 ncrtces2024@msit.in
                </h1>
              </div>
            </div>
          </div>
          {/* <div className="mb-5%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.291806062967!2d77.09043711451015!3d28.621015182422337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja+Surajmal+Institute+Of+Technology!5e0!3m2!1sen!2sin!4v1545672051814"
              width="100%"
              height="450"
              frameborder="0"
              style={{border:0}}
              allowfullscreen=""
            ></iframe>
          </div> */}
        </div>
      </div>
    </div> 
    
  )
};

export default Contact;
