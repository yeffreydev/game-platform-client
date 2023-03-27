import { Link } from "react-router-dom";

export default function PaintHeader() {
  return (
    <div className="bg-black h-[50px] relative">
      <nav className="flex h-full p-1 justify-between mx-auto md:w-9/12 lg:w-8/12 items-center">
        <div>
          <Link to="/paint">Paint App</Link>
        </div>
        <ul className="flex items-center">
          <button>Apps</button>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
