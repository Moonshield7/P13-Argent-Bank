import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import AccountTransactions from "./pages/AccountTransactions";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/profile' element={<User />}  />
        <Route path='/login' element={<SignIn />}  />
        <Route path='/transactions' element={<AccountTransactions />}  />
      </Routes>
    </Router>
  )
}

export default App
