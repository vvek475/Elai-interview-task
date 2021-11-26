import Home from "./pages/home";
import Result from "./pages/result";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CountParent } from "./store/countProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <CountParent>
          <Route path="/" exact component={Home} />
          <Route path="/result" component={Result} />
        </CountParent>
        </Switch>
      </Router>
    </div>
  );
}

export default App;