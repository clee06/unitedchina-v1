import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Landing from '../Landing';
import Cards from '../Cards';
import Background from '../Background';

function Home() {
    return (
        <>
            <Landing />
            <Background />
            <Cards />
            <Footer />
        </>
    )
}

export default Home
