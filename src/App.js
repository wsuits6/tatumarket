import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Home from './components/Home';
import BuyerProfile from './components/BuyerProfile';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import SellerProfile from './components/SellerProfile';
import Settings from './components/Settings';
import SignUp from './components/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buyer-profile" element={<BuyerProfile />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/login" element={<Login />} />
                <Route path="/seller-profile" element={<SellerProfile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;