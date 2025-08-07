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

                        </header>
                        <div>
                            <p>{t('about_me_1')}</p>
                        </div>
                    </Col>
                </Row>

                {/* My Story - Full Width */}
                <Row className="justify-content-center mb-5">
                    <Col md={10}>
                        <div className="text-center mb-3">
                            <FaUser size={28} className="text-info mb-2" />
                            <h3 className="fw-bold hero-name-rd">{t('story_title')}</h3>
                        </div>
                        <p className="text-muted  px-3">
                            {t('about_story_1')} {t('about_story_2')} {t('about_story_3')} {t('about_story_4')} {t('about_story_5')} 
                        </p>
                        <p className="text-muted  px-3">
                            {t('about_story_6')} {t('about_story_7')} {t('about_story_8')} {t('about_story_9')} 
                        </p>
                    </Col>
                </Row>

                {/* Mission & Vision - Two Columns with Badges */}
                <Row className="justify-content-center text-center mb-5">
                    <Col md={5} className="mb-4">
                        <h2 bg="success" className="mb-2 px-3 py-2 fs-6">
                            <FaLightbulb className="me-2 hero-name-rd" />
                           {t('mission')}
                        </h2>
                        <p className="text-muted">
                            {t('mission_content')}
                        </p>
                    </Col>
                    <Col md={5} className="mb-4">
                        <h2 bg="danger" className="mb-2 px-3 py-2 fs-6">
                            <FaBullseye className="me-2 hero-name-rd" />
                            {t('vision')}
                        </h2>
                        <p className="text-muted">
                            {t('vision_content')}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
