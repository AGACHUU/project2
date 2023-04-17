import React from 'react';
import user from '../../assets/img/user.jpg';
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

function AdminRegister() {
  return (
    <Container>
      <Row>
        <Col className='ml-auto mr-auto' lg='4'>
          <Card className='card-register ml-auto mr-auto'>
            <h3 className='title mx-auto'>Admin Register</h3>
            <Form className='register-form'>
              <label>Name</label>
              <InputGroup className='form-group-no-border'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <img src={user} alt='' width='20' />
                    {/*이름모양아이콘 */}
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder='AdminName' type='AdminName' />
              </InputGroup>
              <label>Email</label>
              <InputGroup className='form-group-no-border'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='nc-icon nc-email-85' />
                    {/*편지모양아이콘임 */}
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder='Email' type='email' />
              </InputGroup>
              <label>Password</label>
              <InputGroup className='form-group-no-border'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <i className='nc-icon nc-key-25' />
                    {/*키모양아이콘임 */}
                  </InputGroupText>
                </InputGroupAddon>

                <Input placeholder='Password' type='password' />
              </InputGroup>

              <Button block className='btn-round' color='danger'>
                Register
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminRegister;
