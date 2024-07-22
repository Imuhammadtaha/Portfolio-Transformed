import React, { useState } from "react";
import axios from "axios";
import { FaLinkedinIn } from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { LuGithub } from "react-icons/lu";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const res = await axios.post(
        `http://localhost:8080/api/v1/portfolio-f/sendEmail`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (res) {
        toast.success("Response Sent Sucessfully");
      }
    } catch (error) {
      toast.error("Something Wrong in Sending Response");
    } finally {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <section className="bg-black">
        <div className="container mx-auto p-6   rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form Section */}
            <div>
              <form>
                <div className="mb-4">
                  <label
                    className="pop text-white text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="pop shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="pop text-white text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="pop shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="pop text-white text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="pop shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    type="text"
                    placeholder="Your Message"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="mont d-flex rounded-md bg-white  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full  py-10 text-white">
              <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold pop mb-4">Get in touch</h2>
                <p className="mont mb-2">Lahore, Punjab - Pakistan</p>
                <p className="mont mb-8">mmuhammadtaha786@gmail.com</p>

                <h3 className="text-xl font-bold pop mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/Imuhammadtaha"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                  >
                    <FaLinkedinIn size={24} color="black" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=923238605613"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                  >
                    <IoLogoWhatsapp size={24} color="black" />
                  </a>
                  <a
                    href="mailto:mmuhammadtaha786@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                  >
                    <CgMail size={24} color="black" />
                  </a>
                  <a
                    href="https://github.com/Imuhammadtaha"
                    rel="noreferrer"
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                  >
                    <LuGithub size={24} color="black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
