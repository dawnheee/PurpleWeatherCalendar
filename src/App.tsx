import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from 'pages/Calendar';
import Weather from 'pages/Weather';
import Oauth2callback from 'pages/Oauth2callback';
import GoogleOauth from 'pages/GoogleOauth';
import PostEvent from 'pages/PostEvent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/oauth" element={<GoogleOauth />} />
          <Route path="/event" element={<PostEvent />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/oauth2callback" element={<Oauth2callback />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
