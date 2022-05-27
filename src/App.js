import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingPage,
  Home,
  Explore,
  Bookmark,
  Profile,
  Error404,
} from "./Pages/";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
