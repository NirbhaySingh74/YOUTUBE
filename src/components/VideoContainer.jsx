import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const dispatch = useDispatch();
  const handleButton = () => {
    dispatch(closeMenu());
  };
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();
    setVideos(json.items);
  };
  console.log(videos);
  if (videos === null) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-wrap p-3 cursor-pointer">
      {videos.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          onClick={() => handleButton()}
          key={video.id}
        >
          {" "}
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
