
import './Comingsoon.css';  // Import the shared CSS file

const Registration = () => {
  return (
    <div id="reg">

      <div className="h-8 bg-white w-full">
      </div>
      <div className='w-full min-h-80'>
      <div className='bg-white px-[5%] md:px-[15%]'>
      <div>
        <h1 className='text-[#c00000] pt-16 text-center text-3xl font-[600]'>REGISTRATIONS</h1>
        <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
        <div className="h-12 bg-white w-full"></div>
      </div>
        <br/>
        <div className="flex text-md md:text-xl text-white bg-blue-400 font-[500] mx-[15%]">
          <div className="w-1/2 text-center py-3">Category</div>
          <div className='w-1 h-auto border-r-2 border-white'></div>
            <div className="w-1/2 text-center py-3">INR</div>
        </div>
        <div className="flex   text-md  md:text-xl mx-[15%] ">
          <div className="w-1/2 text-center py-3 ">Student/Research Scholar</div>
          <div className='w-1 h-auto border-r-2 border-[#e9e9e9]'></div>
            <div className="w-1/2 text-center py-3">1,500</div>
        </div>
        <div className="flex   text-md  md:text-xl bg-[#e9e9e9] mx-[15%]">
          <div className="w-1/2 text-center py-3">Academic/Faculty</div>
          <div className='w-1 h-auto border-r-2 border-white'></div>
            <div className="w-1/2 text-center py-3">3,000</div>
        </div>
        <div className="flex   text-md  md:text-xl mx-[15%]">
            <div className="w-1/2 text-center py-3">Industry/Delegates</div>
            <div className='w-1 h-auto border-r-2 border-[#e9e9e9]'></div>
            <div className="w-1/2 text-center py-3">5,000</div>
        </div>
        <div className="flex   text-md  md:text-xl bg-[#e9e9e9] mx-[15%]">
            <div className="w-1/2 text-center py-3">Attendees</div>
            <div className='w-1 h-auto border-r-2 border-white'></div>
            <div className="w-1/2 text-center py-3">1,000</div>
        </div>
        <br />
        <h2 className="pb-6 text-md md:text-2xl mt-20"><strong>Author/Co-Author Registration Fee Includes:</strong><br/></h2>
        <ul className="registration-features text-md md:text-lg font-[500] pl-2 list-[number] list-inside">
            <li>Access to Keynote talks</li>
            <li>Access to paper presentation sessions</li>
            <li>Conference lunch and refreshment</li>
            <li>Conference kit</li>
            <li>Publication in Proceeding</li>
            <li>Participation Certificate</li>
          </ul>
        
        <p className=" text-md md:text-xl pt-6 font-[500]">Every accepted paper MUST have at least one author registered to the conference by the time the camera-ready paper is submitted for the paper to appear in the proceedings and be included in the Technical Program.</p>
      </div>
    </div>
    </div>
  );
};

export default Registration;
