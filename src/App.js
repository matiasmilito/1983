import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthContextProvider } from './context/AuthContext';
import CartProvider from './context/CartContext';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import AdminPage from './components/AdminPage';
import Profile from './components/Profile';
import FloatingWhatsApp from 'react-floating-whatsapp';
import LogoW from './assets/logoced.png'

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/adminpage' element={<AdminPage /> } />
          <Route path='/' element={<Home />} />
          <Route path='/type/:productType' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </CartProvider>
      </AuthContextProvider>
      <FloatingWhatsApp 
      phoneNumber='543413512657'
      accountName='SAFO'
      allowClickAway
      avatar={LogoW}
      defaultMessage={'Hola! Estoy interesado en unas de sus gorras!'}
      />
    </Router>
  );
}

export default App;
