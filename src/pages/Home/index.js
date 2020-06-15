import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import NavigationBar from '../../components/NavigationBar'

import ProfileImage from '../../assets/images/perfil.png'
import RoutesImage from '../../assets/images/rotas.png'
import VolanteImage from '../../assets/images/volante.png'
import LocalImage from '../../assets/images/local.png'
import chartImage from '../../assets/images/chart.png'

import './styles.css';

function Home() {
  return ( 
    <>
    <NavigationBar/>
    <div className='content'>
    <Container > 
      <Row>
        <Col  xs={12} md={12}>
          <div className='container-perfil'> 
            <div className='image-perfil'>
              <Image src={ProfileImage} roundedCircle/>
            </div>
            <textbox className='name-perfil'>Everton Ferreira</textbox>
          </div>
        </Col>
      </Row>
    </Container>   
    </div> 
    <div className='informations'>
   
    <Container > 
      <Row>
        <Col  xs={12} md={12}>

        <div className='container-info'>
          <div className='ctt'>
            <Image src={VolanteImage}/>
            <label className='info'>25 anos na estrada</label>
          </div>          
          <div className='ctt'>
            <Image src={RoutesImage}/>
            <label className='info'>1000 km rodados na última semana</label>
          </div>
          <div className='ctt'>
            <Image src={LocalImage}/>
            <label className='info'>10 destinos no último mês</label>
          </div>
         </div>              
        </Col>
      </Row>
      <Row>
        <Col>
        <div className='title-chart'>Gráfico de Evolução do Humor</div>
        <Image src={chartImage} fluid/>
        </Col>
      </Row>
    </Container>
    </div>
   
    </>
  );
}

export default Home;
