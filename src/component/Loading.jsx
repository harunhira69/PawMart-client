import React from "react";

const Loading = ({ size = 16, message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {/* Spinner */}
      <div
        className={`relative w-${size} h-${size} animate-spin-slow`}
      >
        <div className="absolute border-4 border-t-indigo-500 border-b-indigo-500 border-l-gray-200 border-r-gray-200 rounded-full w-full h-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Message */}
      {message && (
        <p className="mt-4 text-gray-600 text-lg font-medium">{message}</p>
      )}
    </div>
  );
};

export default Loading;
