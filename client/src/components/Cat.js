import React from 'react';
import { 
	Col, Card, CardImg, CardText, CardBody, CardTitle, Button 
} from 'reactstrap';

function Cat(props) {
  const { children: cat } = props;
  return (
    <Col className='mb-3' xs='3' sm='4'>
      <Card>
        <CardImg top width="100%" src={cat.image} alt={cat.name} />
        <CardBody>
          <CardTitle className='text-warning display-4'>{cat.name}</CardTitle>
          <CardText className='text-success'>color: {cat.color}</CardText>
          <Button color='info' className='mr-2'>Detail</Button>
          <Button color='primary' className='mr-2'>Edit</Button>
          <Button color='danger'>Delete</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Cat;