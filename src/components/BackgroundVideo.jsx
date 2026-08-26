import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/VideoCars.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
};

export default BackgroundVideo;