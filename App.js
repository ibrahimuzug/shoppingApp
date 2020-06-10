import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'

import HomePage from './src/screens/Home';
import CartPage from './src/screens/CartPage';
import LoginPage from './src/screens/Login';
import ProductsPage from './src/screens/ProductsPage';
import OrderPage from './src/screens/OrderPage';

const StackRoute = createStackNavigator(
  {
    Anasayfa: HomePage,
    Sepetim: CartPage,
    Giriş: LoginPage,
    Ürünler: ProductsPage,
    Sipariş: OrderPage,
  },
  {
    initialRouteName: 'Anasayfa',
  },

  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(StackRoute);
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return <AppContainer />;
}

export default App