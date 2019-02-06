import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import book1 from '/Users/manaswini/Desktop/Booksplorer_Frontend/src/components/App/images/book1.jpg';
import book2 from '/Users/manaswini/Desktop/Booksplorer_Frontend/src/components/App/images/book2.jpg';
import book3 from '/Users/manaswini/Desktop/Booksplorer_Frontend/src/components/App/images/book3.jpg';
import book4 from '/Users/manaswini/Desktop/Booksplorer_Frontend/src/components/App/images/book4.jpg';
import book5 from '/Users/manaswini/Desktop/Booksplorer_Frontend/src/components/App/images/book5.jpg';

const Example = (props) => {
  return (
    <div class="container">
    <CardDeck>
      <Card>
        <CardImg top width="20%" src={book1} height="350" alt="Card image cap" />
        <CardBody><center>
          <CardTitle><b>Harry Potter, Prisoner of Azkaban</b></CardTitle>
          <CardSubtitle>by<b>J K Rowling</b></CardSubtitle>
          <CardText>$350
  </CardText>
          <Button>Locate Book</Button></center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="20%" src={book2} height="350" alt="Card image cap" />
        <CardBody><center>
          <CardTitle><b>Mapie Murders</b></CardTitle>
          <CardSubtitle>by <b>Anthony Horowitz</b></CardSubtitle>
          <CardText>$450</CardText>
          <Button>Locate Book</Button></center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="20%" src={book3} height="350" alt="Card image cap" />
        <CardBody><center>
          <CardTitle><b>Accordin Crimes</b></CardTitle>
          <CardSubtitle>by <b>Annie Proulx</b></CardSubtitle>
          <CardText>$250</CardText>
          <br/>
          <Button>Locate Book</Button></center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="20%" src={book4} height="350" alt="Card image cap" />
        <CardBody><center>
          <CardTitle><b>Bridge of Clay</b></CardTitle>
          <CardSubtitle>by <b>Markus Zusak</b></CardSubtitle>
          <CardText>$130</CardText><br/>
          <Button>Locate Book</Button></center>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="20%" src={book5} height="350" alt="Card image cap" />
        <CardBody><center>
          <CardTitle><b>Southernmost</b></CardTitle>
          <CardSubtitle>by<b> Silas House</b></CardSubtitle>
          <CardText>$120</CardText><br/>
          <Button>Locate Book</Button></center>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
  );
};

export default Example;
