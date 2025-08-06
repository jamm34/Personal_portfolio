import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaInfoCircle, FaUser, FaLightbulb, FaBullseye } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
    return (
        <section id="about" className="py-5" style={{ background: "#fdfdfd49" }}>
            <Container>

                {/* About Me - Full Width */}
                <Row className="justify-content-center mb-5">
                    <Col md={10}>
                        <header className="mb-4 text-center">
                            <FaInfoCircle className="text-primary mb-2" size={32} />
                            <h2 className="fw-bold hero-name-rd">{t('about_title')}</h2>
                            <p className="text-muted">
                                Building purposeful web experiences with empathy and precision.
                            </p>
                        </header>
                        <div>
                            <h3 className="text-dark">José Abraham Molina Reyes</h3>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Title:</strong> Full-Stack Web Developer</li>
                                <li><strong>Location:</strong> Honduras</li>
                                <li><strong>Email:</strong> jamreyes26@gmail.com</li>
                            </ul>
                            <p className="text-muted">
                                I'm passionate about creating clean, accessible digital solutions that blend visual appeal with technical strength. My workflow is guided by modern tools and constant learning.
                            </p>
                            <p className="text-muted">
                                With a degree in Administrative Informatics and a Master’s in progress in Software Engineering, I aim to build tools that solve real-world problems effectively and elegantly.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* My Story - Full Width */}
                <Row className="justify-content-center mb-5">
                    <Col md={10}>
                        <div className="text-center mb-3">
                            <FaUser size={28} className="text-info mb-2" />
                            <h3 className="fw-bold hero-name-rd">My Story</h3>
                        </div>
                        <p className="text-muted text-center px-3">
                            My journey into development started with a fascination for structure and function—how interfaces work and how users interact. Today, I channel that energy into crafting thoughtful, user-first designs that communicate clearly and solve meaningful problems. I care deeply about UX, accessibility, and using code as a medium of expression.
                        </p>
                    </Col>
                </Row>

                {/* Mission & Vision - Two Columns with Badges */}
                <Row className="justify-content-center text-center mb-5">
                    <Col md={5} className="mb-4">
                        <h2 bg="success" className="mb-2 px-3 py-2 fs-6">
                            <FaLightbulb className="me-2 hero-name-rd" />
                            Mission
                        </h2>
                        <p className="text-muted">
                            Build scalable, user-centered web solutions that address real needs and generate meaningful value.
                        </p>
                    </Col>
                    <Col md={5} className="mb-4">
                        <h2 bg="danger" className="mb-2 px-3 py-2 fs-6">
                            <FaBullseye className="me-2 hero-name-rd" />
                            Vision
                        </h2>
                        <p className="text-muted">
                            Become a standout developer in Latin America, contributing innovative and socially impactful tech projects.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
