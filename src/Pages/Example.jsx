import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import "../App.css";
const Example = () => {
  return (
    <>
      <div className="flex gap-4 my-4 mx-4">
        <Sidebar />
        <div className="w-[100%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Example;
