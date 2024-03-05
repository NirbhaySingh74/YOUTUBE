import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [useParams] = useSearchParams();
  console.log(useParams.get("v"));
  return (
    <div>
      <h1>This is watch page</h1>
    </div>
  );
};

export default WatchPage;
