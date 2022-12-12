import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';


const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            
            <Header></Header>
            <About></About>
           <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;