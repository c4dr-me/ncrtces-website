import CopyableField from "../components/copyable";

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
            {/* Category Section */}
            <div className="flex text-md md:text-xl text-white bg-blue-400 font-[500]">
              <div className="w-1/2 text-center py-3">Category</div>
              <div className="w-1 h-auto border-r-2 border-white"></div>
              <div className="w-1/2 text-center py-3">INR</div>
            </div>

            {/* Fees Section */}
            {[
              { category: "Student/Research Scholar", fee: "1,500" },
              { category: "Academic/Faculty", fee: "3,000", bg: "bg-[#e9e9e9]" },
              { category: "Industry/Delegates", fee: "5,000" },
              { category: "Attendees", fee: "1,000", bg: "bg-[#e9e9e9]" },
            ].map(({ category, fee, bg = "" }, index) => (
              <div key={index} className={`flex text-md md:text-xl ${bg}`}>
                <div className="w-1/2 text-center py-3">{category}</div>
                <div className="w-1 h-auto border-r-2 border-[#e9e9e9]"></div>
                <div className="w-1/2 text-center py-3">{fee}</div>
              </div>
            ))}
            <p className="font-bold mt-5 text-lg">* The registration fees is non-refundable.</p>
          </div>

          <br />
          <h2 className="text-xl pt-8 md:text-2xl font-semibold text-center text-[#c00000]">
            Author/Co-Author Registration Fee Includes:
          </h2>
          <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl mb-16"></div>

          {/* Fee Includes Section */}
          <ul className="list-disc pl-5 text-md md:text-lg font-medium leading-relaxed space-y-2">
            {[
              "Access to Keynote talks",
              "Access to paper presentation sessions",
              "Conference lunch and refreshment",
              "Conference kit",
              "Publication in Proceeding",
              "Participation Certificate",
            ].map((item, idx) => (
              <li key={idx} className="text-gray-700">
                <span className="font-bold">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-md md:text-lg mt-6 font-semibold text-gray-800">
            <span className="text-[#c00000] font-bold">Important:</span> Every accepted paper MUST have at least one author registered to the conference by the time the camera-ready paper is submitted for the paper to appear in the proceedings and be included in the Technical Program.
          </p>

          <div className="mt-16 bg-[#f9f9f9] p-6 rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-[#c00000]">
              Bank Transfer Details
            </h2>
            <div className="w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl"></div>

            <p className="text-md md:text-lg text-center mt-4">
              Please use the following bank details to complete your registration payment:
            </p>

            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border">
              {/* Bank Details */}
              {[
                { label: "Account Holder", value: "Director, Maharaja Surajmal Institute of Technology" },
                { label: "Address", value: "Maharaja Surajmal Institute, C4, Janakpuri, New Delhi - 110058" },
                { label: "Bank Name", value: "Indian Overseas Bank" },
                { label: "Branch Name With Complete Address", value: "C Block Janakpuri, Maharaja Surajmal Inst. Pharmacy & Tech, C-4, Janakpuri, New Delhi - 110058" },
                { label: "IFSC", value: "IOBA0001759" },
                { label: "Account Number", value: "175901000007113" },
              ].map((field, idx) => (
                <CopyableField key={idx} label={field.label} value={field.value} />
              ))}
            </div>

            <p className="text-md md:text-lg text-center font-medium mt-6">
              Ensure to include your full name and registration category while making the payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
