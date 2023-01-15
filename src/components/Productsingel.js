import React from 'react';
import { useParams } from 'react-router-dom';

const Productsingel = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h1>single page{params.id}</h1>
        </div>
    );
};

export default Productsingel;