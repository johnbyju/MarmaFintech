import React, { useState } from 'react'

export default function JobApplicationForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.type === 'application/msword' || droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      if (droppedFile.size <= 10 * 1024 * 1024) { 
        setFile(droppedFile)
      } else {
        alert('File size should not exceed 10MB')
      }
    } else {
      alert('Please upload a PDF or Word document')
    }
  }

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile)
    } else {
      alert('File size should not exceed 10MB')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className="font-sans">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Apply Jobs
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
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
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileInput}
                />
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Upload Resume</div>
                  {file ? (
                    <div className="text-sm font-medium">{file.name}</div>
                  ) : (
                    <div className="text-xs text-gray-500">
                      Drag and drop or click to upload (PDF or Word, max 10MB)
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name*</label>
                  <input id="name" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Enter full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                  <input id="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Enter email" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role*</label>
                  <select id="role" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                    <option value="">Choose role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience*</label>
                  <select id="experience" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                    <option value="">Select Experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notice" className="block text-sm font-medium text-gray-700">Notice period*</label>
                <select id="notice" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option value="">How soon can you join?</option>
                  <option value="immediate">Immediate</option>
                  <option value="15days">15 days</option>
                  <option value="30days">30 days</option>
                  <option value="60days">60 days</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="current-salary" className="block text-sm font-medium text-gray-700">Current salary*</label>
                  <input id="current-salary" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="expected-salary" className="block text-sm font-medium text-gray-700">Expected salary*</label>
                  <input id="expected-salary" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">Portfolio or LinkedIn URL (Optional)</label>
                <input id="portfolio" type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="URL" />
              </div>

              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Apply
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}