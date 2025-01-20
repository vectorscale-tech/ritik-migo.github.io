import React from 'react';
import { Link } from 'react-router-dom';

const MigoLandingPage = () => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center relative overflow-hidden font-georgia">
      <div className="w-[98%] h-[95%] bg-gradient-to-br from-[#ebf4f5] to-[#b5c6e0] rounded-[30px] shadow-xl flex flex-col items-center justify-center relative">
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <a
            href="https://discord.gg/Fq5BzjCh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={require('./assets/discord.svg')} alt="Discord" className="w-8 h-8" />
          </a>
          <a
            href="mailto:ritik@heymigo.ai"
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-6xl font-bold mb-4">Migo</h1>
          <h2 className="text-2xl mb-8">find your people</h2>
          <a
            href="https://apps.apple.com/us/app/migo-smart-social-discovery/id6739284039"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
        </div>
        
        <div className="absolute bottom-4 right-4 flex items-center gap-4">
          <Link to="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="text-sm hover:underline">
            Terms of Use
          </Link>
          <p className="text-sm">&copy; Migo 2024</p>
        </div>
      </div>
    </div>
  );
};

export default MigoLandingPage;