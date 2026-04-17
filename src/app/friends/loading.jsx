import React from 'react';
import { CircleLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center  w-full text-5xl'>
            <CircleLoader color='green' />
        </div>
    );
};

export default loading;