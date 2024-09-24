import React from 'react'
import img1 from '../public/img1.png'
import img2 from '../public/img2.png'
import img3 from '../public/img3.jpg'
import img4 from '../public/img4.png'
import img5 from '../public/img5.jpg'
import img6 from '../public/img6.png'
import img7 from '../public/img7.jpg'
const Keynote = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#e9 e9e9] bg-white px-[15%]'>
      <div>
        <h1 className='text-[#c00000] pt-16 text-center text-3xl font-[600]'>KEYNOTE SPEAKERS</h1>
        <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
      </div>
    <div className="mt-20 pb-[50px]">
        <div className=" flex flex-wrap justify-around gap-[2%] ">
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img1} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr. Jagvir Singh</p>
                <p>Scientist G, Ministry of Earth</p>
                <p>Sciences, New Delhi</p>
        </div>
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img2} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr. Purnima Jalihal</p>
                <p>Scientist G, NIOT Chennai</p>
            </div>
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img3} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr Amit Kumar Tripathi</p>
                <p>Former DG National Institute Solar</p>
                <p>Energy, Ministry of New</p>
                <p>and Renewable Energy</p>
            </div>
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img4} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr V.S. Prasad</p>
                <p>Director, NCMRWF, Noida</p>
            </div>
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img5} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr Uday</p>
                <p>Scientist G, INCOIS, Hyderabad</p>
            </div>
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img6} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr Parul Singh</p>
                <p>Assistant Professor, University of Delhi</p>
            </div>
            <div className="w-[230px] mx-auto my-3 text-center font-[700]">
                <img className="w-full rounded-full border border-[4px] border-gray-500" src={img7} alt=""/>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">Dr.Sachi Nandan Mohanty</p>
                <p>Professor, School of Computer Science and Engineering</p>
                <p>VIT-AP University, Amaravati, AP, India</p>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Keynote
