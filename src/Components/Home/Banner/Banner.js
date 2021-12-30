import React from 'react';
import { Carousel } from 'react-bootstrap';

//CSS
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://admin.idaoffice.org/wp-content/uploads/2018/11/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F.jpg"

                            // src="https://gomechanic.in/assets/img/advertisepage/AMP1.png"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block w-100 img-fluid"
                            // src="https://image.shutterstock.com/image-photo/manual-car-wash-white-soap-260nw-1830908789.jpg"
                            src="https://www.onmanorama.com/content/dam/mm/en/business/autos/images/2020/5/22/hennessey-venom.jpg"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-container">
                        <img
                            className="d-block w-100 img-fluid"
                            // src="https://cdn.wearemarmalade.co.uk/wam/2020-12/car-service.jpg"
                            src="https://dealerimages.dealereprocess.com/image/upload/1312936.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;