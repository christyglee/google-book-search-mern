import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
// import Search from "./components/Search";
import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <div>
        <Router>
            <Header></Header>
                <Switch>
                    <Route path="/" exact>
                        <SearchPage></SearchPage>
                    </Route>
                    <Route path="/saved" exact>
                        <SavedPage></SavedPage>
                    </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                </Switch>
        </Router>
        </div>
    );
}

export default App;
