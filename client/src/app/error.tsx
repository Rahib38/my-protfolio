"use client";
import Image from "next/image";
import Link from "next/link";

const error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
      {/* Animated 404 Illustration */}
      <Image 
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid" 
        alt="Error Illustration" 
        width={300} 
        height={300} 
        className="animate-bounce"
      />

      {/* Error Message */}
      <h1 className="text-6xl font-bold mt-6">Oops!</h1>
      <p className="text-lg mt-2 opacity-80">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Go Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-lg text-lg font-semibold">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default error;
