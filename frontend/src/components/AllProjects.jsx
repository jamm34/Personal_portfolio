import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function AllProjects() {
    const [projects, setProjects] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/")
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
                                        const trimmedTech = tech.trim().toLowerCase();
                                        const logo = tech.logo; 

                                        return (
                                            <span key={index} style={{
                                                color: '#fff',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                border: '1px solid #eee',
                                                borderRadius: '6px',
                                                padding: '4px 8px',
                                                background: '#119120ff'
                                            }}>
                                                {logo ? (
                                                    <img src={logo} alt={tech.name || trimmedTech} style={{ width: 20, height: 20 }} />
                                                ) : (
                                                    <i className={`devicon-${trimmedTech}-plain colored`} style={{ fontSize: '20px' }}></i>
                                                )}
                                                <span style={{ textTransform: 'capitalize' }}>{tech.name || trimmedTech}</span>
                                            </span>
                                        );
                                    })}

                                </div>
                            )}                            
                            {project.link_demo && <Button variant="primary" className="button-custom me-2" href={project.link_demo} target="_blank">View Project</Button>}
                             {project.link_repository && <Button variant="primary" className="button-custom me-2" href={project.link_repository} target="_blank">View Code</Button>}
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