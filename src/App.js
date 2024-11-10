// App.js
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './Theme/DarkTheme';
import CustomerRoute from './Routes/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './State/Authentication/Action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt || auth.jwt) {
      dispatch(getUser(jwt || auth.jwt));
    }
  }, [auth.jwt, dispatch, jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
