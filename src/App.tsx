import { useState } from "react";
import MainSection from "./sections/MainSection";
import NavBar from "./sections/NavBar";
import NavBarSmall from "./sections/NavBarSmall";
import TrendingBids from "./sections/TrendingBids";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="bg-bg-clr relative flex">
      {width > 840 ? <NavBar /> : <NavBarSmall />}
      <MainSection />
      {/* <TrendingBids /> */}
    </div>
  );
}

export default App;
