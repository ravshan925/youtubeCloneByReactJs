import React from "react";
import SideVideos from "./SideVideos";

const ListVideos = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((video) => (
    <SideVideos
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return <div>{videoList}</div>;
};

export default ListVideos;
