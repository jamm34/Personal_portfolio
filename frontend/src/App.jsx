import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './index.css'
import Hero from './components/Hero';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import { Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='app-container p-0'>
      <Row className='g-0'>
        <Col xs={12} md={2} lg={3} className='sidebar-col'>
          <Header />          
        </Col>
        <Col xs={12} md={9} lg={9} className='content-col'>
          <main className='content-area-rb'>
            <Hero />
            <Projects />
            <Skills />
            <Footer />
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App
