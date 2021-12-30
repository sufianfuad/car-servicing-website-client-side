import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <section className="col-lg-3 col-md-3 col-12">
            <div className="service-card" data-aos="fade-up"
                data-aos-duration="2000">
                <div className="service-img">
                    <div className="img-box">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="services-details">
                    <h2>{name}</h2>
                    <h5>{price}</h5>
                    <p>{description}</p>
                    <div className="service-button">
                        <Link to={'/placeOrder'}>
                            <button className="btn btn-primary px-3 py-2">Booking Service</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;