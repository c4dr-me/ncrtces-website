import React from 'react'

const Venue = () => {
  return (
    <section className="flex flex-col" id='venue'>
      <div className="google-map">
        <div className="pt-16">
            <h1 className="text-[#c00000] text-center text-3xl font-[600]">VENUE</h1>
            <div className="w-[100px] h-[2px] mx-auto mt-2 bg-[#365372] rounded-xl mb-8"></div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3026434125186!2d77.08987957495634!3d28.620690284619396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1719752315118!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, marginTop: 10 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Venue
