import React from "react";
import { useNavigate } from "react-router";
import { AlertTriangle } from "lucide-react";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F1F5E8] text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-6xl font-bold text-[#2E3A59] mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-success px-8 py-3 rounded-xl text-white text-lg hover:scale-105 transition-all duration-200"
        >
          Go Back Home
        </button>
      </div>
      <p className="mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AppMarket. All rights reserved.
      </p>
    </div>
  );
};

export default Error;
