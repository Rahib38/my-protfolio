"use client";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex flex-col items-center">
        {/* Custom Spinner */}
        <div className="relative w-16 h-16">
          <div className="w-full h-full border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-l-blue-500 border-r-blue-500 rounded-full animate-spin-reverse"></div>
        </div>
        <h2 className="text-white text-lg mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default loading;
