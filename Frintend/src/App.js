import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css';
// import Background from './components/background.jsx'
import Register from './pages/register';
import Error404 from './pages/Error404'
import Forgetpassword from './pages/ForgPassword.jsx'
import Home from './pages/hme'
import Ressetpassword from './pages/Ressetpassword'
import Layout from './pages/Layout'
import Login from './pages/login';
import Client from './pages/Client';
import Admin from './pages/Admin';
import Regislivreur from './pages/Regislivreur.jsx';
import Statistique from './pages/Statistique';
import Valideemail from './pages/Validemail.jsx';
import Compt from './pages/Compt';




function App() {
  return (
    <Router>
    
 

    <Routes>
              <Route element = {<Layout />}>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/Ressetpassword/:token'  element={<Ressetpassword />}/>
                    <Route path='/'  element={<Home />}/>
                    <Route path='/forgetpassword' element={<Forgetpassword/>}/>
              </Route>

              <Route element = {<Admin />}>
                    <Route path='/Regislivreur' element={<Regislivreur/> }/>
                    <Route path='/Statistique' element={<Statistique/> }/>
                    <Route path='/compts' element={<Compt />}/>

              
                  
              </Route>


    <Route path='/*'  element={<Error404 />}/>
    <Route path='/validemail' element={<Valideemail/> }/>     
    <Route path='/client' element={<Client />}/>
    <Route path='/Admin' element={<Admin />}/>
    <Route path='/addlivreur' element={<Regislivreur />}/>
  
    </Routes>
  

    
    </Router>
  )
}

export default App;
