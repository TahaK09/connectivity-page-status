import React, { useState, useEffect } from "react";
import offlineImage from "./assets/offline.jpg";

function PageStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // If online, don’t show the offline page
  if (isOnline)
    return (
      <>
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white text-center">
          <h1>Hello, You’re Online!</h1>
        </div>
      </>
    );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white text-center">
      <div className="mb-10 w-xl h-auto">
        <img src={offlineImage} className="w-full h-full" alt="Offline" />
      </div>
      <div className="text-4xl font-semibold mb-4">Can’t connect</div>
      <p className="text-gray-600 mb-10 max-w-2xl">
        It seems you’re having trouble connecting to the wxyz.com. You may be
        offline, or there might be a temporary issue on our side. Please check
        your internet connection and Try refreshing the page in a moment.
      </p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          onClick={() => (window.location.href = "/")}
        >
          Return Home
        </button>
        <button
          className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default PageStatus;
