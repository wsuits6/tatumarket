import React from 'react';
import TopBar from '../home/TopBar';
import Header from '../home/Header';
import Nav from '../home/Nav';
import Footer from '../home/Footer';

const ProfileLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            <Header />
            <Nav />
            <section className="profile-section">
                <div className="profile-container">
                    {children}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProfileLayout;
