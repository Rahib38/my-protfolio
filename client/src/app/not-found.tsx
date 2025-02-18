"use client";
import Link from "next/link";
import Image from "next/image";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center px-4">
      {/* 404 Illustration */}
      <Image 
        src="https://img.freepik.com/free-vector/flat-404-error-template_23-2147749587.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid" 
        alt="Not Found" 
        width={350} 
        height={350} 
        className="mb-6"
      />

      {/* 404 Title */}
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-xl mt-2 opacity-70">
        Sorry, the page you are looking for was not found.
      </p>

      {/* Go Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg shadow-lg text-lg font-semibold text-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default notFound;
