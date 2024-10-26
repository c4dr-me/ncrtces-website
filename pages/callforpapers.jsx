
const Cfp = () => {
  return (
    <div >
      {/* Placeholder Header for Smooth Scrolling */}
      <div  className="h-16 bg-white w-full"></div>

      {/* Main Content */}
      <div id="cfp" className="w-full text-white min-h-screen">
        <div className="bg-gradient-to-t from-blue-400 to-blue-500 px-[8%] md:px-[15%] py-16 shadow-lg">

          {/* Submission Header */}
          <header className="text-center">
            <h2 className="text-[#c00000] text-2xl font-semibold uppercase tracking-wider mb-10">
              Call for Papers 
              <div className="w-32 h-[4px] mx-auto bg-[#365372] rounded-xl mt-2 mb-4"></div>
             <div className='text-yellow-200'> Submit by 30th September, 2024</div>
            </h2>
          </header>

          {/* Conference Invitation */}
          <section className="text-center mb-12">
            <h3 className="text-3xl pb-6 font-semibold text-[#FFD700]">
              You are cordially invited to participate in
            </h3>
            <p className="text-lg md:text-2xl font-bold mt-3">
              The National Conference on Recent Trends in Climate Change, Energy<br/>
              and Sustainability (NCRTCES) 2024
            </p>
            <p className="mt-1 text-lg md:text-xl font-bold italic py-2">
              to be held on <br/> <span className="font-bold text-yellow-200 underline pb-2">11-12 November, 2024</span><br/> at <br />
              <span className="font-bold md:text-xl text-yellow-200 underline pb-2">Maharaja Surajmal Institute of Technology, C-4, Janakpuri, New Delhi, India</span>
            </p>
          </section>

          {/* Conference Description */}
          <article className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
            <p className="text-justify text-md md:text-xl pt-3 pb-16 leading-relaxed">
            <strong>NCRTCES 2024</strong> aims to identify unresolved research issues related to climate, energy and sustainability and to provide fresh, creative concepts in this area. It also covers Artificial Intelligence trends that promote environmental sustainability and effective energy use. The conference brings together researchers and application developers from the fields of climate change, energy, and sustainability to present their original research findings as well as discuss and disseminate creative ideas.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cfp;
