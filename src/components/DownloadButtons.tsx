import React from "react";
import Link from "next/link";

const DownloadButtons: React.FC = () => {
  return (
    <div
      id="download"
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      {/* App Store Button */}
      <Link
        href="https://apps.apple.com/app/starry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-[#1a1950] hover:bg-[#201f5e] border border-purple-900/30 rounded-xl px-6 py-3 flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="text-3xl">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs text-white/80 font-light">
              Download on the
            </div>
            <div className="text-base font-semibold">App Store</div>
          </div>
        </div>
      </Link>

      {/* Google Play Button */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.starry.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-[#1a1950] hover:bg-[#201f5e] border border-purple-900/30 rounded-xl px-6 py-3 flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="text-3xl">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs text-white/80 font-light">GET IT ON</div>
            <div className="text-base font-semibold">Google Play</div>
          </div>
        </div>
      </Link>

      {/* Telegram Bot Button */}
      <Link
        href="https://t.me/StarryAstrologyBot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="bg-[#1a1950] hover:bg-[#201f5e] border border-purple-900/30 rounded-xl px-6 py-3 flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl">
          <div className="text-3xl">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              />
            </svg>
          </div>
          <div>
            <div className="text-xs text-white/80 font-light">CHAT WITH</div>
            <div className="text-base font-semibold">Telegram Bot</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DownloadButtons;
