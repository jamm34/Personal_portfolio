import React from 'react';
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="text-center py-4 mt-5 border-top text-muted"> {/* Bootstrap text alignment, padding, margin-top, border-top, text color */}
      <Container>
        <p>&copy; {new Date().getFullYear()} José Molina. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;