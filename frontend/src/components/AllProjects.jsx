import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import './AllProjects.css';
import './Badges.css';



function AllProjects() {
    const [projects, setProjects] = useState([]);
    const { t } = useTranslation();

    const techColors = {
        django: '#a5d6a7',       // verde claro
        react: '#81d4fa',        // azul claro
        bootstrap: '#b39ddb',    // púrpura claro
        python: '#ffe082',       // amarillo claro
        javascript: '#fff59d',   // amarillo muy claro
        html: '#ffab91',         // naranja claro
        css: '#90caf9',          // azul más claro
        sql: '#cfd8dc',          // gris azulado
        git: '#ffcdd2',          // rojo claro
        default: '#e0e0e0',      // gris claro para tecnologías no listadas
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/projects/`)

            .then((res) => {
                setProjects(res.data);
            })
            .catch((err) => {
                console.error("Error fetching projects:", err);
            });
    }, []);


    const renderProjects = (list) => (

        <Row>
            {list.map(project => (
                <Col key={project.id} sm={6} md={5} lg={4} className='mb-4'>
                    <Card className="project-card">
                        <Card.Img variant="top" src={project.image} style={{ height: '140px', objectFit: 'cover' }} />
                        <Card.Body className="text-center" style={{ padding: '10px' }}>
                            <Card.Title>{project.title}</Card.Title>
                            {project.technologies && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', justifyContent: 'center' }}>
                                    {project.technologies.split(',').map((tech, index) => {
                                        const trimmedTech = tech.trim().toLowerCase();
                                        const logo = tech.logo;
                                        const color = techColors[trimmedTech] || techColors.default;
                                        return (
                                            <span key={index} className="tech-badge-item" style={{
                                                color: '#112c44',
                                                fontSize: '10.5px',
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                border: '1px solid #eee',
                                                borderRadius: '6px',
                                                padding: '2px 6px',
                                                background: color
                                            }}>
                                                {logo ? (
                                                    <img src={logo} alt={tech.name || trimmedTech} style={{ width: 10, height: 10 }} />
                                                ) : (
                                                    <i className={`devicon-${trimmedTech}-plain colored`} style={{ fontSize: '15px' }}></i>
                                                )}
                                                <span style={{ textTransform: 'capitalize' }}>{tech.name || trimmedTech}</span>
                                            </span>
                                        );
                                    })}

                                </div>
                            )}
                            {project.link_demo && <Button variant="primary" className="button-custom-projects me-1 btn-sm" href={project.link_demo} target="_blank">View Project</Button>}
                            {project.link_repository && <Button variant="primary" className="button-custom-projects me-2 btn-sm" href={project.link_repository} target="_blank">View Code</Button>}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );

    const realProjects = projects.filter(p => p.project_type === 'real');
    const simulatedProjects = projects.filter(p => p.project_type === 'simulated');

    return (
        <Container className="mt-5">
            <h2 className="display-4 mb-3 hero-name-rd">{t('personal_projects')}</h2>
            {renderProjects(realProjects)}
            <h2 className="display-4 mb-3 hero-name-rd">{t('simulated_projects')}</h2>
            {renderProjects(simulatedProjects)}
        </Container>
    );
}
export default AllProjects;