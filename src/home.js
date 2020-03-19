import React from 'react';

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
      <>
        <h2>Welcome to Car Rent</h2>
      </>
    )
  }
}

export default Home;
