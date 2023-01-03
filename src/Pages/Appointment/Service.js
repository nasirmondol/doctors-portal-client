import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-white shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary justify-center items-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                        ? <span className='text-black '>{slots[0]}</span>
                        : <span className='text-red-400 text-xl text-black'>Try another day</span>
                }</p>
                <p className='text-black text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-primary uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;