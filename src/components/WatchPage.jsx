import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [useParams] = useSearchParams();
  const videoId = useParams.get("v");
  console.log(useParams);
  return (
    <div className="p-5 m5 ml-16 mt-3 rounded-md">
      <iframe
        width="1000"
        height="615"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default WatchPage;
