import Carousel from "react-bootstrap/Carousel";
import first from "../../../images/auto.jpeg";
import second from "../../../images/school.jpeg";
import "./Slider.scss";

function DarkVariantExample() {
  return (
    <Carousel variant="dark" className="carousel__carousel">
      <Carousel.Item className="carousel__first">
        <Carousel.Caption>
          <h3>БОЛЬШИЕ СКИДКИ</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel__first">
        <Carousel.Caption>
          <h3> ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
