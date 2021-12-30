import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

//CSS
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center'>
                <h4>Why Choose Us</h4>
                <h5>Our Team</h5>
                <h5>Client Review</h5>
                <h5>Latest Services</h5>
                <h6>Contact Form</h6>
            </div>
        </div>
    );
};

export default Home;