import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
// import Search from "./components/Search";

// import SavedPage from "./pages/SavedPage";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <div>
            <Header></Header>
            <SearchPage></SearchPage>
            {/* <SavedPage></SavedPage> */}



        </div>
    );
}

export default App;
