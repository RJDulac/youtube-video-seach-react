import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const rendredList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{rendredList}</div>;
};

export default VideoList;
