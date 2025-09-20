import React from 'react';

const Herosection = () => {
  return (
    <div className=" flex items-center justify-center p-4 border mt-5">
      
      <div className=" z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Simplify Complex <span className="text-blue-600">Legal Documents</span> with AI
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Transform complicated legal jargon into clear, understandable language. Extract key clauses, classify documents, and understand your contracts in seconds.
        </p>

        

        
        <div className="border border-dashed border-gray-300 p-8 rounded-xl bg-white shadow-lg flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Drag & Drop Your Legal Document
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Support for PDF, DOC, and DOCX files up to 10MB
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            Upload & Analyze
          </button>
        </div>
      </div>

     

   
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Herosection;