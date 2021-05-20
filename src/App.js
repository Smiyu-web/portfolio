import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/00-UI/Navbar";
import HamburgerMenu from "./components/00-UI/Hamburger/HamburgerMenu";
import Header from "./components/01-Header/Header";
import About from "./components/02-About/About";
// import Blogs from "./components/04-Blogs/Blogs";
import Footer from "./components/05-Footer/Footer";
import Works from "./components/03-Works/Works";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";
import "../src/components/00-UI/TextAnimation";

const override = css`
  display: block;
  position: absolute;
  inset: 0;
  margin: auto;
`;

function App() {
  AOS.init({ duration: 1000, once: true });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BounceLoader
          color={"white"}
          loading={loading}
          size={60}
          css={override}
        />
      ) : (
        <div>
          <Navbar />
          <HamburgerMenu />
          <Header />
          <About />
          <Works />
          {/* <Blogs /> */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
