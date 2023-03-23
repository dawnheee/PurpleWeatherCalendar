import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from 'pages/Calendar';
import Weather from 'pages/Weather';
import Oauth2callback from 'pages/Oauth2callback';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import Main from 'pages/Main';

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});

const CenteredApp = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CenteredApp>
          <Routes>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/" element={<Main />} />
            <Route path="/oauth2callback" element={<Oauth2callback />} />
          </Routes>
        </CenteredApp>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
