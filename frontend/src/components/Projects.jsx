import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";


function Projects() {
    const [projects, setProjects] = useState([]);

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
                <Col key={project.id} sm={12} md={6} lg={5} className='mb-4'>
                    <Card>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            {project.technologies && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                                    {project.technologies.split(',').map((tech, index) => {
                                        const trimmedTech = tech.trim().toLowerCase();
                                        const logo = tech.logo; // si estás obteniendo tech como objeto, ajusta esto

                                        return (
                                            <span key={index} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                border: '1px solid #eee',
                                                borderRadius: '6px',
                                                padding: '4px 8px',
                                                background: '#b7d4f2ff'
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
                            {project.link_demo && <Button variant="primary" href={project.link_demo} target="_blank">Ver Proyecto</Button>}
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
            <h2>Real Projects</h2>
            {renderProjects(realProjects)}

            <h2>Simulated Projects</h2>
            {renderProjects(simulatedProjects)}
        </Container>
    );
}
export default Projects;