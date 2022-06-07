import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
            <Link to="/" > <button className="btn btn-primary mt-5 mb-5">Goto to Home</button> </Link>
        </div>
    );
};

export default Booking;