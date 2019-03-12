import React from 'react';
import NavBar from './index';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Sellbook extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <div class="container">
      
      <br/>
      <center><h2>Book Details</h2></center>
      <Form>
        <FormGroup>
          <Label for="Bookname">Title</Label>
          <Input type="bookname" name="bookname" id="Bookname" placeholder="Bookname" />
        </FormGroup>
        <FormGroup>
        <Label for="Author">Author</Label>
          <Input type="author" name="author" id="Author" placeholder="Author" />
        </FormGroup>
        <FormGroup>
        <Label for="Price">Price</Label>
          <Input type="price" name="price" id="price" placeholder="price" />
        </FormGroup>
        <FormGroup>
        <Label for="copies">Number of copies</Label>
          <Input type="copies"name= "copies" id="copies" placeholder="copies" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
          </FormText>
        </FormGroup>
        <center>
  <Button>Submit</Button></center>
  </Form>
  </div>
  </div>
      );
    }
  }
  export default Sellbook;