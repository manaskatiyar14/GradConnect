import Navbar from './component/Navbar'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Alumini from "./pages/Alumini";
import Teams from "./pages/Teams";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/pages/home" element={<Home />} />
        <Route path="/pages/alumni" element={<Alumini />} />
        <Route path="/pages/teams" element={<Teams />} />
        <Route path="/pages/profile" element={<Profile />} />
        <Route path="/pages/signup" element={<Signup />} />
        <Route path="/pages/alumni" element={<Alumini />} />
      </Routes>
        <Footer />
    </>
  )
}

export default App;