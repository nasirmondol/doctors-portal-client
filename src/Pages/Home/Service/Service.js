import React from 'react';

const Service = ({service}) => {

    return (
        <div class="card w-96 bg-white shadow-xl g-5">
            <figure class="px-10 pt-10">
                <img width={116} height={115} src={service.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-success">{service.name}</h2>
                <p className='text-success'>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;