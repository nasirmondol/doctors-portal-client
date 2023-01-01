import React from 'react';

const InfoCard = ({img, title, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure>
                <img className='pl-4' src={img} alt="Album" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;