import "./carosel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Sagecarousel() {
  return (
    <div className="carouselcontainer">
      <Carousel className="carousel">
        <Carousel.Item className="carousel_item">
          <img
            className="carouselblock"
            src="https://images.saatchiart.com/saatchi/950863/art/3641280/2711165-HSC00001-7.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="p_bolded">
              “Knowing yourself is the beginning of all wisdom.”
            </p>
            <h3>Arisotle</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselblock"
            src="https://s.clipartkey.com/mpngs/s/221-2218489_watercolor-leaves-02-free-png-watercolor-leaves.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="p_bolded">
              “The secret of life, though, is to fall seven times and to get up
              eight times.”
            </p>
            <h3 style={{ color: "#538075", webkitTextStroke: "0.5px #ffffff" }}>Paulo Coelho, The Alchemist</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselblock"
            src="https://images.saatchiart.com/saatchi/950863/art/3643686/2713571-HSC00001-7.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p className="p_bolded">
              “Yesterday I was clever, so I wanted to change the world. Today I
              am wise, so I am changing myself.”
            </p>
            <h3>Rumi</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Sagecarousel;
