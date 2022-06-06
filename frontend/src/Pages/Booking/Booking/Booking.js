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
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h1>{service?.name}</h1>
            <p>{service?.price}</p>
            <p>{service?.description}</p> 
            <img src={service?.img} alt="" />
        </div>
    );
};

export default Booking;