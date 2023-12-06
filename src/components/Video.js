import React from "react";
import PromotionalVideo from "../static/video/DreamSonica_Promotional_Video.mp4";
import "./Video.css";

function Video() {
  const videoLink = PromotionalVideo;

  return (
    <div className="video-container">
      <video controls autoPlay muted>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
