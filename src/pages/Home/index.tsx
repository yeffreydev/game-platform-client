import react from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Apps</h1>
      <ul>
        <li>
          <Link to="/paint">Paint App</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
