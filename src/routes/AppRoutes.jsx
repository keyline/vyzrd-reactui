import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./RoutesConfig";

function AppRoutes() {
  const renderRoutes = (routes) => {
    return routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={route.element}
        index={route.index}
      >
        {route.children ? renderRoutes(route.children) : null}
      </Route>
    ));
  };

  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default AppRoutes;





// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import routes from './RoutesConfig'

// function AppRoutes() {
//   return (
//     <Routes>
//       {routes.map((route,index)=>{
//         return(
//           <Route
//             key={index}
//             path={route.path}
//             element={route.element}
//           />
//         )
//       })}
//     </Routes>
//   )
// }

// export default AppRoutes