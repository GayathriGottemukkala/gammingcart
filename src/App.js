import logo from './logo.svg';
import './App.css';
import Login from './components/loginpage';
import GamingCard from './components/gammingcard';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" Component={Login}/>
      <Route path="/gaming" Component={GamingCard}/>
     
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
