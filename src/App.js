import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import SignInPage from './pages/signIn';
import SignupPage from './pages/signup';
import Home from './pages/homePage';
import APP from './pages/app';
function App() {

  return (

    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignInPage />} />
        <Route path='sign-up' element={<SignupPage />} />
        <Route path='app' element={<APP />} />
      </Route>
    </Routes>

  );
}

export default App;
