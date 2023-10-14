import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import styles from "./App.module.css";

// COMPONENTS
import Header from "./components/header/Header";
import Carousel from "./components/landing/Carousel";
import HeaderTandM from "./components/header/header-for-small-screen/HeaderTandM";
import Loading from "./UI/Loading";

// STORE
import OverlayContext from "./store/OverlayContext";
import CertImages from "./components/about-me/CertImages";

// LAZY LOAD PAGES
const LazyAboutMe = React.lazy(() => import("./pages/AboutMe"));
const LazyProjects = React.lazy(() => import("./pages/Projects"));
const LazyContact = React.lazy(() => import("./pages/Contact"));

let init = true;

function App() {
  const [isHome, setIsHome] = useState(true);
  const [path, setPath] = useState("home");
  const [scrWidth, setScrWidth] = useState(window.innerWidth);
  const [scrHeight, setScrHeight] = useState(window.innerHeight);
  const location = useLocation();
  const overlayData = useContext(OverlayContext);

  // DETECT AND HANDLE RESIZE SCREEN STATE
  useEffect(() => {
    const handleResize = () => {
      setScrWidth(window.innerWidth);
      setScrHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // SHOW ACTIVE CONTENT BASED ON URL IN CASE THE PAGE WAS RELOADED
  useEffect(() => {
    if (!["/home", "/", ""].includes(location.pathname) && init === true) {
      setIsHome(false);
      setPath(location.pathname.slice(1, location.pathname.length));
      init = false;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (path === "home") {
      setIsHome(true);
    }
    if (path !== "home") {
      setIsHome(false);
    }
  }, [path]);

  return (
    <div className={styles.container}>
      <HeaderTandM
        class={`${styles["header-small-screen"]}`}
        style={
          isHome
            ? { bottom: "0", transform: "translateY(-100%)" }
            : { bottom: "100%", transform: "translateY(100%)" }
        }
        data={{
          isHome: isHome,
          setIsHome: setIsHome,
          path: path,
          setPath: setPath,
        }}
      />
      <Header
        class={`${styles.header}`}
        style={
          isHome
            ? { bottom: "0", transform: "translateY(-100%)" }
            : { bottom: "100%", transform: "translateY(100%)" }
        }
        data={{
          isHome: isHome,
          setIsHome: setIsHome,
          path: path,
          setPath: setPath,
        }}
      />
      <Carousel
        className={styles.carousel}
        style={
          isHome
            ? { transform: "translateY(0%)" }
            : { transform: "translateY(-100%)" }
        }
      />
      {overlayData.active && <CertImages />}
      <div className={styles["body"]}>
        <Routes>
          {/* <Route path="/about-me" element={<Loading />} /> */}
          <Route
            path="/about-me"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyAboutMe data={{ setPath: setPath }} />
              </React.Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyProjects scrWidth={scrWidth} />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyContact />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
