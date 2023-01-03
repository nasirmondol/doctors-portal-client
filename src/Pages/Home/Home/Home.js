import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info';
import Services from '../Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment/>
            <Testimonials></Testimonials>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;