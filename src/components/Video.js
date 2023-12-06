import React from "react";
import PromotionalVideo from "../static/video/DreamSonica_Promotional_Video.mp4";
import "./Video.css";

function Video() {
  const videoLink = PromotionalVideo;

  return (

      <video className="promotion" controls autoPlay muted>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}

export default Video;
