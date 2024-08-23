import React from "react";
import "../src/Main.css";
import CountdownTimer from "../components/CountdownTimer";
import Logo from './Logo.jpg';
import 'react-slideshow-image/dist/styles.css'
import { Fade,Zoom,Slide } from 'react-slideshow-image'
import { Opacity } from "@mui/icons-material";
const divStyle={
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height:'550px',
  backgroundSize:'cover',
}
const Main = () => {
  const slides=[
    {
      url:'https://msit.in/media/2017/03/15/aboutmsit.png'
    },
    {
      url:'https://images.squarespace-cdn.com/content/v1/5b9c8fb3c258b42748351a07/1597188834721-JRFYXCZIONFBUFUGUD6V/climate+change+women+gender+equality+action+1'
    },
    {
      url:'https://www.ece.fr/wp-content/uploads/sites/2/2024/04/42045_large.jpg?w=1200&h=630&crop=1'
    },
    {
      url:'https://news.sap.com/india/files/2022/08/09/sustainability-banner.jpg'
    }
  ];
  const targetDate = "2024-11-07T00:00:00";
  return (
    <div className="slide-container">
      <Zoom>
        {slides.map((image,index)=>(
          <div key={index}>
            <div style={{...divStyle,backgroundImage:`url(${image.url})`}} className="flex flex-col">
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
              style={{ height: "75px", width: "80px",marginTop:'80px',marginLeft:'-5%' }}
        />
      </div>
              <div className="timer flex flex-col items-center">
                  <CountdownTimer targetDate={targetDate} />
              </div>
            </div>
          </div>
        ))}

      </Zoom>
    </div>
  );
};

export default Main;
    