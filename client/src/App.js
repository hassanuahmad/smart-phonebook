import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Input from "./components/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import View from "./components/View";

function App() {
    return (
        <Router>
            <div className="App">
                <NavigationBar />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Hero />
                        </Route>
                        <Route path="/input">
                            <Input />
                        </Route>
                        <Route path="/view">
                            <View />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
