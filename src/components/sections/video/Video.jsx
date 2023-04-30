import React from "react";
import "./style.css";
function Video() {
  return (
    <video
      className="col-md-8 offset-md-2 col-sm-12 col-xs-12"
      id="video"
      controls
    >
      <source
        src="https://user-images.githubusercontent.com/365954/184354497-38412277-8cc6-4910-844d-8a9b2400da72.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
