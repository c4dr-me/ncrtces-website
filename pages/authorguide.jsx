import React from 'react'

const authorguide = () => {
  return (
    <>
         <div id="author-guideline" className="h-16 bg-blue-400 w-full">
    </div>
    <div className='w-full text-white'>
    <div className='bg-blue-400 px-[8%] md:px-[15%]'>
    <div>
      <h1 className='text-[#c00000] pt-16 text-center text-3xl font-[600]'>AUTHOR GUIDELINES</h1>
      <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
    </div>
    <strong class='text-md md:text-xl  pt-6 pb-2 italic font-[750] underline'>
    PLAGIARISM POLICY :
    </strong> 
    <p className="text-lg py-2">1.	The paper prior to submission should be checked for plagiarism from licensed plagiarism softwares like Turnitin/ithenticate etc. The similarity content should not exceed 15% (in any case either self contents or others). Further, you have to strictly implement the following ethical guidelines for publication.</p>
    <p id="privacy" className="text-lg">2.	Any form of self-plagiarism or plagiarism from others' work(s) should not be there in an article.If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work.</p>
    <p className="text-lg py-2">3.	Also language of explaining it should not be same as language of the work from which you have adopted it.If you are using any copyrighted material, you should acquire prior permission from the copyright holder.</p>
    <strong className='text-md md:text-xl pt-4 pb-2 italic font-[750] underline'>
    PRIVACY POLICY :
    </strong> 
    <p className="text-lg py-1">1.   Consent to Use Photographic, Video and Audio Recordings: Conference official photographers will be taking photographs, recording video or making audio recordings during the Conference. The photographs, videos, and audio recordings will be used for Conference-related activities included in the promotional material, in both print and electronic format, including on the Internet via MSIT website and Social media for Conference purpose only.</p> 
    <p className="text-lg py-1">2.	By registering for a specific event, you agree to NCRTCES 2024 processing of the personal data you submit as part of registration for the following purposes :</p>
          <ul className='list-[lower-roman] list-inside pl-4 text-medium'>
            <li className='py-1'>to communicate with you regarding the specific event for which you registered</li>
            <li className='py-1'>for our internal reporting purposes</li>
            <li className='py-1'>as reasonably necessary for the management and organization of the specific event for which you registered</li>
          </ul>
    {/* <strong className=' tpy-1'>i.</strong>	to communicate with you regarding the specific event for which you registered <br/>
    <strong className='py-1'>ii.</strong>	for our internal reporting purposes <br/>
    <strong className='py-1'>iii.</strong>	as reasonably necessary for the management and organization of the specific event for which you registered <br/> */}
    <p className="text-lg py-3">For any other questions regarding the processing of your personal data, contact to ncrtces2024@msit.in <br/>
    </p>
    <strong className='text-md md:text-xl pt-4 pb-2 italic font-[750] underline'>
    PAPER REVIEW, PUBLICATION AND PRESENTER REGISTRATION :
    </strong> 
    <p className="text-lg py-2">1.  All Submissions will be subject to double blind review, authors should avoid providing any details in the article that might disclose their identity.<br/>
    </p> <p className="text-lg py-2">2.	Papers will be accepted for regular presentations at the conference. Every accepted paper MUST have at least one author registered to the conference by the time the camera-ready paper is submitted; at least one of the authors is also expected to attend the conference and present the paper.<br />
    </p>
  <br/>
  <br/>
  </div>
  </div>
    <div>
    </div>
    </>
  )
}

export default authorguide
