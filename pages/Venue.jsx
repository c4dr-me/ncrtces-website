import React from 'react';

const Venue = () => {
  return (
    <section className="flex flex-col p-4 pt-10" id='venue'>
      <h1 className="text-[#c00000] text-center text-3xl font-[600] mt-8 mb-4">VENUE</h1>
      <div className="w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10">

        
      <div className="relative flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden border border-black group">
          <img
            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="India Gate"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h2 className="text-white text-xl font-bold">India Gate</h2>
          </div>
        </div>

       
        <div className="relative flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden border border-black group">
          <img
            src="https://images.unsplash.com/photo-1688257899811-d96d969416bf?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lotus Temple"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h2 className="text-white text-xl font-bold">Lotus Temple</h2>
          </div>
        </div>

       
        <div className="relative flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden border border-black group">
          <img
            src="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Red Fort"
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h2 className="text-white text-xl font-bold">Red Fort</h2>
          </div>
        </div>

        
          <div className="col-span-1 row-span-1 border border-black rounder-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3026434125186!2d77.08987957495634!3d28.620690284619396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1719752315118!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '20px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Venue;
