import "./App.css";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes/routes";

function AppRoutes() {
  const element = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
}

function App() {
  return (
    // BrowserRouter >> should always be imported before useRoutes
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
