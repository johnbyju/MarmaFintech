import React from 'react';
import './Contact.css'
import { FaLinkedinIn, FaInstagram, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from 'lucide-react';
export default function ContactSection() {
  return (

    <div className="bg-black text-white p-4 md:p-8 lg:p-12 ">
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
                <div key={index} className="bg-gray-900 py-3 px-2 rounded-lg flex flex-col items-start relative contact-social">
                   <span style={{position:'absolute',top:'0',right:'26px'}}><ArrowUpRight className='text-sm absolute arrow icon'/></span>
                  <div className='flex gap-20 md:gap-4 lg:gap-12 relative'>
                    <social.icon className="text-2xl mb-2" />
                   
                  </div>
                  <div className="text-sm pt-2">{social.name}</div>
                  <div className="text-xs text-gray-400">{social.handle}</div>
                </div>
              ))}
            </div>

            <div className="  grid grid-cols-2 gap-4  lg:grid-cols-3 sm:grid-cols-2 ">
              {/* Email Section */}
              <div className='flex flex-col '>
                <div className='flex flex-row items-center gap-6'>
                  <div>
                    <FaEnvelope className="text-xl contact-details-icon text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-white text-sm md:text-lg">Email</span>
                  </div>
                </div>
                <div>
                <div className="text-gray-400 text-sm md:text-md">marma@gmail.com</div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center gap-6'>
                  <div>
                  <FaPhone className="text-xl contact-details-icon text-white" />
                  </div>
                  <div className=''>
                  <span className="font-semibold text-white text-sm md:text-lg">Phone</span>
                  </div>
                </div>
                <div className=''>
                <div className="text-gray-400 text-sm md:text-md">marma@gmail.com</div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center mt-3 sm:mt-0 gap-6'>
                  <div>
                  <FaMapMarkerAlt className="text-xl contact-details-icon text-white"/>
                  </div>
                  <div>
                  <span className="font-semibold text-white text-base md:text-lg">Loction</span>
                  </div>
                </div>
                <div className='text-start mt-2'>
                <div className="text-gray-400 text-sm md:text-md">Shri Parvathy Tech Park,R.S. Puram, Coimbatore - 641001</div>
                </div>
              </div>             
            </div>
          </div>
          <div className="p-8 mt-4 md:mt-0 max-w-md mx-auto bg-black border  rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">Share your feedback</h2>
            <form className="space-y-4">
              <div className="flex space-x-4 pb-0.5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/2 p-3 sm:w-full bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 p-3 text-md  block sm:hidden bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className=" p-3 w-full hidden sm:block bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-700 text-white font-semibold py-3 rounded hover:bg-gray-600 transition duration-300"
              >
                Send your Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <p className='text-center pt-4'> Marma Fintech C 2024</p>
    </div>
  );
}