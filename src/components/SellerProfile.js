import React from 'react';
import ProfileLayout from './profile/ProfileLayout';
import ProfileSidebar from './profile/ProfileSidebar';
import SellerDashboard from './profile/SellerDashboard';

const SellerProfile = () => {
    const seller = {
        name: 'Seller Name',
        email: 'seller@example.com',
        avatar: 'https://i.pravatar.cc/150?u=seller'
    };

    const navLinks = [
        { to: '#', text: 'Dashboard', icon: 'fas fa-tachometer-alt', active: true },
        { to: '#', text: 'Products', icon: 'fas fa-box' },
        { to: '#', text: 'Orders', icon: 'fas fa-clipboard-list' },
        { to: '#', text: 'Analytics', icon: 'fas fa-chart-line' },
        { to: '#', text: 'Payouts', icon: 'fas fa-money-bill-wave' },
        { to: '/settings', text: 'Settings', icon: 'fas fa-cog' },
        { to: '#', text: 'Logout', icon: 'fas fa-sign-out-alt' }
    ];

    return (
        <ProfileLayout>
            <ProfileSidebar user={seller} navLinks={navLinks} />
            <SellerDashboard />
        </ProfileLayout>
    );
}

export default SellerProfile;
