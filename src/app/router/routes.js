import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { HomePage } from '@pages/home/Home'
import { AboutUsPage } from '@pages/about-us/AboutUs'
import { CatalogPage } from '@pages/catalog/Catalog'
import { OrderPage } from '@pages/order/Order'
import { ProfilePage } from '@pages/profile/Profile'
import { SignInPage } from '@pages/auth/sign-in/SignIn'
import { SignUpPage } from '@pages/auth/sign-up/SignUp'
import { TariffPage } from '@pages/tariff/Tariff'
import { AdminPanelPage } from '@pages/admin/AdminPanel'

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/tariff" element={<TariffPage />} />
      <Route path="/admin" element={<AdminPanelPage />} />
    </RouterRoutes>
  );
};

export default Routes;