const Registration = () => {
  return (
    <section id="reg">
      <div className="h-8 w-full "></div>
      <div className="w-full min-h-80">
        <div className="bg-white px-[5%] md:px-[15%]">
          <div>
            <h1 className="text-[#c00000] pt-16 text-center text-3xl font-[600]">
              REGISTRATIONS
            </h1>
            <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>
            <div className="h-12 bg-white w-full"></div>
          </div>
          <br />
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex text-md md:text-xl text-white bg-blue-400 font-[500]">
              <div className="w-1/2 text-center py-3">Category</div>
              <div className="w-1 h-auto border-r-2 border-white"></div>
              <div className="w-1/2 text-center py-3">INR</div>
            </div>
            <div className="flex text-md md:text-xl">
              <div className="w-1/2 text-center py-3">
                Student/Research Scholar
              </div>
              <div className="w-1 h-auto border-r-2 border-[#e9e9e9]"></div>
              <div className="w-1/2 text-center py-3">1,500</div>
            </div>
            <div className="flex text-md md:text-xl bg-[#e9e9e9]">
              <div className="w-1/2 text-center py-3">Academic/Faculty</div>
              <div className="w-1 h-auto border-r-2 border-white"></div>
              <div className="w-1/2 text-center py-3">3,000</div>
            </div>
            <div className="flex text-md md:text-xl">
              <div className="w-1/2 text-center py-3">Industry/Delegates</div>
              <div className="w-1 h-auto border-r-2 border-[#e9e9e9]"></div>
              <div className="w-1/2 text-center py-3">5,000</div>
            </div>
            <div className="flex text-md md:text-xl bg-[#e9e9e9]">
              <div className="w-1/2 text-center py-3">Attendees</div>
              <div className="w-1 h-auto border-r-2 border-white"></div>
              <div className="w-1/2 text-center py-3">1,000</div>
            </div>
          </div>
          <br />
          <h2 className="text-xl pt-8 md:text-2xl font-semibold text-center text-[#c00000]">
            Author/Co-Author Registration Fee Includes:
          </h2>
          <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl mb-16"></div>
          <ul className="list-disc pl-5 text-md md:text-lg font-medium leading-relaxed space-y-2">
            <li className="text-gray-700">
              <span className="font-bold ">Access to Keynote talks</span>
            </li>
            <li className="text-gray-700">
              <span className="font-bold">
                Access to paper presentation sessions
              </span>
            </li>
            <li className="text-gray-700">
              <span className="font-bold ">
                Conference lunch and refreshment
              </span>
            </li>
            <li className="text-gray-700">
              <span className="font-bold ">Conference kit</span>
            </li>
            <li className="text-gray-700">
              <span className="font-bold ">Publication in Proceeding</span>
            </li>
            <li className="text-gray-700">
              <span className="font-bold ">Participation Certificate</span>
            </li>
          </ul>
          <p className="text-md md:text-lg mt-6 font-semibold text-gray-800">
            <span className="text-[#c00000] font-bold">Important:</span> Every
            accepted paper MUST have at least one author registered to the
            conference by the time the camera-ready paper is submitted for the
            paper to appear in the proceedings and be included in the Technical
            Program.
          </p>

          {/* Payment Information Section */}
          <div className="mt-16 bg-[#f9f9f9] p-6 rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-[#c00000]">
              Bank Transfer Details
            </h2>
            <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>

            <p className="text-md md:text-lg text-center mt-4">
              Please use the following bank details to complete your
              registration payment:
            </p>

            {/* Bank Details in a Card Style */}
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border">
              <div className="mb-4">
                <p className="font-bold text-md md:text-lg">Account Holder:</p>
                <p>Director, Maharaja Surajmal Institute of Technology</p>
              </div>
              <div className="mb-4">
                <p className="font-bold text-md md:text-lg">Address:</p>
                <p>
                  Maharaja Surajmal Institute, C4, Janakpuri, New Delhi - 110058
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold text-md md:text-lg">Bank Name:</p>
                <p>Indian Overseas Bank</p>
              </div>
              <div className="mb-4">
                <p className="font-bold text-md md:text-lg">Branch Address:</p>
                <p>
                  C Block Janakpuri, Maharaja Surajmal Inst. Pharmacy & Tech,
                  C-4, Janakpuri, New Delhi - 110058
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold text-md md:text-lg">IFSC:</p>
                <p>IOBA0001759</p>
              </div>
              <div className="mb-4">
                <p className="font-bold text-md md:text-lg">Account Number:</p>
                <p>175901000007113</p>
              </div>
            </div>

            <p className="text-md md:text-lg text-center font-medium mt-6">
              Ensure to include your full name and registration category while
              making the payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
