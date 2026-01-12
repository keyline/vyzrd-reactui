
import { NavLink, Outlet } from 'react-router-dom';
import { RoutePath } from '../../../routes/RoutesConfig';

function Home() {
   const linkClass = ({ isActive }) =>
    `w-full block text-left px-4 py-3 rounded-md mb-2 font-medium
     ${isActive ? "bg-gray-100 border border-gray-300" : "bg-white hover:bg-gray-50"}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <div className="bg-yellow-200 px-6 py-3 flex justify-between items-center">
        <h1 className="font-semibold text-lg">
          Test for Lite and pro for Deblina June 2024 | India
        </h1>
        <p className="text-sm font-medium">
          Last Login: 12-Jan-2026, 10:38:50 (GMT)
        </p>
      </div> */}

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[280px] border-r bg-white min-h-[calc(100vh-56px)] p-4">
          <p className="font-semibold mb-4 text-gray-700">Menu</p>

          <NavLink to={RoutePath.ESG} className={linkClass}>
            ESG Effectiveness
          </NavLink>

          <NavLink to={RoutePath.CLIMATE} className={linkClass}>
            Climate Risk & Net Zero Management
          </NavLink>

          <NavLink to={RoutePath.NEXT} className={linkClass}>
            Next - L&D
          </NavLink>
        </div>

        {/* Middle Content */}
        <div className="flex-1 p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home