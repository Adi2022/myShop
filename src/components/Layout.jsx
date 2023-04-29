import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../RootLayout/Header";
import {Provider} from 'react-redux';
import store from '../store/store';
const Layout = () => {
  return (
    <Provider store={store}>
     <Header/>
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default Layout;
