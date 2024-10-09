const cfp = () => {
  return (
    <section id="schedule" className="section">
      <div className='bg-white w-full px-[5%] md:px-[15%]'>
        <div>
          <h1 className='text-[#c00000] pt-10 text-center text-3xl font-[600]'>SCHEDULE</h1>
          <div className="w-[100px] h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
          <h2 className='text-[#000000] pt-12 text-center text-3xl font-[450]'>IMPORTANT DATES</h2>
          <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
          <div className="h-12 bg-white w-full"></div>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex text-md md:text-xl text-white bg-blue-400 font-[500]">
            <div className="w-1/2 text-center py-3">EVENT</div>
            <div className='w-1 h-auto border-r-2 border-white'></div>
            <div className="w-1/2 text-center py-3">DATE</div>
          </div>
          <div className="flex text-md md:text-xl">
            <div className="w-1/2 text-center py-3">Paper submission Deadline</div>
            <div className='w-1 h-auto border-r-2 border-[#e9e9e9]'></div>
            <div className="w-1/2 text-center py-3">September 30, 2024</div>
          </div>
          <div className="flex text-md md:text-xl bg-[#e9e9e9]">
            <div className="w-1/2 text-center py-3">Notification of acceptance</div>
            <div className='w-1 h-auto border-r-2 border-white'></div>
            <div className="w-1/2 text-center py-3">October 10, 2024</div>
          </div>
          <div className="flex text-md md:text-xl">
            <div className="w-1/2 text-center py-3">Camera-Ready Paper Submission</div>
            <div className='w-1 h-auto border-r-2 border-[#e9e9e9]'></div>
            <div className="w-1/2 text-center py-3">October 15, 2024</div>
          </div>
          <div className="flex text-md md:text-xl bg-[#e9e9e9]">
            <div className="w-1/2 text-center py-3">Conference</div>
            <div className='w-1 h-auto border-r-2 border-white'></div>
            <div className="w-1/2 text-center py-3">November 07-08, 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cfp;