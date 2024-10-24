import "../src/Main.css";
const Guide = () => {
  return (
    <div id='guide' className='bg-gradient-to-b from-blue-400 to-blue-600 text-white'>
      {/* Submission Guidelines */}
      <section id='submission-guideline' className='py-12 text-justify'>
        <div className='container mx-auto px-[8%] md:px-[15%] pt-20'>
          <div className='bg-transparent p-8 rounded-lg shadow-lg border-white border'>
            <h1 className='text-[#c00000] text-3xl font-bold text-center mb-4'>PAPER SUBMISSION GUIDELINES</h1>
            <div className='w-24 h-[2px] mx-auto bg-[#365372] rounded-full mb-6'></div>
            <div className='text-lg'>
              <p className='py-2 '>
                1. Authors are invited to submit full-length, original, unpublished papers 
              </p>
              <p className='py-2'>
                2. 	Kindly ensure that your paper is formatted <em>(minimum 6 pages and maximum 10 pages written in A4 size.)</em>
              </p>
              <p className='py-2'>
                3. 	Submissions will be subject to the standard review procedure.
              </p>

              <p className='py-2 font-bold'>
                4. Few good quality accepted and presented papers will be selected,and after further reviewing will be published in the following SCI/Scopus indexed journals.
                <ul className="list-[lower-roman] list-inside pl-5">
              <li className="py-2 font-bold">
              Special issue Cognitive Computing and Human Understandable Artificial Intelligence of  New Generation Computing. <span className="text-red-600">(SCI)</span>
              </li>
                  <li className="py-2 font-bold">MAPAN Journal of Metrology Society of India. The papers submitted for the journals must be in the scope of the Journals. <span className="text-red-600">(SCI)</span></li>
                  <li>Asian Journal Of Chemistry <span className="text-red-600 ">(Scopus)</span></li>
                  <li className="py-2 font-bold">Privacy-Preserving Techniques for Data Collection and Analysis in Ambient Intelligence Networks-Computing and Informatics. <span className="text-red-600">(SCI)</span></li>
                  <li className="py-2 font-bold">Proceedings on Engineering Sciences. <span className="text-red-600">(Scopus)</span></li>
                  </ul>
              </p>
              <p className="py-2">
              The papers submitted for the journals must be in the scope of the Journals. The decision of the journal will be final.<br/>
                5. All papers must be submitted via the link: <a href="https://cmt3.research.microsoft.com/NCRTCES2024" className='text-blue-200 underline hover:text-blue-100'>https://cmt3.research.microsoft.com/NCRTCES2024</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Guidelines */}
      <section id='author-guideline' className='py-12 text-justify'>
        <div className='container mx-auto px-[8%] md:px-[15%] py-20'>
          <div className='bg-transparent to-blue-500 p-8 rounded-lg shadow-lg border border-white '>
            <h1 className='text-[#c00000] text-3xl font-bold text-center mb-4'>AUTHOR GUIDELINES</h1>
            <div className='w-24 h-[2px] mx-auto bg-[#365372] rounded-full mb-6'></div>
            <div className='text-lg'>
              <strong className='block text-xl font-semibold italic underline mb-4'>
                PLAGIARISM POLICY :
              </strong>
              <p className='py-2'>
                1.The paper prior to submission should be checked for plagiarism from licensed plagiarism software like Turnitin/ithenticate etc. The similarity content should not exceed 15% <em>(in any case either self contents or others)</em>. Further, the author<em>(s)</em> have to strictly implement the following ethical guidelines for publication.
              </p>
              <p className='py-2'>
                2. Any form of self-plagiarism or plagiarism from others work<em>(s)</em> should not be there in an article. If any model / concept / figure / table / data / conclusive comment by any previously published work is used in the article, author should properly cite a reference to the original work.
              </p>
              <p className='py-2'>
                3. Also, language of explaining it should not be same as language of the work from which you have adopted it. If you are using any copyrighted material, you should acquire prior permission from the copyright holder.
              </p>

              <strong className='block text-xl font-semibold italic underline mt-6 mb-4'>
                PRIVACY POLICY :
              </strong>
              <p className='py-2'>
                1. 	Consent to Use Photographic, Video and Audio Recordings: Conference official photographers will be taking photographs, recording video or making audio recordings during the Conference. The photographs, videos, and audio recordings will be used for Conference-related activities included in the promotional material, in both print and electronic format, including on the Internet via MSIT website and Social media for Conference purpose only.
              </p>
              <p className='py-2'>
                2. By registering for a specific event, you agree to NCRTCES 2024 processing of the personal data you submit as part of registration for the following purposes :
              </p>
              <ul className='list-[lower-roman] list-inside pl-5'>
                <li className='py-1'>to communicate with you regarding the specific event for which you registered</li>
                <li className='py-1'>For our internal reporting purposes</li>
                <li className='py-1'>as reasonably necessary for the management and organization of the specific event for which you registered</li>
              </ul>
              <p className='py-2'>
                For any other questions regarding the processing of your personal data, contact <a href='mailto:ncrtces2024@msit.in' className='text-blue-200 underline hover:text-blue-100'>ncrtces2024@msit.in</a>
              </p>

              <strong className='block text-xl font-semibold italic underline mt-6 mb-4'>
                PAPER REVIEW, PUBLICATION, AND PRESENTER REGISTRATION :
              </strong>
              <p className='py-2'>
                1. All Submissions will be subject to double blind review, authors should avoid providing any details in the article that might disclose their identity.
              </p>
              <p className='py-2'>
                2. Papers will be accepted for regular presentations at the conference. Every accepted paper <span className='font-medium'>MUST</span> have at least one author registered to the conference by the time the camera-ready paper is submitted; at least one of the authors is also expected to attend the conference and present the paper.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
