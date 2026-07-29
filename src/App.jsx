import GlobalStyles from "./components/UI/Styles/Global.styles";
import Navigation from "./components/Pages/Nav/Nav";
import FooterComponent from "./components/Pages/Footer";
// import PageNotFound from "./components/Pages/PageNotFound";

import {
  Router,
  ReactLocation,
  Outlet,
  createHashHistory,
} from "@tanstack/react-location";

function App() {
  // Create a hash history
  const hashHistory = createHashHistory();
  //Set up a ReactLocation Instance
  const location = new ReactLocation({ history: hashHistory });

  return (
    <Router
      location={location}
      routes={[
        {
          path: "/",
          element: () =>
            import("./components/Pages/LandingPage").then((module) => (
              <module.default />
            )),
        },
        {
          path: "about",
          element: () =>
            import("./components/Pages/About/AboutMe").then((module) => (
              <module.default />
            )),
        },
        {
          path: "projects",
          element: () =>
            import("./components/Pages/Projects").then((module) => (
              <module.default />
            )),
        },
        {
          path: "resume",
          element: () =>
            import("./components/Pages/About/Resume").then((module) => (
              <module.default />
            )),
        },
        {
          element: () =>
            import("./components/Pages/LandingPage").then((module) => (
              <module.default />
            )),
        },
      ]}
    >
      <GlobalStyles />
      <header>
        <Navigation />
      </header>
      <div>
        <Outlet />
      </div>
      <FooterComponent />
    </Router>
  );
}
export default App;
