import Sidebar from "../src/components/Sidebar"
import'./App.css'
import Home from "../src/pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";


function App() {
  return (
        
        <div className="app">
          <Sidebar/>
           <Home/>  
            <AboutMe/>
            <Experience/>
            <Contact/>
    </div>
  );
}

export default App;
