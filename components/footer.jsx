import React from "react";

const footer = () => {
  return (
    <footer className="w-full md:h-96 footer bg-gradient-to-t from-blue-500 to-blue-400 flex flex-col justify-evenly">
      <img
        className="mx-auto pt-6 md:pt-12 w-[80px] md:w-[120px]"
        src="https://msit.in/static/img/msit.png"
        alt=""
      />
      <h1
        href="https://msit.in/"
        className="cursor-pointer text-white font-[600] text-center pt-4 text-lg md:text-2xl"
      >
        msit.in
      </h1>
      <div className="w-[75%] mx-auto h-[0px] border-white border-[1px]  mt-2 md:mt-4"></div>
      <h1 className="text-white    mt-2 md:mt-4 text-center font-[600] mx-[5%]">
        <span className=" font-bold">
          National Conference on Recent Trends in Climate Change, Energy and
          Sustainability (NCRTCES) 2024
        </span>{" "}
        <br />
        <span className="text-[#FFD700]">Copyright © 2024 |</span>&nbsp;
        <span className="text-[#FFD700]">All Rights Reserved.</span>
      </h1>
      <div className="flex justify-center text-xl md:text-3xl py-4 md:mt-4 mb-4">
        <a
          href="https://m.facebook.com/340860243221497/"
          className="cursor-pointer fa-brands fa-facebook text-white transform transition duration-300 hover:scale-110"
        ></a>
        <a
          href="https://www.instagram.com/invites/contact/?i=1db3ohssgsiqo&utm_content=5yz2oup"
          className="cursor-pointer fa-brands fa-instagram ml-3 text-white transform transition duration-300 hover:scale-110"
        ></a>
        <a
          href="https://www.linkedin.com/school/maharaja-surajmal-institute-of-technology-msitnewdelhi/"
          className="cursor-pointer fa-brands fa-linkedin ml-3 text-white transform transition duration-300 hover:scale-110"
        ></a>
        <a
          href="https://twitter.com/msitnewdelhi?t=G_i_U0kRl1RIF6_Yt-w3sQ&s=08"
          className="cursor-pointer fa-brands fa-square-twitter ml-3 text-white transform transition duration-300 hover:scale-110"
        ></a>
      </div>
    </footer>
  );
};

export default footer;
