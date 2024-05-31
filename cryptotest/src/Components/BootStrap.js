import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ProPHoto from '../Images/prophoto (1).jpg'

function BootStrap() {
  return (
    <div>
       <Container>
      <Row>
        <Col xs={6} md={4}>
          {/* <Image src={ProPHoto}  rounded /> */}
        </Col>
        <Col xs={6} md={4}>
          {/* <Image src={ProPHoto}  roundedCircle /> */}
        </Col>
        <Col xs={6} md={4}>
          <Image src={ProPHoto}  thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default BootStrap

