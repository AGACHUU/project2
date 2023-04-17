import React from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

function AdminLogin() {
  return (
    <Container>
      <Row>
        <Col className='ml-auto mr-auto' lg='4'>
          <Card className='card-register ml-auto mr-auto'>
            <h3 className='title mx-auto'>Admin Login</h3>
            <Form className='register-form'>
              <label>Email</label>
              <InputGroup className='form-group-no-border'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='nc-icon nc-email-85' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder='Email' type='email' />
              </InputGroup>
              <label>Password</label>
              <InputGroup className='form-group-no-border'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='nc-icon nc-key-25' />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder='Password' type='password' />
              </InputGroup>
              <Button block className='btn-round' color='danger'>
                Login
              </Button>
            </Form>
            <div className='forgot'>
              <Button
                className='btn-link'
                color='danger'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminLogin;
