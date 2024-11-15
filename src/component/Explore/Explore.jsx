import React from 'react';
import { ArrowUpRight, DotIcon } from 'lucide-react';
import './Explore.css'


const EventCard = ({ event }) => (
  <div className="md:grid-cols-12 py-5 flex flex-row align-middle justify-center min-h-30 sm:flex-row gap-2 items-stretch space-y-0 sm:space-y-0 sm:space-x-0" style={{gap:'20px'}}>
    <div className=" pt-2 rounded-lg flex-shrink-0   md:cols-span-8">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuR0yQGpIwG_ZtdUeR-ajniNKxpFbK5lUyw&s" alt={`${event.title}-image`} className='event-image' />
    </div>
    <div className="flex flex-col justify-center sm:inline-flex pl-3 md:cols-span-3">
      <h3 className="text-white font-light sm:font-normal text-md  md:text-xl event-title-class">{event.title}</h3>
      <p className="text-gray-400 text-md md:text-md  hidden jb:block event-description" style={{wordBreak:"normal"}}>{event.description}</p>
      <div className="flex  flex-col-reverse  jb:hidden">

        {/* <span className="text-gray-400 inline-block mt-2 flex-row text-xs eventdate" style={{display:'list-item',marginLeft:'25px'}}>{event.date}</span> */}
        <span className=" inline-block mt-4 flex-row text-xs eventdate" style={{display:'list-item',marginLeft:'15px'}}>{event.date}</span>

        <div className='flex justify-start '>
          <a
            href=""
            className="register-btn py-0.5 px-3"
          >
            Register
            <ArrowUpRight className=''/>
          </a>
        </div>
      </div>
    </div>
    <div className="hidden sm:flex-col jb:block  register-container md:cols-span-2">
      <span className=" block  flex-row  eventdate-l">{event.date}</span>
      <a
        href=""
        className="register-btn">
        Register
        <ArrowUpRight className='h-4'/>
      </a>
    </div>
  </div>
 

);




export default function ExploreLatest() {
  const events = [
    {
      id: 1,
      title: 'Scaling Ethereum - Mastering Layer 2 Technologies',
      description: 'In this workshop, we will explore the challenges and solutions related to  scaling Ethereum, one of the most critical aspects of blockchain development today.',
      date: "OCT 17'th 2024",
      image: '',
      alt: 'the event image name',
    },
    {
      id: 2,
      title: 'Scaling Ethereum - Mastering Layer 2 Technologies',
      description: 'In this workshop, we will explore the challenges and solutions related to scaling Ethereum, one of the most critical aspects of blockchain development today.',
      date: "OCT 17'th 2024",
      image: '',
      alt: 'the event image name',
    },
  ];

  return (
    <div className="bg-black min-h-[70vh] h-70  rounded-lg  mt-20 sm:py-6 px-8 md:px-8 lg:px-24" id='event'>
      <div className="">
        <div className="flex flex-col md:flex-row sm:items-start mb-8 space-y-4 sm:space-y-0  md:gap-36">
          <h2 className=" text-xl sm:text-3xl font-bold mb-4  sm:w-1/3 text-largeHeader">
            EXPLORE THE <br className=''/> LATEST
          </h2>
          <p className="text-base sm:text-md md:text-xl  mt-4 sm:mt-0    text-sub-head-color custom-padding">
            MARMA FINTECH develops a dynamic workspace with events like workshops, team-building activities,
            and celebration gatherings that inspire collaboration, growth, and connection.
          </p>
        </div>


        <div className="space-y-6 main-wrapper-explore">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}



