import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Order from './pages/Order/Order';
import Blog from './pages/Blog/Blog';
import User from './pages/User/User';
import Place from './pages/Place/Place';
import Room from './pages/Room/Room';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path='user' element={<User/>}/>
          <Route path='book' element={<Order/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='place' element={<Place/>}/>
          <Route path='room' element={<Room/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
