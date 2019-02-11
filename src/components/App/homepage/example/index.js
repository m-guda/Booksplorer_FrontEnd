import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import BookList from '../BookList';



const Example = (props) => {
  console.log(props)
  return (
    <CardDeck>
      {
        props.books.map((book) => {
          return (
            <Card>
            <CardImg top width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody style = {{background : "black"}}>
              <CardTitle>{book.title}</CardTitle>
              <CardSubtitle>{book.author}</CardSubtitle>
              <CardText>{book.price}</CardText>
              <Button>View Book</Button>
            </CardBody>
          </Card>
          )
        })
      }

    </CardDeck>
  );
};

export default Example;
