import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/core";
import "../src/components/00-UI/TextAnimation";
import WorkDetail from "./components/03-Works/WorkDetail";
import Home from "./components/Home";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/workdetail/:id" component={WorkDetail} />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
