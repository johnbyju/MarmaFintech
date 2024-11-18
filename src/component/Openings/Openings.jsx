import React, { useEffect, useState } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import './Openings.css';
import JobApplicationForm from './JobApplicationForm';
import Modal from './Modal';
import { log } from 'three/webgpu';

const jobListings = [
  { id: 1, title: 'Creative Front-end Developer', location: 'Harrogate (Flexible) / Full Time', category: 'Development', description: 'We are seeking a talented Front-end Developer to join our creative team. The ideal candidate will have a strong understanding of modern web technologies and a passion for creating engaging user experiences.' },
  { id: 2, title: 'UX/UI Designer', location: 'Remote / Full Time', category: 'Design', description: 'We\'re looking for a skilled UX/UI Designer to help shape the future of our digital products. The successful candidate will have a keen eye for design and a user-centered approach to problem-solving.' },
  { id: 3, title: 'Digital Marketing Specialist', location: 'London / Full Time', category: 'Marketing', description: 'We are hiring a Digital Marketing Specialist to drive our online presence and lead generation efforts. The ideal candidate will have experience in SEO, social media marketing, and content creation.' },
];

export default function JobListings() {
  const [openRoles, setOpenRoles] = useState(true);
  const [expandedRole, setExpandedRole] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleRoles = () => setOpenRoles(!openRoles);
  const toggleRole = (id) => setExpandedRole(expandedRole === id ? null : id);

  const filteredJobs = activeFilter === 'All'
    ? jobListings
    : jobListings.filter(job => job.category === activeFilter);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    }
    else {
      document.body.classList.remove('no-scroll')
    }

    return () => document.body.classList.remove('no-scroll')
  }, [isModalOpen])

  return (
    <div className="job-listings bg-black text-white mt-20 sm:py-6 px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 lg:space-y-14 font-sans">
      <div className=' flex flex-col sm:flex jb:flex-row jb:gap-40 min-w-screen'>
        <div className='flex felx-row justify-between gap-15 job-opening-top pt-3'>
          {/* <h1 className="text-xl sm:text-3xl font-bold mb-4 text-largeHeader">JOIN&nbsp;OUR<br />TEAM</h1> */}
          <h1 className="openings-header font-bold text-largeHeader">JOIN&nbsp;OUR<br />TEAM</h1>
          <div className='inline-block jb:hidden'>
            <div className="flex items-center rounded-md border text-sm border-white py-1 px-2 mr-2 mb-2" >
              OPEN ROLES
              <ChevronDown className='w-4 h-4 ml-2' />
            </div>
          </div>
        </div>
        <div className=''>
          <p className="text-base sm:text-md md:text-xl pb-10 pt-6 md:pt-2   sm:cols-4 opening-description text-sub-head-color custom-padding">
            Begin your career journey with us, where we challenge boundaries and redefine technology. Together, we will develop innovative solutions and create a meaningful impact in the digital landscape. Your future starts here!
          </p>
        </div>
      </div>
      {openRoles && (
        <div className='rounded-3xl'>
          <div className="flex justify-center px-4  md:hidden gap-2 sm:gap-6 mb-4 filter-btn">
            {['All', 'Design', 'Development', 'Marketing'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                id='job-opening-btn'
                className="rounded-lg text-sm sm:text-md  py-1.5 px-2  sm:py-2 sm:px-4  cursor-pointer bg-jobFilter"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className='border rounded-3xl bg-openingsBg' style={{ borderColor: ' #444444' }}>
            <div className="px-8 pt-8  justify-start gap-0 sm:gap-2 mb-4 filter-btn hidden md:flex">
              {['All', 'Design', 'Development', 'Marketing'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  id='job-opening-btn'
                  className={` rounded-2xl   lg:px-12 lg:py-6 text-sm sm:text-md   py-2 px-2  md:py-3 md:px-4  cursor-pointer ${activeFilter === filter ? 'bg-white text-black' : 'bg-jobFilter text-white'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className='p-2'>
              {filteredJobs.map((job, index) => (
                <div key={job.id} className="border-gray-600 apply-container  rounded-3xl lg:px-0  sm:px-0 sm:py-0 px-3 p-3">
                  <div
                    className="flex flex-row sm:flex-row justify-between  py-1 px-2 sm:p-4 lg:px-8 lg:py-10 cursor-pointer"
                    onClick={() => toggleRole(job.id)}
                  >
                    <div className='flex flex-col sm:hidden'>
                      <h3 className="font-semibold text-sm sm:text-md md:text-lg text-largeHeader">{job.title}</h3>
                      <p className="text-xs sm:text-base md:text-md text-sub-head-color">{job.location}</p>
                    </div>

                    <div className='sm:flex-1 hidden sm:block'>
                      <h3 className="font-semibold text-md sm:text-md md:text-lg text-largeHeader">{job.title}</h3>
                    </div>
                    <div className='sm:flex-1 hidden sm:block'>
                      <p className=" text-xs sm:text-base md:text-md text-sub-head-color">{job.location}</p>
                    </div>

                    <div>
                      {expandedRole === job.id ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  {expandedRole === job.id && (
                    <div className="p-2 sm:p-4  rounded-md" style={{ backgroundColor: '161616E3' }}>
                      <p className="text-sm sm:text-md leading-relaxed">{job.description}</p>
                      <button className="bg-black text-white rounded-lg border border-gray-400 py-1 px-2 mt-2 sm:py-2 sm:px-4" onClick={openModal}>Apply Now</button>
                      <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <JobApplicationForm Job={job.title} onClose={closeModal} />
                      </Modal>
                    </div>
                  )}
                  {/* {index < filteredJobs.length - 1 && (
                  <hr className="mx-2" style={{ borderColor: '#363535' }} />
                )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
