import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-white shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary justify-center items-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                        ? <span className='text-black '>{slots[0]}</span>
                        : <span className='text-red-400 text-xl text-black'>Try another day</span>
                }</p>
                <p className='text-black text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>
                <div className="card-actions justify-center">

                    <label for="booking-modal"
                        className="btn btn-primary btn-sm uppercase bg-gradient-to-r from-secondary to-primary"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;