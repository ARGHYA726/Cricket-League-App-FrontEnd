import React from "react";
import { Carousel } from 'react-bootstrap';

import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';

import '../Home/myStyles.css'

const CarouselContainer = () => {
  return (
    // <div style={{ display: 'block' }} className="blc">
    //   <Carousel>
    //     <Carousel.Item>
    //       <img
    //         className="d-block mx-auto w-100 tales"
    //         src={image1}
    //         alt="First slide"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block mx-auto w-100 tales2"
    //         src={image2}
    //         alt="Second slide"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img

    //         className="mx-auto w-100 tales3"
    //         src={image3}
    //         alt="Third slide"
    //       />
    //     </Carousel.Item>

    //   </Carousel>
    // </div>
    <div className="carousel-cont">

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block rounded" src={image1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block rounded" src={image2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block rounded" src={image3} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

  )
}
export default CarouselContainer;