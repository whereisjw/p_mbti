import React from 'react';
import { Route, Routes } from 'react-router-dom';

import loadable from '@loadable/component';
const Home = loadable(() => import('./pages/Home/Home'));
const Login = loadable(() => import('./pages/Login/Login'));
const Signup = loadable(() => import('./pages/Signup/Signup'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
  );
};

export default Router;
