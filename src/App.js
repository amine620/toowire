
import "font-awesome/css/font-awesome.min.css";
import "aos/dist/aos.css";
import * as mdb from "mdb-ui-kit"; // lib
import "mdb-ui-kit/css/mdb.min.css";
import Showcase from "./components/showcase/Showcase";
import { Routes, Route} from "react-router-dom";
import Main from "./components/dashboard";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Showcase />} />
      <Route path="/dashboard" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;


