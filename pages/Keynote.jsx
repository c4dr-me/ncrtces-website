
import img1 from '../public/img1.png'
// import img2 from '../public/img2.png'
// import img3 from '../public/img3.jpg'
// import img4 from '../public/img4.png'
// import img5 from '../public/img5.jpg'
import img6 from '../public/img6.png'
import img7 from '../public/img7.jpg'
// import img8 from '../public/img8.jpg'
import img9 from '../public/img9.jpg'
import img10 from '../public/img10.png'
import img11 from '../public/img11.png'
import img12 from '../public/img12.png'
const Keynote = () => {
  const speakers = [
    //   {
    //     img: img3,
    //     name: 'Dr Amit Kumar Tripathi',
    //     title: 'Former DG National Institute Solar',
    //     subtitle: 'Energy, Ministry of New and Renewable Energy',
    //   },
    //   {
    //     img: img8,
    //     name: 'Dr. Sanjay Yadav',
    //     title: 'Chief Scientist (Former) at',
    //     subtitle: 'National Physical Laboratory',
    // },
    // {
    //   img: img4,
    //   name: 'Dr V.S. Prasad',
    //   title: 'Director, NCMRWF, Noida',
    //   subtitle: '',
    // },
    // {
    //   img: img5,
    //   name: 'Dr Uday',
    //   title: 'Scientist G, INCOIS, Hyderabad',
    //   subtitle: '',
    // },
    // {
    //   img: img2,
    //   name: 'Dr Purnima Jalihal',
    //   title: 'Scientist G, NIOT Chennai',
    //   subtitle: '',
    // },
    {
        img: img1,
        name: 'Dr. Jagvir Singh',
        title: 'Scientist G, Ministry of Earth',
        subtitle: 'Sciences, New Delhi',
    },

    {
        img: img7,
        name: 'Dr.Sachi Nandan Mohanty',
        title: 'Professor, School of Computer Science and Engineering',
        subtitle: 'VIT-AP University, Amaravati, AP, India',
    },
    
    {
      img: img11,
      name: 'Dr. O.P.Mishra',
      title: 'Director, National Centre for Seismology (NCS) and Advisor/Head of Seismology and Geosciences (SAGE), Ministry of Earth Sciences, Government of India.',
      subtitle: '',
    },
    {
      img: img9,
      name: 'Col. B Venkat',
      title: 'Registrar TERI SAS',
      subtitle: '',
  },
  {
    img: img10,
    name: 'Prof Man Singh',
    title: 'Professor and Dean, Central University of Gujrat',
    subtitle: '',
  },
  {
    img: img6,
    name: 'Dr Parul Singh',
    title: 'Assistant Professor, University of Delhi',
    subtitle: '',
  },
  {
    img: img12,
    name: 'Dr. Palak Balyan',
    title: 'Research lead, Climate trends',
    subtitle: '',
  },
  ];

  return (
    <div className='w-full'>
      <div className='bg-[#e9e9e9] px-[18%]'>
        <div>
          <h1 className='text-[#c00000] pt-16 text-center text-3xl font-[600]'>KEYNOTE SPEAKERS</h1>
          <div className='w-48 h-[3px] mx-auto mt-2 bg-[#365372] rounded-xl'></div>
        </div>
        <div className="mt-20 pb-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center font-[700]">
                <div className="w-[220px] h-[220px] mx-auto">
                  <img className="w-full h-full rounded-full object-stretch border-[4px] border-gray-500" src={speaker.img} alt={speaker.name} />
                </div>
                <p className="bg-[#c00000] z-[100] rounded-lg py-2 text-white px-3 my-2">{speaker.name}</p>
                <p>{speaker.title}</p>
                {speaker.subtitle && <p>{speaker.subtitle}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keynote