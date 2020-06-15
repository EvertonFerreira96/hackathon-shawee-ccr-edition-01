import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SmsImage from '../../assets/images/sms.png'; 

import './styles.css';

function Sign() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='containerImage'>
            <Image src={SmsImage} fluid/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='content'>
            <div className='title'>Código de validação</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='content'>
            <div className='description'>
            Insira o código recebido por SMS, são 6 dígitos.
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='container-input'> 
            <input type="text" maxlength='6' class="inp" placeholder="0  0  0  0  0  0" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='container-button'> 
            <LinkContainer to='/sign'>
              <Button className='btn_cancel' variant='light'>CANCELAR</Button>
            </LinkContainer>
            <LinkContainer to='/home'>
              <Button className='btn_success' variant='success'>OK!</Button>
            </LinkContainer>

          </div>
        </Col>
      </Row>
   </Container>
  );
}

export default Sign;