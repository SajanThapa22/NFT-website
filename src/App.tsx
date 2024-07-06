import { useState } from "react";
import MainSection from "./sections/MainSection";
import NavBar from "./sections/NavBar";
import NavBarSmall from "./sections/NavBarSmall";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="bg-bg-clr relative flex">
      {width > 840 ? <NavBar /> : <NavBarSmall />}
      <MainSection />
    </div>
    // <div className="w-full h-dvh bg-red-700 overflow-x-scroll">
    //   <div className="h-96 min-w-[1600px] bg-blue-400">adsfsdfasdf</div>
    // </div>
  );
}

export default App;
