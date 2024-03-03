import MainContainer from "./MainContainer";
import SidebarButton from "./SidebarButton";

const Body = () => {
  return (
    <div className="flex">
      <SidebarButton />
      <MainContainer />
    </div>
  );
};

export default Body;
