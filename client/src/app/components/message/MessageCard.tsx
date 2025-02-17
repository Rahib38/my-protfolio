/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

const MessageCard = ({ message}:any) => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6 w-96 h-96 gap-10 text-center items-center">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {message?.fullName}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{message?.email}</p>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-200">{message?.message}</p>
      </div>
    </div>
  );
};

export default MessageCard;
