import React  from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
//make the store availible to alll component 
// import ProtectedRoutes from './ProtectedRoutes';

//home
import Home from './pages/auth/Home'
import Menu from './pages/auth/Menu'
// Pages the Auth
import Login from './pages/auth/Login'
import Cart from './pages/auth/Cart'

import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import FormForgotPassword from './pages/auth/FormForgotPassword'
// Pages Client
import Dashboards from './components/layouts/Dashboard';
import Historique from './pages/user/client/Historique'
import SettingClient from './pages/user/client/settingClient'
// Pages Manager
import DashbordManager from './pages/user/manager/dashboardManager'
import RepasManager from './pages/user/manager/repasManager'
import CommandManager from './pages/user/manager/commandManager'
import CategoryManager from './pages/user/manager/categoryManager'
import LivreursManager from './pages/user/manager/LivreursManager'
import ClientsManager from './pages/user/manager/clientsManager'
import SettingManager from './pages/user/manager/settingManager'
import RegisterLivreur from './pages/user/manager/RegisterLivreur'
//livreur
import Command from './pages/user/livreur/Commande'
import Setting from './pages/user/livreur/Setting'

//tost toastify
import 'react-toastify/dist/ReactToastify.css';
//redux
import { store } from '../redux/index';
import { Provider } from 'react-redux';

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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu/:filterby" element={<Menu />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/form-forgot-password/' element={<FormForgotPassword />} />
          {/* { Client } */}
          <Route path='/dashboard/client' element={<Dashboards />}>
            <Route path='' element={<Historique />} />
            <Route path='setting' element={<SettingClient />} />
          </Route>
          {/* { Manager } */}
          <Route path='/dashboard/admin' element={<Dashboards />}>
            <Route path='' element={<DashbordManager />} />
            <Route path='RegisterLivreur' element={<RegisterLivreur />} />
            <Route path='repas' element={<RepasManager />} />
            <Route path='category' element={<CategoryManager />} />
            <Route path='command' element={<CommandManager />} />
            <Route path='livreurs' element={<LivreursManager />} />
            <Route path='clients' element={<ClientsManager />} />
            <Route path='setting' element={<SettingManager />} />
          </Route>
          <Route path='/dashboard/livreur' element={<Dashboards />}>
            <Route path='' element={<Command />} />
            <Route path='RegisterLivreur' element={<Setting />} />

          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App