import './App.css';
import { Route, Routes } from 'react-router-dom';
import Public from './pages/Public';
import Home from './pages/Home';
import Protected from './pages/Protected';
import Layout from './pages/Layout';
import RequireAuth from './components/RequireAuth';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/public' element={<Public />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path='/protected' element={<Protected />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default App;
