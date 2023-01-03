import React, { useState } from 'react';
import doctorChair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={doctorChair} class="max-w-sm rounded-lg shadow-2xl" alt='Doctor chair' />
                <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                    <p className='text-success font-bold text-xl'>You have selected: {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;