import React from 'react';
import './Contact.css'
import { FaLinkedinIn, FaInstagram, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, Phone } from 'lucide-react';
export default function ContactSection() {
  return (

    <div className="bg-black text-white p-4 md:px-10 lg:px-20  mr-5 rounded-lg" id='contact'>
      <div className="pb-3">
        <div className="grid grid-cols-1 md:grid-cols-[60%,40%] md:gap-4">
          <div className="space-y-8 p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4">
              {[
                { icon: FaLinkedinIn, name: 'LinkedIn', handle: '@Marma' },
                { icon: FaInstagram, name: 'Instagram', handle: '@Marma' },
                { icon: FaXTwitter, name: 'Twitter', handle: '@Marma' },
                { icon: FaDiscord, name: 'Discord', handle: '@Marma' },
              ].map((social, index) => (
                <div key={index} className=" py-3 px-3 lg:py-4 lg:px-3 rounded-lg flex flex-col items-start relative contact-social">
                   <span style={{position:'absolute',top:'0',right:'26px'}}><ArrowUpRight className='text-sm absolute'/></span>
                  <div className='flex gap-20 md:gap-4 lg:gap-12 relative social-handle px-2  pt-2 justify-center align-middle rounded-md'>
                    <social.icon className="text-2xl mb-2 lg:text-3xl" />
                   
                  </div>
                  <div className="text-base md:text-md lg:text-lg pt-2">{social.name}</div>
                  <div className="text-xs md:text-sm lg:text-md text-gray-400">{social.handle}</div>
                </div>
              ))}
            </div>

            <div className="  grid grid-cols-2 gap-4  lg:grid-cols-3 sm:grid-cols-2 ">
              {/* Email Section */}
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-6'>
                  <div className='contact-icons px-2 py-2 rounded-md'>
                    <FaEnvelope className="text-xl contact-details-icon" />
                  </div>
                  <div>
                    <span className="font-semibold text-white text-sm md:text-lg">Email</span>
                  </div>
                </div>
                <div>
                <div className="text-gray-400 text-base md:text-md">marma@gmail.com</div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-6 '>
                  <div className='contact-icons px-1.5 py-1.5 rounded-md'>
                  <Phone className="text-xl contact-details-icon text-white"/>
                  </div>
                  <div className=''>
                  <span className="font-semibold text-white text-sm md:text-lg">Phone</span>
                  </div>
                </div>
                <div className=''>
                <div className="text-gray-400 text-base md:text-lg">marma@gmail.com</div>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex flex-row items-center mt-3 sm:mt-0 gap-6'>
                  <div className='contact-icons px-2 py-2 rounded-md'>
                  <FaMapMarkerAlt className="text-xl contact-details-icon text-white"/>
                  </div>
                  <div>
                  <span className="font-semibold text-white text-base md:text-lg">Loction</span>
                  </div>
                </div>
                <div className='text-start mt-2'>
                <div className="text-gray-400 text-base md:text-lg">Shri Parvathy Tech Park,R.S. Puram, Coimbatore - 641001</div>
                </div>
              </div>             
            </div>
          </div>
          <div className="p-8 mt-4   md:mt-0 max-w-md mx-auto bg-black  form-border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">Share your feedback</h2>
            <form className="space-y-4">
              <div className="flex space-x-4 pb-0.5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 sm:w-full bg-black text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                {/* <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 p-3 text-md  block sm:hidden bg-black border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                /> */}
              </div>
              <input
                type="email"
                placeholder="Email"
                className=" p-3 w-full block bg-black text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-black text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded border-gray-400 form-submit-btn  transition duration-300"
              >
                Send your Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="mt-8 md:mt-14 border-0 border-t-2 border-gray-400" />

      <p className='text-center mt-4 text-headerWhite'>© Marma Fintech 2024</p>
    </div>
  );
}