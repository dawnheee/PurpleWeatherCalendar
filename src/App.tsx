import './App.css';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from 'pages/Calendar';
import Weather from 'pages/Weather';
import Oauth2callback from 'pages/Oauth2callback';
import GoogleOauth from 'pages/GoogleOauth';
import PostEvent from 'pages/PostEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/oauth" element={<GoogleOauth />} />
        <Route path="/event" element={<PostEvent />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/oauth2callback" element={<Oauth2callback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
