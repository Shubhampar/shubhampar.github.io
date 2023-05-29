import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Contact from "./Pages/Contact"
import "./style.css";
import { GithubStats } from "./Components/GitHubCard/GithubStats";
function App() {

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <GithubStats/>
      <Contact />
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
