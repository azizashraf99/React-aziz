import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/register", element: <Register /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return <>{routes}</>;
}

export default App;
