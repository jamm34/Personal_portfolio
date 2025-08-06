import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const { t } = useTranslation();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const terminalRef = useRef(null);

    useEffect(() => {

        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const showSuggestions = () => {
        Swal.fire({
            title: '💡 Hint',
            html: `
      <p>This terminal accept commands like:</p>
      <ul style="text-align: left;">
        <li><code>hello world</code></li>
        <li><code>skills</code></li>
        <li><code>contact</code></li>
        <li><code>clear</code></li>
      </ul>
    `,
            confirmButtonText: 'Done',
            background: '#1e1e1e',
            color: '#00ff00'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const command = input.toLowerCase();
        // Procesar comandos especiales
        if (command === 'clear') {
            setHistory([]);
        } else if (command === 'contact') {
            alert('Contacto: jammyes26@gmail.com');
            setHistory([...history, `$ ${input}`]);
        } else if (command === 'skills') {
            const target = document.getElementById("skills");
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
            setHistory([...history, `$ ${input}`]);
        } else {
            setHistory([...history, `$ ${input}`]);
            if (command.includes('hello world')) {
                Swal.fire({
                    title: '🌎 ¡Hola mundo!',
                    text: 'El comando se ejecutó correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                    background: '#1e1e1e',
                    color: '#00ff00'
                });
                
            }
        }

        setInput('');
    };

    return (
        <section className="hero py-5 container">
            <div className="row align-items-center">
                {/* Texto del Hero */}
                <div className="col-md-6 text-start">
                    <h1 className="display-4 mb-0 hero-name-rb">{t('hero_title')}</h1>
                    
                    <p className="lead text-muted mb-2">{t('hero_description')}</p>
                </div>


                {/* Terminal interactiva */}
                <div className="col-md-6 mt-4">
                    <button
                        className="btn btn-outline-success blinking-foco mb-2"
                        onClick={showSuggestions}
                    >
                        💡 {t('hero_suggestion')}
                    </button>
                    <div className="fake-terminal bg-dark text-success p-3 rounded shadow-sm" style={{ fontFamily: 'monospace', maxHeight: '250px', overflowY: 'auto' }} ref={terminalRef}>
                        {history.slice(-15).map((line, i) => (
                            <div key={i}>{line}</div>
                        ))}
                        <form onSubmit={handleSubmit} className="d-flex mt-2">
                            <span>$&nbsp;</span>
                            <input
                                type="text"
                                className="form-control bg-dark text-success border-0"
                                value={input}
                                placeholder="Write a command..."
                                onChange={(e) => setInput(e.target.value)}
                                autoFocus
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Hero;
