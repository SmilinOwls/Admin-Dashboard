import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
import OrderDetail from './pages/Order/OrderDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/api' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='user/admin' element={<User />} />
          <Route path='blog/admin' element={<Blog />} />
          <Route path='place/admin' element={<Place />} />
          <Route path='room/admin' element={<Room />} />
          <Route path='book' element={<Outlet />}>
            <Route index element={<Order />} />
            <Route path='admin/:id' element={<OrderDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
