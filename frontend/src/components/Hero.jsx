import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SectionLayout from "./SectionLayout";

function Hero() {
    const { t } = useTranslation();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const terminalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const showSuggestions = () => {
        Swal.fire({
            title: 'Hint',
            html: `
      <p>This terminal accepts commands like:</p>
      <ul style="text-align: left;">
        <li><code>hello world</code></li>
        <li><code>skills</code></li>
        <li><code>contact</code></li>
        <li><code>projects</code></li>
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
        const command = input.toLowerCase().trim();

        if (command === 'clear') {
            setHistory([]);
            setInput('');
            return;
        }

        setHistory((prev) => [...prev, `$ ${input}`]);

        if (command === 'contact') {
            navigate('/contact');
        } else if (command === 'projects') {
            navigate('/all-projects');
        } else if (command === 'skills') {
            navigate('/skills');
        } else if (command.includes('hello world')) {
            Swal.fire({
                title: 'Hello world!',
                text: 'Command executed correctly.',
                icon: 'success',
                confirmButtonText: 'Cool',
                background: '#1e1e1e',
                color: '#00ff00'
            });
        }

        setInput('');
    };

    return (
        <SectionLayout bgColorClass="bg-white hero-premium" id="hero">
            <div className="row align-items-center g-4">
                <div className="col-md-6 text-start hero-copy">
                    <p className="hero-eyebrow mb-2">Fullstack Developer</p>
                    <h1 className="display-4 mb-0 hero-name-rb">{t('hero_title')}</h1>
                    <p className="lead text-muted mb-3">{t('hero_description')}</p>
                    <div className="hero-actions">
                        <Button as={Link} to="/all-projects" className="button-custom me-2 mb-2">
                            {t('projects')}
                        </Button>
                        <Button as={Link} to="/contact" variant="outline-primary" className="hero-outline-btn mb-2">
                            {t('contact')}
                        </Button>
                    </div>
                </div>

                <div className="col-md-6 mt-2 mt-md-0 hero-terminal-wrap">
                    <button
                        className="btn btn-outline-success blinking-foco mb-2"
                        onClick={showSuggestions}
                    >
                        {t('hero_suggestion')}
                    </button>
                    <div
                        className="fake-terminal bg-dark text-success p-3 rounded shadow-sm"
                        style={{ fontFamily: 'monospace', maxHeight: '250px', overflowY: 'auto' }}
                        ref={terminalRef}
                    >
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
        </SectionLayout>
    );
}

export default Hero;
