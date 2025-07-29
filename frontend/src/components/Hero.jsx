import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
    return (
        <section className="hero py-3 text-start">
            <h1 className="display-4 mb-3 hero-name-rb">Hello I'm</h1>
            <h1 className="display-4 mb-3 mt-1 hero-name-rb">José Molina.</h1>
            <p className="lead text-muted mb-5">I'm a full-stack developer with expertise in Django, React, and Bootstrap.</p>
            <Button variant="primary" size="lg" href="#projects">View Projects</Button>
        </section>
    );

}

export default Hero;