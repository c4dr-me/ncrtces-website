import React from "react";
import "../src/Main.css";
import CountdownTimer from "../components/CountdownTimer";
import Logo from './Logo.jpg';
const Main = () => {
  const targetDate = "2024-11-07T00:00:00";
  return (
    <div
      className="main flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      id="main"
    >
      <div className=" box text-center mb-8 text-white w-full sm:w-[calc(100%-40vw)] text-2xl sm:text-xl md:text-2xl lg:text-3xl bg-white bg-opacity-40 backdrop-blur-md rounded-xl shadow p-4 flex ">
        <img
              src="https://msit.in/static/img/msit.png"
              alt="Logo"
              style={{ height: "70px", width: "70px", marginRight: "5px",marginTop:'80px' }}
        />
        <div>
          <h1 className="font-semibold bg-gradient-to-t from-slate-900 to-slate-700 bg-clip-text text-transparent text-border event-title text-2xl sm:text-1xl md:text-2xl lg:text-3xl">
            National Conference on Recent Trends in Climate Change, Energy and
            Sustainability (NCRTCES)
          </h1>
          <h1 className="name mt-5 font-semibold gradient-text event-subtitle text-2xl sm:text-1xl md:text-2xl lg:text-3xl">
            Maharaja Surajmal Institute Of Technology.
          </h1>
          <h1 className="mt-3 font-bold bg-gradient-to-r from-slate-50 to-zinc-300 bg-clip-text text-transparent text-border event-date text-2xl sm:text-1xl md:text-2xl lg:text-3xl">
            November 7th - 8th 2024
          </h1>
        </div>
        <img
              src={Logo}
              alt="Logo"
              style={{ height: "75px", width: "80px", marginRight: "5px",marginTop:'80px' }}
        />
      </div>
      <div className="timer flex flex-col items-center">
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Main;
