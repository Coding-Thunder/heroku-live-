import { Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path="/AboutMe">
        <Banner url="https://images.unsplash.com/photo-1602665524691-6c4a1c1668b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        <AboutMe />
      </Route>
      <Route exact path="/education">
        <Banner
          displayText="My Education"
          url="https://images.unsplash.com/photo-1619301616241-d109ab48d500?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <Education />
      </Route>
      <Route exact path="/PersonalPortfolioNew">
        <Banner
          displayText="HELLO. I'm VINAY"
          url="https://images.unsplash.com/photo-1512255631150-62ae26eb1966?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <Projects />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
