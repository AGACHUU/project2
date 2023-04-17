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
            <h3 className='title mx-auto'>Admin Page</h3>
            <Form className='register-form'>
              <label>welcome!</label>
              <InputGroup className='form-group-no-border'>
                <InputGroupText>
                  <img src={user} alt='' width='20' />
                  {/*이름모양아이콘 */}
                </InputGroupText>

                <Input placeholder='' type='AdminName' />
              </InputGroup>

              <Button block className='btn-round' color='danger'>
                회원리스트
              </Button>
              <Button block className='btn-round' color='danger'>
            리뷰관리
              </Button>
              <Button block className='btn-round' color='danger'>
            신고받은 리뷰 
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminRegister;
