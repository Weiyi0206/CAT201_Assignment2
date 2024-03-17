import React from "react";
import "./Video.css";
import VideoDisplay from "../../assets/VideoDisplay.mp4";

const Video = () => {
  return (
    <section className="Video-wrapper">
      <div className="Video-container">
        <div className="overlay"></div>
        <video src={VideoDisplay} autoPlay loop muted />
        <div className="content">SPOT LIGHT</div>
      </div>
    </section>
  );
};

export default Video;
