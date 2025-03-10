import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Profile from "./Profile";
import Register from "./register";
import Profile from "./Profile";

function App() {
  return (
    <>
    <h1>url for register: /signup</h1>
    <h1>url for signin: /signin</h1>
    <h1>url for profile: /profile</h1>
   
    <Router>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

  
      </Routes>
    </Router>
    </>
  );
}

export default App;