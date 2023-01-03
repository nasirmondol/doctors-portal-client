import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const  [services, setServices] = useState([])

    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-success font-bold text-xl py-10'>Available Appointment on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                   services.map(service => <Service
                   key={service._id}
                   service={service}
                   ></Service>)  
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;