import PropTypes from "prop-types";

function Carousel({title}) {

  return (
    <>
      <h3>{title}</h3>
      <button>Hola Mundo</button>
    </>
  );
}

Carousel.propTypes = {
  title: PropTypes.string
};

export default Carousel
