import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ArticlePage from "./Pages/ArticlePage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlesListPage from "./Pages/ArticlesListPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticlePage />}>
              <Route path=":name" element={<ArticlePage />} />
            </Route>
            <Route path="/articles-list" element={<ArticlesListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
