import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import AccountTransactions from './pages/AccountTransactions';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='*' element={<Error />}  />
        <Route path='profile' element={<ProtectedRoute><User/></ProtectedRoute>}/>
        <Route path='transactions' element={<ProtectedRoute><AccountTransactions/></ProtectedRoute>}/>
        <Route path='/login' element={<SignIn />}  />
      </Routes>
    </Router>
  );
}

export default App;
