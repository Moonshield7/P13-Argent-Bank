import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/sign-in' element={<SignIn />}  />
      </Routes>
    </Router>
  )
}

export default App
