import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


function Projects() {
    const { t } = useTranslation();
    const [projects, setProjects] = useState([]);

    const techColors = {
        django: '#092e20',       // verde oscuro
        react: '#61dafb',        // azul claro (color oficial de React)
        bootstrap: '#7952b3',    // púrpura (color oficial de Bootstrap)
        default: '#6c757d',      // gris neutro para tecnologías no listadass
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
                <Col key={project.id} sm={12} md={6} lg={6} className='mb-4'>
                    <Card>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body className="text-center">
                            <Card.Title>{project.title}</Card.Title>
                            {project.technologies && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                                    {project.technologies.split(',').map((tech, index) => {
                                        const techLabel = tech.trim();
                                        const trimmedTech = techLabel.toLowerCase();
                                        const color = techColors[trimmedTech] || techColors.default;
                                        return (
                                            <span key={index} style={{
                                                color: '#112c44',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                border: '1px solid #eee',
                                                borderRadius: '6px',
                                                padding: '4px 8px',
                                                background: '#fff'
                                            }}>
                                                <i className={`devicon-${trimmedTech}-plain colored`} style={{ fontSize: '20px' }}></i>
                                                <span style={{ textTransform: 'capitalize' }}><strong>{techLabel}</strong></span>
                                            </span>
                                        );
                                    })}

                                </div>
                            )}
                            {project.link_demo && <Button variant="primary" className="button-custom me-1 btn-sm" href={project.link_demo} target="_blank">{t('view_project')}</Button>}
                            {project.link_repository && <Button variant="primary" className="button-custom me-2 btn-sm" href={project.link_repository} target="_blank">{t('view_code')}</Button>}
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
            {renderProjects(realProjects.slice(0, 2))}

            <div className="text-center my-1 mb-5">
                <Link to="/all-projects" className="btn btn-primary button-custom">{t('all_projects')}</Link>
            </div>
            <h2 className="display-4 mb-3 hero-name-rd">{t('simulated_projects')}</h2>
            {renderProjects(simulatedProjects.slice(0, 2))}
            <div className="text-center my-1 mb-5">
                <Link to="/all-projects" className="btn btn-primary button-custom">{t('all_projects')}</Link>
            </div>
        </Container>
    );
}
export default Projects;
