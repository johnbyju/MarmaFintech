import React, { useState } from "react";
import "./Contact.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, Phone } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Real-time validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.",
      }));
    } else if (name === "name") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: value.trim() ? "" : "Name is required.",
      }));
    } else if (name === "message") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: value.trim() ? "" : "Message is required.",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    const validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        validationErrors.email = "Please enter a valid email address.";
      }
    }
    if (!formData.message.trim())
      validationErrors.message = "Message is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors in the form before submitting.",
        background: "#000",
        color: "#fff",
      });
      return;
    }

    const url = "http://ec2-18-214-60-96.compute-1.amazonaws.com:7001/feedback";

    try {
      Swal.fire({
        title: "Submitting...",
        text: "Please wait while we submit your feedback.",
        allowOutsideClick: false,
        showConfirmButton: false,
        background: "#000",
        color: "#fff",
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Feedback submitted successfully!",
          background: "#000",
          color: "#fff",
          timer: 3000,
          timerProgressBar: true,
        });

        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Failed to submit feedback. Please try again.",
          background: "#000",
          color: "#fff",
        });
      }
    } catch (error) {
      console.error(
        "Error submitting feedback:",
        error.response?.data || error
      );
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.response?.data?.message || "An unexpected error occurred.",
        background: "#000",
        color: "#fff",
      });
    }
  };

  return (
    <div
      className="bg-black text-white p-4 md:px-10 lg:px-24 mr-0 sm:mr-5 rounded-lg"
      id="contact"
    >
      <div className="pb-3">
        <div className="grid grid-cols-1 md:grid-cols-[60%,40%] md:gap-4">
          <div className="space-y-8 p-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4">
              {[
                { icon: FaLinkedinIn, name: "LinkedIn", handle: "@Marma" },
                { icon: FaInstagram, name: "Instagram", handle: "@Marma" },
                { icon: FaXTwitter, name: "Twitter", handle: "@Marma" },
                { icon: FaDiscord, name: "Discord", handle: "@Marma" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="py-3 px-3 lg:py-4 lg:px-3 rounded-lg flex flex-col items-start relative contact-social cursor-pointer"
                >
                  <span
                    style={{ position: "absolute", top: "15px", right: "30px" }}
                  >
                    <ArrowUpRight className="text-sm absolute" />
                  </span>
                  <div className="flex gap-20 md:gap-4 lg:gap-12 relative social-handle px-2 pt-2 justify-center align-middle rounded-md">
                    <social.icon className="text-xl mb-2 lg:text-2xl" />
                  </div>
                  <div className="text-base md:text-md lg:text-lg pt-2">
                    {social.name}
                  </div>
                  <div className="text-xs md:text-sm lg:text-md text-gray-400">
                    {social.handle}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 sm:grid-cols-2">
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-row items-center gap-6">
                  <div className="contact-icons px-2 py-2 rounded-md">
                    <FaEnvelope className="text-xl contact-details-icon" />
                  </div>
                  <span className="font-semibold text-white text-sm md:text-lg">
                    Email
                  </span>
                </div>
                <div className="text-gray-400 text-base">marma@gmail.com</div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-row items-center gap-6">
                  <div className="contact-icons px-1.5 py-1.5 rounded-md">
                    <Phone className="text-xl contact-details-icon text-white" />
                  </div>
                  <span className="font-semibold text-white text-sm md:text-lg">
                    Phone
                  </span>
                </div>
                <div className="text-gray-400 text-base">+91 9092929232</div>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer">
                <div className="flex flex-row items-center mt-3 sm:mt-0 gap-6">
                  <div className="contact-icons px-2 py-2 rounded-md">
                    <FaMapMarkerAlt className="text-xl contact-details-icon text-white" />
                  </div>
                  <span className="font-semibold text-white text-base md:text-lg">
                    Location
                  </span>
                </div>
                <div className="text-gray-400 text-base">
                  Shri Parvathy Tech Park, R.S. Puram, Coimbatore - 641001
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 mt-4 md:mt-0 max-w-md mx-auto bg-[#010101] form-border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Share your feedback
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4 pb-0.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  className={`w-full p-3 sm:w-full bg-[#010101] text-white border ${
                    errors.name ? "border-red-500" : "border-customBorder"
                  } rounded focus:outline-none`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 w-full block bg-[#010101] text-white border ${
                    errors.email ? "border-red-500" : "border-customBorder"
                  } rounded focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 bg-[#010101] text-white border ${
                  errors.message ? "border-red-500" : "border-customBorder"
                } rounded focus:outline-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#131212] rounded-lg text-white font-semibold py-3 form-border form-submit-btn transition duration-300"
              >
                Send your Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="mt-8 md:mt-14 border border-t-0 opacity-50 border-gray-400" />
      <p className="text-center mt-4 text-headerWhite">
        © 2024 Marma Fintech. All rights reserved.
      </p>
    </div>
  );
}
