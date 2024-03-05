import YoutubeLogo from "../assets/youtube-logo.jpg";
import MenuIcon from "../assets/hamburger-icon.jpg";
import UserIcon from "../assets/user-icon.jpg";
import SearchIcon from "../assets/search.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg items-center">
      <div className="flex gap-3 col-span-1">
        <img
          src={MenuIcon}
          alt="menu"
          className="h-12 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <img
          src={YoutubeLogo}
          alt="youtube-logo"
          className="h-12 cursor-pointer"
        />
      </div>
      <div className="col-span-10 px-10 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 px-3 p-1 border border-gray-400 rounded-l-full"
        />
        <button className="p-1 border border-gray-400 rounded-r-full px-2 bg-gray-100">
          <img
            src={SearchIcon}
            alt="search-icon"
            className="h-6 w-8 object-cover bg-transparent"
          />
        </button>
      </div>
      <div className="col-span-1">
        <img src={UserIcon} alt="userIcon" className="h-12" />
      </div>
    </div>
  );
};

export default Header;
