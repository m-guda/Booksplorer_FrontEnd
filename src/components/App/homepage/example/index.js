import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import BookList from '../BookList';



const Example = (props) => {
  console.log(props)
  return (
    <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
      {
        props.books.map((book) => {
          return (
            <Card style={{width:'350px', margin:'10px'}}>
            <CardImg top width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{book.title}</CardTitle>
              <CardSubtitle>{book.author}</CardSubtitle>
              <CardText>{book.price}</CardText>
              <Button>View Book</Button>
            </CardBody>
          </Card>
          )
        })
      }

    </div>
  );
};

export default Example;
