import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';
import child from '../../../assets/images/treatment.png'
import './Services.css'


const Services = () => {
    const services1 = [
        {
            _id: 1,
            name: "Fluride Treatment",
            img: fluride,
            description: 'We provide our service properly in time and we do not disrespect to patient',
        },
        {
            _id: 1,
            name: "Cavity Filling",
            img: cavity,
            description: 'We provide our service properly in time and we do not disrespect to patient'
        },
        {
            _id: 1,
            name: "Teeth Whitening",
            img: whitening,
            description: 'We provide our service properly in time and we do not disrespect to patient'
        }
    ]

    return (
        <div>
            <div className='text-center mt-20'>
                <h3 className='text-xl text-primary font-bold uppercase'>Our services</h3>
                <h1 className='text-3xl mb-5'>Services we provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services1.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div class="hero min-h-screen bg-base-200 mt-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={child} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-5'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto, doloremque beatae ipsam magnam quis nemo et atque quisquam dolorem suscipit incidunt sequi alias praesentium enim optio ipsa! Quo, natus!</p>
                        <button class="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;