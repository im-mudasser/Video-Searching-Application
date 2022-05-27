import React from "react";
import "./style.css";
const VideoItem = (props) => {
  return (
    <div
      onClick={() => props.sendVideoSelect(props.sendvideo)}
      className="video-item item"
    >
      <img
        className="ui image"
        src={props.sendvideo.snippet.thumbnails.medium.url}
        alt={props.sendvideo.snippet.title}
      />
      <div className="content">
        <div className="header">{props.sendvideo.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
