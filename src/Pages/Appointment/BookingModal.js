import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth)

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const treatment1 = event.target.treatment1.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const name = event.target.name.value;

        const booking = {
            appointDate: date,
            name: name,
            treatment1: treatment,
            slot: slot,
            email: email,
            phone: phone,
            treatment1: treatment1

        }
        console.log(slot, name, _id, booking);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Booking successful')
                    refetch()
                    setTreatment(null)
                }
                else {
                    toast.error( data.message)
                }
            })

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary py-4 text-center">Booking for: {treatment.name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" placeholder="Type here" className="input p-2 input-bordered input-info w-full max-w-xs" disabled value={format(date, 'PP')} />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='treatment1' disabled value={treatment.name} className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" name='name' className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user.email} className="input input-bordered input-info w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input input-bordered input-info w-full max-w-xs" />
                    </form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookingModal;