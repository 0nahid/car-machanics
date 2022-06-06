import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img } = service;
    return (
        <div className="service pb-3 ">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price} $</h5>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;