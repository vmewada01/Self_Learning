import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import RequireAuth from './HOC/RequireAuth';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/feeds" element={
            <RequireAuth>  <Feeds /></RequireAuth>
          } />
           <Route
          path="posts" element={
            <RequireAuth>  <Posts /></RequireAuth>
          } />
      </Routes>
    </div>
  );
}

export default App;
