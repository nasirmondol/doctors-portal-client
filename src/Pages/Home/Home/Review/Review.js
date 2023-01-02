import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-white shadow-xl">
            <div className="card-body">
                <p className='text-black'>{review.review}</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar mx-4">
                    <div className="w-24 m-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} />
                    </div>
                </div>
                <div className=''>
                    <h4 className='text-black font-bold text-2xl'>{review.name}</h4>
                    <p className='text-black text bold text-xl font-semibold' >{review.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;

// px-4 m-2