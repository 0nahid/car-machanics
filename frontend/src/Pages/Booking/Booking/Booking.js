import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5500/api/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div className="w-50 m-auto">
            <h1>{service?.name}</h1>
            <h1>Price:{service?.price}$</h1>
            <p>{service?.description}</p>
            <img className='img-fluid' src={service?.img} alt="" />
        </div>
    );
};

export default Booking;