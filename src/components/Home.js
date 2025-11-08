import React from 'react';
import TopBar from './home/TopBar';
import Header from './home/Header';
import Nav from './home/Nav';
import Hero from './home/Hero';
import Categories from './home/Categories';
import Products from './home/Products';
import Features from './home/Features';
import SellerSection from './home/SellerSection';
import CartSidebar from './home/CartSidebar';
import Footer from './home/Footer';
import ThemeToggle from './home/ThemeToggle';

const Home = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Nav />
            <Hero />
            <Categories />
            <Products />
            <Features />
            <SellerSection />
            <CartSidebar />
            <Footer />
            <ThemeToggle />
        </>
    );
}

export default Home;