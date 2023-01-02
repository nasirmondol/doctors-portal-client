import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info';
import Services from '../Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment/>
            <Testimonials></Testimonials>
            <Contact/>
        </div>
    );
};

export default Home;