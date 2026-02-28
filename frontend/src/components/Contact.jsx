import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import contactImage from "../assets/contact-image.png";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      Swal.fire({
        icon: "error",
        title: "Configuration missing",
        text: "Email service is not configured yet.",
        confirmButtonText: "OK",
      });
      return;
    }

    emailjs.sendForm(emailServiceId, emailTemplateId, form.current, emailPublicKey).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been successfully sent. I will get back to you soon.",
          confirmButtonText: "OK",
        });
        form.current.reset();
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
          confirmButtonText: "OK",
        });
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-5 contact-premium-section">
      <Container className="contact-premium">
        <Row className="align-items-stretch g-4">
          <Col lg={6}>
            <div className="contact-form-card p-4 p-md-5 h-100">
              <p className="hero-eyebrow mb-2">Let&apos;s connect</p>
              <h2 className="mb-3 hero-name-rd">{t("contact_title")}</h2>
              <p className="text-muted mb-4 lead">{t("contact_description")}</p>

              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>{t("name")}</Form.Label>
                  <Form.Control
                    type="text"
                    className="contact-input"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>{t("email")}</Form.Label>
                  <Form.Control
                    type="email"
                    className="contact-input"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>{t("message")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    className="contact-input"
                    name="message"
                    rows={3}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>

                <Button className="button-custom" variant="primary" type="submit">
                  {t("button_send")}
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-info-card p-4 p-md-5 h-100 text-center text-lg-start">
              <img
                src={contactImage}
                alt="Contact illustration"
                className="img-fluid mb-4 contact-premium-image"
              />
              <div className="contact-links">
                <p>
                  <FaEnvelope className="me-2 text-primary" />
                  jamreyes26@gmail.com
                </p>
                <p>
                  <FaPhone className="me-2 text-primary" />
                  +504 3236-1945
                </p>
                <p>
                  <FaGithub className="me-2 text-dark" />
                  <a href="https://github.com/jamm34" target="_blank" rel="noopener noreferrer">
                    github.com/jamm34
                  </a>
                </p>
                <p>
                  <FaLinkedin className="me-2 text-primary" />
                  <a
                    href="https://linkedin.com/in/jos%C3%A9-abraham-molina-reyes-33062715b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/josemolina
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
