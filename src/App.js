import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pantallas/index';
import Login from './Pantallas/login/login';
import Register from './Pantallas/register/register';
import Principal from './Pantallas/DogsPrincipal/Principal';
import ScreenPrincipal from './Pantallas/PrincipalScreen/Screen';
import News from './Pantallas/News/news';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path='/Principal' element={<Principal/>}/>
        <Route path='/ScreenPrincipal' element={<ScreenPrincipal/>} />
        <Route path='/News' element={<News/>}/>
      </Routes>
    </Router>
  );
}

export default App;
