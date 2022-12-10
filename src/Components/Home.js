import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;