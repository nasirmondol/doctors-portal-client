import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import background from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='flex justify-center items-center my-28 px-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h4 className='text-primary text-xl'>Appointment</h4>
                <h2 className='text-3xl text-white text-bold'>Make An appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate error minus maxime laboriosam velit iste inventore itaque odit officia, porro minima laudantium aperiam? Obcaecati temporibus expedita porro harum. Repellat, placeat.</p>
                <PrimaryButton>Get Started</PrimaryButton>

            </div>
        </section>
    );
};

export default MakeAppointment;