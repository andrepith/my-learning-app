import React from 'react';
import Home from '../pages/home';
import Detail from '../pages/detail';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/detail/:id', element: <Detail /> },
];

export default routes;
