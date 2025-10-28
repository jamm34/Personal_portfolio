import React from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';

// IMPORTA CADA LOGO INDIVIDUALMENTE AQUÍ
import djangoLogo from '../assets/django.png';
import reactLogo from '../assets/react.png';
import bootstrapLogo from '../assets/bootstrap.png';
import pythonLogo from '../assets/python.png';
import javascriptLogo from '../assets/javascript.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import sqlLogo from '../assets/sql.png';
import gitLogo from '../assets/git.png';
import { useTranslation } from 'react-i18next';
import SectionLayout from './SectionLayout';


function Skills() {
  const { t } = useTranslation();

  const skillsList = [
    { name: 'Django', logo: djangoLogo }, // ¡Ahora usa la variable importada!
    { name: 'React', logo: reactLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'SQL', logo: sqlLogo },
    { name: 'Git', logo: gitLogo },
  ];

  return (
    <SectionLayout tbgColorClass="bg-white" id="hero">
      <h2 className="hero-name-rd">{t('skills')}</h2>
      <Container>
        <Row className="g-2 justify-content-center skills-col py-4"> {/* Agrega justify-content-center si quieres que los logos estén centrados */}
          {skillsList.map((skill, idx) => (
            <Col xs="auto" key={idx} className="d-flex justify-content-center align-items-center"> {/* Centrar el contenido de la columna */}
              {/* Aquí es donde solo ponemos el logo dentro de la insignia */}
              <div className="tech-badge-logo d-flex align-items-center justify-content-center  p-3">
                <Image src={skill.logo} alt={skill.name} style={{ height: '120px', width: 'auto' }} fluid />
                {/* Opcional: si quieres un tooltip o texto oculto al pasar el mouse */}
                <span className="visually-hidden">{skill.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionLayout>
  );
}

export default Skills;