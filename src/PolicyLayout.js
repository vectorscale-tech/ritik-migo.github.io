import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const PolicyLayout = ({ markdownContent }) => {
  return (
    <div className="min-h-screen w-screen bg-white flex items-center justify-center p-4">
      <div className="w-[100%] h-[95%] bg-gradient-to-br from-[#ebf4f5] to-[#b5c6e0] rounded-[30px] shadow-xl flex flex-col relative">
        {/* Header with back button - fixed at top */}
        
        {/* Scrollable content container */}
        <div className="flex-1 overflow-y-auto px-8 pt-20 pb-8">
          <div className="max-w-2xl mx-auto"> {/* This div constrains just the content width */}
            <article className="prose prose-slate prose-headings:text-black prose-p:text-gray-700">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;