import React from "react";
import "fontsource-roboto";
import Routes from "./routers/routes";
import { useRoutes } from 'react-router-dom';

const App = () => {
  const routing = useRoutes(Routes);

  return routing;
};

export default App;