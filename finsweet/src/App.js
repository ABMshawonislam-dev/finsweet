import "./App.css";
import Banner from "./components/banner/Banner";
import Client from "./components/client/Client";
import Design from "./components/design/Design";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Project />
      <Design />
      <Client />
    </>
  );
}

export default App;
