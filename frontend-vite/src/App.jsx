import React  from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import axios from 'axios'
//make the store availible to alll component 
import { Provider } from 'react-redux';
// import ProtectedRoutes from './ProtectedRoutes';
// Pages the Auth
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import FormForgotPassword from './pages/auth/FormForgotPassword'
// Pages Client
import Dashboards from './components/layouts/Dashboard';
import DashbordClient from './pages/user/client/dashboardClient'
import SettingClient from './pages/user/client/settingClient'
// Pages Manager
import DashbordManager from './pages/user/manager/dashboardManager'
import RepasManager from './pages/user/manager/repasManager'
import CommandManager from './pages/user/manager/commandManager'
import CategoryManager from './pages/user/manager/categoryManager'
import LivreursManager from './pages/user/manager/LivreursManager'
import ClientsManager from './pages/user/manager/clientsManager'
import SettingManager from './pages/user/manager/settingManager'
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store'

window.addEventListener("storage", () => {
  axios
    .get('http://localhost:5500/api/auth/logout')
    .then(() => {
      localStorage.clear();
      window.location.replace('http://127.0.0.1:5173/login');
    })
    .catch(() => {
      console.log("Error");
    });
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* { Auth} */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/form-forgot-password/' element={<FormForgotPassword />} />
          {/* { Client } */}
          <Route path='/dashboard/client' element={<Dashboards />}>
            <Route path='' element={<DashbordClient />} />
            <Route path='setting' element={<SettingClient />} />
          </Route>
          {/* { Manager } */}
          <Route path='/dashboard/manager' element={<Dashboards />}>
            <Route path='' element={<DashbordManager />} />
            <Route path='repas' element={<RepasManager />} />
            <Route path='category' element={<CategoryManager />} />
            <Route path='command' element={<CommandManager />} />
            <Route path='livreurs' element={<LivreursManager />} />
            <Route path='clients' element={<ClientsManager />} />
            <Route path='setting' element={<SettingManager />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App