import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center">
        <img
          src="https://i.ibb.co.com/LDGQKkxL/Pix-Verse-Image-Effect-prompt-A-portrait-of-a-r.jpg" 
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
         John Doe
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Full Stack Developer & Pet Lover
        </p>

        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="text-gray-700 dark:text-gray-300 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <FaPhone /> +880 1234 567 890
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> harunhira@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
