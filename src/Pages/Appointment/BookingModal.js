import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name, _id);
        setTreatment(null)
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary py-4 text-center">Booking for: {treatment.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" placeholder="Type here" className="input p-2 input-bordered input-info w-full max-w-xs" disabled value={format(date, 'PP')} />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="name" name='name' placeholder="Your name" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="number" name='number'  placeholder="Phone number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input input-bordered input-info w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;