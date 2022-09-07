import LandingPage from "./components/Pages/LandingPage";
import GlobalStyles from "./components/UI/Styles/Global.styles";
import Navigation from "./components/Pages/Nav/Nav";
import AboutMe from "./components/Pages/About/AboutMe";
import Projects from "./components/Pages/Projects";
import Resume from "./components/Pages/Resume";
import FooterComponent from "./components/Pages/Footer";
import { Router, ReactLocation, Outlet } from "@tanstack/react-location";

function App() {
  //Set up a ReactLocation Instance
  const location = new ReactLocation();

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
      <body>
        <Outlet />
      </body>
      <FooterComponent />
    </Router>
  );
}
export default App;
