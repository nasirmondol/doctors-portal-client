import React from 'react';
import quotes from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry', 
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio id ex accusamus magni laborum, ipsa explicabo quae reprehenderit quasi impedit saepe eligendi harum laboriosam modi delectus, beatae illo non veniam?',
            img: people1,
            location: "Shahbag, Dhaka"
        },
        {
            _id: 2,
            name: 'Basket Trous', 
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio id ex accusamus magni laborum, ipsa explicabo quae reprehenderit quasi impedit saepe eligendi harum laboriosam modi delectus, beatae illo non veniam?',
            img: people2,
            location: "Shahbag, Dhaka"
        },
        {
            _id: 3,
            name: 'Failing Vincent', 
            review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio id ex accusamus magni laborum, ipsa explicabo quae reprehenderit quasi impedit saepe eligendi harum laboriosam modi delectus, beatae illo non veniam?',
            img: people3,
            location: "Shahbag, Dhaka"
        },
    ]
    return (
        <section className='my-28 px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-bold text-primary text-xl'>Testimonials</h4>
                    <h2 className='text-bold text-3xl text-white'>What our patient say</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quotes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;