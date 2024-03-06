import YoutubeLogo from "../assets/youtube-logo.jpg";
import MenuIcon from "../assets/hamburger-icon.jpg";
import UserIcon from "../assets/user-icon.jpg";
import SearchIcon from "../assets/search.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, API_KEY } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    //api call
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: searchQuery,
    });

    const url = `${YOUTUBE_SEARCH_API}?${params}`;

    const response = await fetch(url);
    const data = await response.json();

    // Process and use the data
    console.log(data.items);
    // You can access items like data.items, which contains search results
  };

  getSearchSuggestions("your search query");
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
