'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      <div
        id="mySidenav"
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white overflow-x-hidden transition-width duration-500 ${isSidebarOpen ? 'w-64' : 'w-0'}`}
        style={{ zIndex: 1 }}
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
          onClick={closeNav}
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-6 pt-10 pl-10">Documentation</h1>
        <nav>
          <ul>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#project-overview" className="hover:underline">Project Overview
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#features" className="hover:underline">Features
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#technologies-used" className="hover:underline">Technologies Used
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#setup-instructions"className="hover:underline">Setup Instructions
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#usage-instructions"
                 className="hover:underline">Usage Instructions
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#code-structure"
                 className="hover:underline">Code Structure
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#api-integration"
               className="hover:underline">API Integration
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#predefined-responses"
                className="hover:underline">Predefined Responses
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#customization"
                 className="hover:underline">Customization
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#deployment-instructions"
                className="hover:underline">Deployment Instructions
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#troubleshooting"
                 className="hover:underline">Troubleshooting
              </Link>
            </li>
            <li className="mb-2 pt-10 pl-10">
              <Link href="#contact-information"
                 className="hover:underline">Contact Information
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        id="main"
        className={`transition-all duration-500  ${isSidebarOpen ? 'ml-64' : 'ml-0'} flex-1 bg-gray-100`} style={{paddingLeft:`10px`}}
      >
        <div>
        <button
          className="text-3xl cursor-pointer mt-5 mb-5"
          onClick={openNav}
        >
          &#9776; open side for more content
        </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;


