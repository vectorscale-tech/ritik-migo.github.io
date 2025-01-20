import React from 'react';
import { Link } from 'react-router-dom';

const MigoLandingPage = () => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center relative overflow-hidden font-georgia">
      <div className="w-[98%] h-[95%] bg-gradient-to-br from-[#ebf4f5] to-[#b5c6e0] rounded-[30px] shadow-xl flex flex-col items-center justify-center relative">
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <a
            href="https://discord.gg/vBvJ5BetxS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src={require('./assets/discord.svg').default} alt="Discord" className="w-8 h-8" />
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
          <h2 className="text-2xl mb-8">Find your people.</h2>
          <a
            href="https://apps.apple.com/us/app/migo-smart-social-discovery/id6739284039"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src={require('./assets/apple_app_store.svg').default}
              alt="Download on the App Store"
              className="h-12 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-4">
          <Link to="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="text-sm hover:underline">
            Terms of Use
          </Link>
          <p className="text-sm">&copy; Migo 2025</p>
        </div>
      </div>
    </div>
  );
};

export default MigoLandingPage;