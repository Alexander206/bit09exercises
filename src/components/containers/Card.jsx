import React from 'react';

// * Bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardEjercicio = ({ id, img, title, description, setEjercicio }) => {
  return (
    <Card>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='primary' onClick={() => setEjercicio(id + 1)}>
          Ver mas
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardEjercicio;
