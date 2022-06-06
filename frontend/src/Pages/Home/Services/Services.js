import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios("http://localhost:5500/api/services")
            .then(res => setServices(res.data))
    }, [])

    return (
        <div className="m-auto w-75">
            <h2 className="text-primary mt-5">Our services</h2>
            <Link to="/add" className="btn btn-primary mt-2">Add service</Link>
            <div className="service-container">
                {services.map((service) => (
                    <Service key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
