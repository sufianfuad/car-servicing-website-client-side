
import './App.css';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import Navigation from './Components/Shared/Navigation/Navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/services" element={<Services />}>
            </Route>
            <Route path="/placeOrder" element={<PlaceOrder />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/signup" element={<Register />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
