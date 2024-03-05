import PropTypes from "prop-types";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const date = new Date(publishedAt);
  const year = date.getFullYear(); // Get the year (e.g., 2024)
  const month = date.getMonth() + 1; // Get the month (January is 0, so we add 1) (e.g., 3 for March)
  const day = date.getDate(); // Get the day of the month (e.g., 3)
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-2xl"
      />
      <div className="py-2">
        <h3 className="font-bold">{title}</h3>
        <h3>{channelTitle}</h3>
      </div>
      <div className="flex">
        <h4>{statistics.viewCount} views</h4>
        <h3 className="ml-4">{day}/</h3>
        <h3>{month}/</h3>
        <h3>{year}</h3>
      </div>
    </div>
  );
};
VideoCard.propTypes = {
  info: PropTypes.shape({
    snippet: PropTypes.object.isRequired,
    statistics: PropTypes.object.isRequired,
  }).isRequired,
};
export default VideoCard;
