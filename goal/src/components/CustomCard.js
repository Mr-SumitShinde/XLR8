import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CustomCard = (props) => {
  const { headerContent, content, buttonText, onButtonClick } = props;

  return (
    <Card>
      <Card.Header>{headerContent}</Card.Header>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
