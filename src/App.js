import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import Navbar from './component/Navbar/Navbar';
import Home from './component/home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import CartItem from './component/Cart/CartItem';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './Routes/CustomerRoute';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Home/> */}
      {/*   <RestaurantDetails/> */}
      {/* <Cart />*/}
      {/*      <Profile/>*/}
<CustomerRoute/>
    </ThemeProvider>

  );
}

export default App;
