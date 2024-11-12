import React, { useState } from 'react';

export default function JobApplicationForm(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.type === 'application/msword' || droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      if (droppedFile.size <= 10 * 1024 * 1024) {
        setFile(droppedFile);
      } else {
        alert('File size should not exceed 10MB');
      }
    } else {
      alert('Please upload a PDF or Word document');
    }
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert('File size should not exceed 10MB');
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    applyingDesignation: props?.Job,
    email: '',
    experience: '',
    noticeperiod: '',
    currentsalary: '',
    expectedsalary: '',
    Portfoliolink: '',
    resume: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; if (selectedFile) {
      setFile(selectedFile);
      setFormData({
        ...formData, resume: selectedFile
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('applyingDesignation', formData.applyingDesignation);
    data.append('email', formData.email);
    data.append('experience', formData.experience);
    data.append('noticeperiod', formData.noticeperiod);
    data.append('currentsalary', formData.currentsalary);
    data.append('expectedsalary', formData.expectedsalary);
    data.append('Portfoliolink', formData.Portfoliolink);
    data.append('resume', formData.resume);

    try {
      const response = await fetch('http://ec2-18-214-60-96.compute-1.amazonaws.com:7001/apply', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const result = await response.json();
      console.log('Response from server:', result);
      alert('Application submitted successfully!');
      setFormData({
        name: '',
        applyingDesignation: props?.Job,
        email: '',
        experience: '',
        noticeperiod: '',
        currentsalary: '',
        expectedsalary: '',
        Portfoliolink: '',
        resume: '',
      })
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again later.');
    }
  };

  return (
    <div className="">
     


      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-gray-500 text-white rounded-lg p-6 w-full max-w-md relative ">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          <h2 className="text-2xl font-bold mb-4">Apply Jobs</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div
              className={`relative border-2 border-dashed rounded-lg p-6 transition-colors
                  ${dragActive ? 'border-blue-500' : 'border-gray-300'}
                  hover:border-blue-500`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="resume"
                className="absolute bg-black inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <div className="text-center">
                <div className="text-sm md:text-lg text-gray-600 mb-1">Upload Resume</div>
                {file ? (
                  <div className="text-sm font-medium">{file.name}</div>
                ) : (
                  <div className="text-xs md:text-md text-gray-50">
                    Drag and drop or click to upload (PDF or Word, max 10MB)
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name*</label>
                <input
                  value={formData.name}
                  name="name"
                  id="name"
                  type="text"
                  required
                  className="mt-1 block w-full pl-3 rounded-md border border-gray-300 bg-black"
                  placeholder="Enter full name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email*</label>
                <input
                  value={formData.email}
                  name="email"
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-black shadow-sm text-white"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="experience" className="block text-sm md:text-lg">Experience*</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 bg-black text-md text-white shadow-sm"
                  onChange={handleChange}
                >
                  <option value="">Select Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-white">Notice Period*</label>
                <input
                  value={formData.noticeperiod}
                  name="noticeperiod"
                  id="noticeperiod"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 bg-black"
                  placeholder="Enter Notice Period"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="current-salary" className="block text-sm font-medium text-white">Current salary*</label>
                <input
                  value={formData.currentsalary}
                  name="currentsalary"
                  type="text"
                  required
                  placeholder='In LPA'
                  className="mt-1 block w-full rounded-md border-gray-300 bg-black text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50  "
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="expected-salary" className="block text-sm font-medium text-white">Expected salary*</label>
                <input
                  value={formData.expectedsalary}
                  name="expectedsalary"
                  type="text"
                  required
                  placeholder='In LPA'
                  className="mt-1 block w-full rounded-md bg-black"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-white">Portfolio or LinkedIn URL (Optional)</label>
              <input
                value={formData.Portfoliolink}
                name="Portfoliolink"
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-black  "
                placeholder="Enter URL"
                onChange={handleChange}
              />
            </div>
                  <div className='flex align-middle justify-center'>
                  <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                  </div>
            
          </form>
        </div>
      </div>

    </div>
  );
}