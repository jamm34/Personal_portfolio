import React from 'react';
import { Container } from 'react-bootstrap';
// Puedes importar estilos si usas un archivo CSS global o un módulo CSS
// import './SectionLayout.css'; 

const SectionLayout = ({ title, description, children, bgColorClass = 'bg-white', id }) => {
    return (

        <section
            id={id}
            className={`py-5 py-lg-6 ${bgColorClass}`}
            style={{ minHeight: '60vh' }} // Asegura que el Hero ocupe un buen espacio
        >
            <Container>
                {children}
            </Container>
        </section>
    );
};

export default SectionLayout;