import React from 'react';
import background from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{
            background: `url(${background})`,
            backgroundSize: 'cover'
        }} className='App m-5'>
            <div className='text-center'>
                <p className='text-white text-xl mt-8'>Contact us</p>
                <h4 className='text-3xl font-bold mb-5 text-white'>Stay connect with us</h4>
            </div>
            <div className=''>
                <input className='m-2 w-1/4 rounded-md bg-white' placeholder='Your Email' type="email" name="" id="" />
                <br />
                <input className='m-2 w-1/4 rounded-md bg-white' placeholder='Subject' type="text" name="" id="" />
                <br />
                <textarea className='m-2 w-1/4 rounded-md bg-white' placeholder='Your Messages' type="text" />
                <br />
                <input className='btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary mb-5' type="submit" value="Submit" />
            </div>
        </section>
    );
};

export default Contact;