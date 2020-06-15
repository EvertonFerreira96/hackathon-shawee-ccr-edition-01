import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SignImage from '../../assets/images/sign.png'; 

import './styles.css';

function Sign() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='containerImage'>
            <Image src={SignImage} fluid/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='content'>
            <div className='title'>Vincule seu celular agora</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='content'>
            <div className='description'>
            Para utilizar você precisa ativar este aparelho, informe o número do seu celular e solicite um código de ativação que será enviado por SMS.
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='container-input'> 
            <input type="text" class="inp" placeholder="Informe o número do seu celular" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className='container-button'> 
          <LinkContainer to='/sign'>
            <Button className='btn_cancel' variant='light'>CANCELAR</Button>
          </LinkContainer>
          <LinkContainer to='/confirm'>
            <Button className='btn_success' variant='success'>OK!</Button>
          </LinkContainer>
          </div>
        </Col>
      </Row>
   </Container>
  );
}

export default Sign;