import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img } = service;
    return (
        <div className="w-100 bg-secondary p-3 rounded ">
            <img className='img-fluid h-75 ' src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price} $</h5>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning mb-5">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;