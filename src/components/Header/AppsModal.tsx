import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const AppLink = (p: {name: string, link: string}) => <Link className={`bg-gray-700 rounded-lg p-1`} to={p.link}>{p.name}</Link>

export default function AppsModal() {
  const { conditionalViews } = useContext(AppContext);
  return (
    <>
      {conditionalViews["AppsModal"].isOn && (
        <div className="fixed flex gap-3 items-start justify-start top-[50px] right-[10px] rounded-md w-[200px] h-[50px] bg-black p-1">
        <AppLink name="paint" link="/paint" />
        <AppLink name='home' link='/' />
        </div>
      )}
    </>
  );
}
