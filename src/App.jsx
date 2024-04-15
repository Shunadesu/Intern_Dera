import React from 'react';
import {Home,Login, ForgotPassword, Fail, NEW, ProductDetail, Payment} from './pages';

import path from './Ulities/path';

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App font-custom">
      
        <Routes>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.FORGOTPASSWORD} element={<ForgotPassword />} />

          <Route path={path.CLOTHING} element={<NEW />} />
          <Route path={path.BATH} element={<NEW />} />
          <Route path={path.BEDDING} element={<NEW />} />
          <Route path={path.HOMEGOODS} element={<NEW />} />
          <Route path={path.FURNITURE} element={<NEW />} />
          <Route path={path.FOOTWEAR} element={<NEW />} />
          <Route path={path.ACCESORIES} element={<NEW />} />

          <Route path={path.FAIL} element={<Fail />}/>
          <Route path={path.NEWS} element={ <NEW />} />
          <Route path={path.PRODUCTDETAIL} element={<ProductDetail/>} />
          <Route path={path.PAYMENT} element={<Payment/>}/>
        </Routes>
    </div>
  );
}

export default App;
