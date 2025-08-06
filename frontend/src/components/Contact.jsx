import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import contactImage from "../assets/contact-image.png";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kxe3trp',     // Reemplaza esto
            'template_mc5kfnn',    // Reemplaza esto
            form.current,
            'H9lzIzZYnzfyW3dYi'      // Reemplaza esto
        ).then(
            (result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been successfully sent. I will get back to you soon.',
                    confirmButtonText: 'OK',
                });
                form.current.reset();
            },
            (error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                    confirmButtonText: 'OK',
                });
                console.error(error.text);
            }
        );
    };


    return (
        <section id="contact" className="py-5 bg-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2 className="mb-3 hero-name-rd">{t('contact_title')}</h2>
                        <p className="text-muted mb-4 lead">{t('contact_description')}</p>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>{t('name')}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name" 
                                    placeholder="Your name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>{t('email')}</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email" // 🔸 necesario para {{email}} en la plantilla
                                    placeholder="Your email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>{t('message')}</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message" // 🔸 este se usa para {{message}}
                                    rows={3}
                                    placeholder="Your message"
                                    required
                                />
                            </Form.Group>

                            <Button className="button-custom" variant="primary" type="submit">
                                {t('button_send')}
                            </Button>
                        </Form>

                    </Col>

                    <Col md={6} className="mt-4 mt-md-0 text-center">
                        <img
                            src={contactImage}
                            alt="Contact illustration"
                            className="img-fluid mb-4"
                            style={{ maxWidth: "80%" }}
                        />
                        <div className="text-start ps-4">
                            <p><FaEnvelope className="me-2 text-primary" /> jamreyes26@gmail.com</p>
                            <p><FaPhone className="me-2 text-primary" /> +504 3236-1945</p>
                            <p><FaGithub className="me-2 text-dark" /> <a href="https://github.com/jamm34" target="_blank" rel="noopener noreferrer">github.com/jamm34</a></p>
                            <p><FaLinkedin className="me-2 text-primary" /> <a href="https://linkedin.com/in/josé-abraham-molina-reyes-33062715b" target="_blank" rel="noopener noreferrer">linkedin.com/in/josemolina</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
