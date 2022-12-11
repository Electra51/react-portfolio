import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';


const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            
            <Header></Header>
            <About></About>
           
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;