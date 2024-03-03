import YoutubeLogo from "../assets/youtube-logo.jpg";
import MenuIcon from "../assets/hamburger-icon.jpg";
import UserIcon from "../assets/user-icon.jpg";
const Header = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg items-center">
      <div className="flex gap-3 col-span-1">
        <img src={MenuIcon} alt="menu" className="h-12 cursor-pointer" />
        <img
          src={YoutubeLogo}
          alt="youtube-logo"
          className="h-12 cursor-pointer"
        />
      </div>
      <div className="col-span-10">
        <input type="text" className="w-1/2 p-1 border-gray-400" />
        <button className="py-2 px-4 border-gray-400">Search</button>
      </div>
      <div className="col-span-1">
        <img src={UserIcon} alt="userIcon" className="h-12" />
      </div>
    </div>
  );
};

export default Header;
