import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const selectDate = format(date, 'PP')

    const { data: services = [], refetch } = useQuery({
        queryKey: ['services', selectDate],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/service?date=${selectDate}`)
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <p className='text-center text-success font-bold text-xl py-10'>Available Appointment on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment &&
                <BookingModal
                    date={date}
                    refetch={refetch}
                    setTreatment={setTreatment}
                    treatment={treatment}>
                </BookingModal>}
        </div>
    );
};

export default AvailableAppointment;