import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import About from "../pages/About";
import Patron from "../pages/Patron";
// import Overview from "../pages/Overview";
// import Tracks from "../pages/Tracks";
// import Submission from "../pages/Submission";
// import Committee from "../pages/Committee";
// import Schedule from "../pages/Schedule";
// import Registration from "../pages/Registration";
// import Contact from "../pages/Contact";

const App = () => {
  // const MainContent = () => {
  //   const location = useLocation();
  //   return location.pathname === "/" ? <Main /> : null;
  // };
  return (
    <div>
      {/* <Router> */}
   
        <Navbar />

       
        <MainContent />
        <About />
        <Patron />
        {/* <Routes>
          <Route exact path="/" element={<Overview />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/patron" element={<Patron />} />
          <Route path="/call" element={<Call />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <MainContent /> */}
      {/* </Router> */}
    </div>
  );
};

export default App;
