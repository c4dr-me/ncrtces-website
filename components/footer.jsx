import React from "react";

const footer = () => {
  return (
    <footer className='w-full md:h-96 footer bg-[#365372] flex flex-col justify-evenly'>    
    <img className='mx-auto pt-6 md:pt-12 w-[80px] md:w-[120px]' src="https://msit.in/static/img/msit.png" alt="" />
    <h1 href="https://msit.in/" className='cursor-pointer text-white font-[600] text-center pt-4 text-lg md:text-2xl'>msit.in</h1>
    <div className='w-[60%] mx-auto h-[0px] border-dashed border-blue-900 border-[1px]  mt-2 md:mt-4'></div>
    <h1 className='text-white   mt-2 md:mt-4 text-center font-[600] mx-[5%]'><span  className='text-[#ecb227]'>Copyright © 2024</span> National Conference on Recent Trends in Climate Change, Energy and
    Sustainability (NCRTCES)<span  className='text-[#ecb227]'>All Rights Reserved.</span></h1>
    <div  className='flex justify-center text-xl md:text-3xl   py-3 md:mt-4 '>
        <i href="https://m.facebook.com/340860243221497/" className="cursor-pointer fa-brands fa-facebook text-white"></i>
        <i href="https://www.instagram.com/invites/contact/?i=1db3ohssgsiqo&utm_content=5yz2oup" className="cursor-pointer fa-brands fa-instagram ml-3 text-white"></i> 
        <i href="https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/" className="cursor-pointer fa-brands fa-linkedin ml-3 text-white"></i>
        <i href="https://twitter.com/msitnewdelhi?t=G_i_U0kRl1RIF6_Yt-w3sQ&s=08" className="cursor-pointer fa-brands fa-square-twitter ml-3  text-white "></i>

    </div>
</footer>
  );
};

export default footer;
