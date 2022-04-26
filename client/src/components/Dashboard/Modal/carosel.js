import {useState} from "react";
import './carosel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';


function Sagecarousel() {
    return (
        <div className="carouselcontainer">
  <Carousel className="carousel">
  <Carousel.Item className="carousel_item">
    <img
      className="carouselblock"
      src="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <p className="p_bolded">“Knowing yourself is the beginning of all wisdom.”</p>
      <h3>Arisotle</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carouselblock"
      src="https://images.unsplash.com/photo-1504204267155-aaad8e81290d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <p className="p_bolded">“The secret of life, though, is to fall seven times and to get up eight times.”</p>
      <h3>Paulo Coelho, The Alchemist</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carouselblock"
      src="https://images.unsplash.com/flagged/photo-1568005242833-d0f5f61da402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p className="p_bolded">“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”</p>
      <h3>Rumi</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
      </div>
    );
  }
 
export default Sagecarousel;



