import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';

//CSS
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services-container">
            <div className="services-title text-center">
                <h3>Our Services</h3>
            </div>
            <div className="container">
                <div className="row g-4">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.id}
                        ></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;