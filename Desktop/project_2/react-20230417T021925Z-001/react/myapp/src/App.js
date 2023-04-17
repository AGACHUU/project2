import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/examples/LandingPage';
import ProfilePage from './views/examples/ProfilePage';
import RegisterPage from './components/Member/RegisterPage';
import BaseLayout from 'components/Layout/BaseLayout';
import Home from 'views/Home';
import Login from 'components/Member/Login';
import AdminLogin from 'components/Admin/AdminLogin';
import AdminRegister from 'components/Admin/AdminRegister';
import AdminPage from 'components/Admin/AdminPage';

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AdminRegister' element={<AdminRegister />} />
        <Route path='/AdminPage' element={<AdminPage />} />

        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/profile-page' element={<ProfilePage />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
