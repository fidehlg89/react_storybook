import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

const items = [
  { id: 1, title: "Tarjeta 1", description: "Descripción de la tarjeta 1" },
  { id: 2, title: "Tarjeta 2", description: "Descripción de la tarjeta 2" },
  { id: 3, title: "Tarjeta 3", description: "Descripción de la tarjeta 3" },
  { id: 4, title: "Tarjeta 4", description: "Descripción de la tarjeta 4" },
  { id: 5, title: "Tarjeta 5", description: "Descripción de la tarjeta 5" },
  { id: 6, title: "Tarjeta 6", description: "Descripción de la tarjeta 6" },
];

const CarouselContainer = () => {
  const itemsPerSlide = 3;
  const [activeIndex, setActiveIndex] = useState(0);

  const onExiting = () => {
    setActiveIndex((prevState) =>
      prevState === 0 ? items.length - 1 : prevState - 1
    );
  };

  const onExited = () => {};

  const onSlide = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = [];

  for (let i = 0; i < items.length; i += itemsPerSlide) {
    let slideItems = [];

    for (let j = i; j < i + itemsPerSlide; j++) {
      if (j < items.length) {
        slideItems.push(
          <Col md={4} key={items[j].id}>
            <Card>
              <CardBody>
                <CardTitle>{items[j].title}</CardTitle>
                <CardText>{items[j].description}</CardText>
              </CardBody>
            </Card>
          </Col>
        );
      }
    }

    slides.push(
      <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={`slide-${i}`}
      >
        <Row>{slideItems}</Row>
      </CarouselItem>
    );
  }

  return (
    <Carousel activeIndex={activeIndex} onSlide={onSlide}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={onSlide}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={() =>
          setActiveIndex((prevState) =>
            prevState === 0 ? items.length - 1 : prevState - 1
          )
        }
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={() =>
          setActiveIndex((prevState) =>
            prevState === items.length - 1 ? 0 : prevState + 1
          )
        }
      />
    </Carousel>
  );
};

export default CarouselContainer;
