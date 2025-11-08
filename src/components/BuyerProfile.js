import React from 'react';
import ProfileLayout from './profile/ProfileLayout';
import ProfileSidebar from './profile/ProfileSidebar';
import BuyerDashboard from './profile/BuyerDashboard';

const BuyerProfile = () => {
    const buyer = {
        name: 'Buyer Name',
        email: 'buyer@example.com',
        avatar: 'https://i.pravatar.cc/150?u=buyer'
    };

    const navLinks = [
        { to: '#', text: 'Dashboard', icon: 'fas fa-tachometer-alt', active: true },
        { to: '#', text: 'My Orders', icon: 'fas fa-box' },
        { to: '#', text: 'Wishlist', icon: 'fas fa-heart' },
        { to: '#', text: 'Shipping Address', icon: 'fas fa-map-marker-alt' },
        { to: '/settings', text: 'Settings', icon: 'fas fa-cog' },
        { to: '#', text: 'Logout', icon: 'fas fa-sign-out-alt' }
    ];

    return (
        <ProfileLayout>
            <ProfileSidebar user={buyer} navLinks={navLinks} />
            <BuyerDashboard />
        </ProfileLayout>
    );
}

export default BuyerProfile;
