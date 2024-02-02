import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/play-quiz" element={<QuizComponent />} />
          <Route path="/finish-quiz" element={<ResultComponent />} />
        </Routes>
      </Router>
    );
  }
}
