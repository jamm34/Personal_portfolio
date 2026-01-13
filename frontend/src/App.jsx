import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import SideBar from './components/sidebar/SideBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/about/About';
import AllProjects from './components/AllProjects';
import Contact from './components/Contact';


import { Container, Row, Col } from 'react-bootstrap';
import FloatingLanguageToggle from './components/FloatingLanguageToggle';


function App() {

  return (
    <Router>
      <Container fluid className='app-container p-0'>
        <Row className='g-0'>
          <Col xs={12} md={3} lg={3} className='sidebar-col'>
            <SideBar />
          </Col>

          <Col xs={12} md={9} lg={9} className='content-col'>
            <main className='content-area-rb' >
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Projects />
                    <Skills />
                    <Footer />

                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/all-projects" element={<AllProjects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
              <FloatingLanguageToggle />
            </main>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;

