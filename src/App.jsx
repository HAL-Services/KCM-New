import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
// importing componenets
import FullPage from "./Pages/FullPage";
import Loader from "./components/common/Loader";

import WriteReview from "./Pages/WriteReview";
// important styles
import "./styles/App.scss";

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />  }>
        <Switch>
          <Route exact path="/" component={FullPage} />
          <Route exact path="/write" component={WriteReview} />
        </Switch>
      </Suspense>
    </div>
  );
}
