import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderVideos = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        sendVideoSelect={props.sendVideoSelect}
        sendvideo={video}
      />
    );
  });

  return <div className="ui relaxed divide list">{renderVideos}</div>;
};
export default VideoList;
