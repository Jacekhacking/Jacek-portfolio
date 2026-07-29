import Navigation from "./components/Pages/Nav/Nav";
import FooterComponent from "./components/Pages/Footer";

import {
  Router,
  ReactLocation,
  Outlet,
  createHashHistory,
} from "@tanstack/react-location";

function App() {
  const hashHistory = createHashHistory();
  const location = new ReactLocation({ history: hashHistory });

  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: () =>
            import("./components/Pages/LandingPage").then((m) => <m.default />),
        },
        {
          path: "about",
          element: () =>
            import("./components/Pages/About/AboutMe").then((m) => <m.default />),
        },
        {
          path: "projects",
          element: () =>
            import("./components/Pages/Projects").then((m) => <m.default />),
        },
        {
          path: "experience",
          element: () =>
            import("./components/Pages/Experience").then((m) => <m.default />),
        },
        {
          path: "resume",
          element: () =>
            import("./components/Pages/About/Resume").then((m) => <m.default />),
        },
        {
          element: () =>
            import("./components/Pages/LandingPage").then((m) => <m.default />),
        },
      ]}
    >
      <header>
        <Navigation />
      </header>
      <Outlet />
      <FooterComponent />
    </Router>
  );
}
export default App;
