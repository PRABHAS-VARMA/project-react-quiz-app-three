import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/project-react-quiz-app-three" element={<HomeComponent />} />
        <Route path="/project-react-quiz-app-three/play-quiz" element={<QuizComponent />} />
        <Route path="finish-quiz" element={<ResultComponent />} />
      </Routes>
    );
  }
}
