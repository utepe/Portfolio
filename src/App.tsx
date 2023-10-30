import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./routes/Home/Home";
import Resume from "./routes/Resume/Resume";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";
import Project from "./routes/Project/Project";

function App() {
  return (
    <Routes>
      {/* TODO: fix links so its not /#/XXX prolly has something to do with HashRouter */}
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:titleId" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
