import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SidebarButton = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  //Early Return
  if (!isOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Trending</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-4">Watch Later</h1>
      <ul>
        <li>Learning</li>
        <li>Podcast</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default SidebarButton;
