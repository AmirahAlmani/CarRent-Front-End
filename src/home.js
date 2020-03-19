import React from "react";
import Slider from "react-slick";
import img1 from "./5.jpg";
class Home extends React.Component {
  render() {
    const settings = {
      dots: true,
      // infinite: true,
      speed: 500,
      // slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              {" "}
              <img className="img" src={img1} />{" "}
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Home;
