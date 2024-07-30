import React from "react";
import "./VideoCard.css";

const VideoCard = ({ title, image, description }) => {
  return (
    <div className="video-card">
      <img src={image} alt={title} />
      <div className="video-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
