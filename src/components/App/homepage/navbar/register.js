import React from 'react';
import { Col, Row, Button, Form, FormGroup,Label, Input, FormText } from 'reactstrap';
import NavBar from './index';

class Register extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
      <div class="container">
      <Form>
        <center>
        <h2>Sign up</h2>
        </center>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email id" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="ConfirmEmail">Confirm Email</Label>
              <Input type="email" name="email" id="exampleemail" placeholder="confirm email" />
            </FormGroup>
          </Col>
          </Row>
          <Row form>
          <Col md={6}>
          <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Confirm password" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="enter your address"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button class="btn btn-primary center-block">Register</Button>
      </Form>
      </div>
      </div>
    );
  }
}
export default Register;