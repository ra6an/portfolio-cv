import { createContext, useState } from "react";

const OverlayContext = createContext({
  currentProjects: "programming",
  setCurrentProjects: (cur) => {},
  imgs: [],
  sideBar: false,
  setSideBar: (bool) => {},
  setImgs: (arr) => {},
  active: false,
  setActive: () => {},
  setInactive: () => {},
});

export const OverlayContextProvider = (props) => {
  const [curProj, setCurProj] = useState("programming");
  const [active, setActive] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [imgs, setImgs] = useState([]);

  const setCurrentProjects = (cur) => {
    setCurProj(cur);
  };

  const setSide = (bool) => {
    setSideBar(bool);
  };

  const setImagesHandler = (arr) => {
    setImgs(arr);
  };

  const setActiveHandler = () => {
    setActive(true);
  };

  const setInactiveHandler = () => {
    setActive(false);
  };

  return (
    <OverlayContext.Provider
      value={{
        imgs: imgs,
        sideBar: sideBar,
        setSideBar: setSide,
        currentProjects: curProj,
        setCurProj: setCurrentProjects,
        setImgs: setImagesHandler,
        active: active,
        setActive: setActiveHandler,
        setInactive: setInactiveHandler,
      }}
    >
      {props.children}
    </OverlayContext.Provider>
  );
};

export default OverlayContext;
